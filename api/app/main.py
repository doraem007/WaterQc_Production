from fastapi import FastAPI, HTTPException, Response
from pydantic import BaseModel
import mysql.connector
from typing import List  
from dotenv import load_dotenv
import os
import datetime
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
import httpx
import asyncio


load_dotenv()
app = FastAPI(docs_url="/documentation", redoc_url=None)


time = datetime.datetime.now()
current_time =  time.strftime('%Y-%m-%d %H:%M:%S')
formatted_date = time.strftime('%Y-%m-%d')

def connect_db():
    cnx = mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME")
    )
    return cnx

#################################################################################  Device ##############################################################################################################
class Devices(BaseModel):
    id: int
    currentValue: float
    stationId: int


def updateDevice(data: List[Devices]):
    try:
        cnx = connect_db()
        with cnx.cursor() as cursor:
            for device in data:
                deviceQuery = (
                    "UPDATE Device "
                    "SET stationId = %s, currentValue = %s, updatedAt = %s "
                    "WHERE id = %s"
                )
                deviceData = (device.stationId, device.currentValue, current_time, device.id)
                cursor.execute(deviceQuery, deviceData)
        
        cnx.commit()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    finally:
        cursor.close()
        cnx.close()

    return {"message": "Devices updated successfully"}

def updateLog(data: List[Devices]):
    try:
        cnx = connect_db()
        with cnx.cursor() as cursor:
            for device in data:
                logQuery = (
                    "INSERT INTO DeviceLog (sensorValue, updatedAt, logAt, deviceId) "
                    "VALUES (%s, %s, %s, %s)"
                )
                logData = (device.currentValue, current_time, formatted_date, device.id)
                cursor.execute(logQuery, logData)
        
        cnx.commit()
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    finally:
        cursor.close()
        cnx.close()

    return {"message": "Logs updated successfully"}




@app.post("/deviceall")
def getDevice(data: List[Devices]):
    try:
        updateDevice(data)
        updateLog(data)
        return {"message": "Devices and logs updated successfully"}
    except HTTPException as e:
        return {"error": f"HTTPException: {e.detail}"}
    except Exception as e:
        return {"error": f"Exception: {str(e)}"}







##################################################################################### Linenotify ######################################################################################


class LineNotify(BaseModel):
    id: int



@app.post("/send-notification/{message}")
async def send_notification(message: str, token: str):
    url = "https://notify-api.line.me/api/notify"
    headers = { 
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/x-www-form-urlencoded"
    }
    payload = {"message": message}
    async with httpx.AsyncClient() as client:
        response = await client.post(url, headers=headers, data=payload)
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail="Failed to send notification")
        return {"message": "Notification sent successfully!"}
    

@app.post("/line_notify")
async def alert_line(line: LineNotify):
    try:
        cnx = connect_db()
        with cnx.cursor() as cursor:
            lineQuery = (
                "SELECT "
                    "Organization.token, "
                    "Station.stationName, "
                    "Device.currentValue, "
                    "Device.deviceName, "
                    "Device.minControlValue, "
                    "Device.maxControlValue, "  
                    "DeviceType.unitType " 
                "FROM "
                    "Organization "
                "JOIN "
                    "Station ON Station.orgId = Organization.id "
                "JOIN "
                    "Device ON Device.stationId = Station.id "
                "JOIN "
                    "DeviceType ON DeviceType.id = Device.deviceTypeId "
                "WHERE Organization.id = %s;"
            )

            lineData = (line.id, )
            cursor.execute(lineQuery, lineData)
            processed_data = []
            for row in cursor.fetchall():
                processed_data.append({
                    'token': row[0],
                    'stationName': row[1],
                    'currentValue': row[2],
                    'deviceName': row[3],
                    'minControlValue': row[4],
                    'maxControlValue': row[5],
                    'unitType': row[6]
                })
        
        tasks = []
        for data in processed_data:
            token = data["token"]
            stationName = data['stationName']
            currentValue = data['currentValue']
            deviceName = data['deviceName']
            minControlValue = data['minControlValue']
            maxControlValue = data['maxControlValue']
            unitType = data['unitType']

            notification_message = ""
            if currentValue <= -1:
                notification_message = (
                    f"\nStation: {stationName}\nDevice: {deviceName} \nทำงานผิดพลาด!!! \nหรือ ชำรุด โปรดตรวจสอบ!!!"
                )
            elif currentValue > maxControlValue:
                notification_message = (
                    f"\nStation: {stationName}\nDevice: {deviceName}\nค่า {currentValue} มากกว่าค่าสูงสุด\nที่กำหนดคือ {maxControlValue} {unitType}"
                )
            elif currentValue < minControlValue:
                notification_message = (
                    f"\nStation: {stationName}\nDevice: {deviceName}\nค่า {currentValue} น้อยกว่าค่าต่ำสุด\nที่กำหนดคือ {minControlValue} {unitType}"
                )

            if notification_message:
                tasks.append(send_notification(notification_message, token))

        await asyncio.gather(*tasks)

        return processed_data
    except mysql.connector.Error as e:
        raise HTTPException(status_code=500, detail=f"MySQL Error: {str(e)}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        cursor.close()
        cnx.close()


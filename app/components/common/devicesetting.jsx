// 'use client'

// import { useState, useEffect } from 'react'
// import axios from 'axios'
// import { MdEdit } from "react-icons/md";
// import { ImBin } from "react-icons/im";

// export default function DeviceSetting({ orgId, stationId }) {
//     const [data, setData] = useState([]);

//     async function fetchData() {
//         try {
//             const res = await axios.get(`https://waterqc.nareubad.work/api/org/${orgId}/station/${stationId}`)
//             setData(res.data.device)
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     useEffect(() => {
//         fetchData();
//     }, [])
    
//     return (
//         <div>
//             <div><button className='btn text-lg btn-info text-white mb-4 no-animation cursor-auto hover:bg-info hover:border-transparent'>Device</button></div>
//             <div className="overflow-y-auto max-w-full px-2 rounded-md bg-gradient-to-br from-sky-50 to-sky-100 shadow-md">
//                 <table className="table table-xs text-center font-bold lg:table-md">
//                     <thead>
//                         <tr className="border-black border-2-b">
//                             <th>deviceId</th>
//                             <th>deviceName</th>
//                             <th>modbusId</th>
//                             <th>displayorder</th>
//                             <th>แก้ไข</th>
//                             <th>ลบ</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((item) => (
//                             <tr key={item.id}>
//                                 <td>{item.deviceId}</td>
//                                 <td>{item.deviceName}</td>
//                                 <td>{item.modbusId}</td>
//                                 <td>{item.displayorder}</td>
//                                 <td><button className='btn btn-warning text-white'><MdEdit /></button></td>
//                                 <td><button className='btn btn-error text-white'><ImBin /></button></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }
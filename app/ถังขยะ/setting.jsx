import Tokenline from "../common/tokenline"
import DeviceSetting from "./devicesetting";
import Role from "../user/role";

export default function Setting({ orgId, stationId }) {
    return (
        <div className="p-2 sm:p-4">
            <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-box mb-4 min-h-full p-4">
                <Tokenline orgId={orgId} />
            </div>
            <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-box mb-4 p-4">
                <DeviceSetting orgId={orgId} stationId={stationId} />
            </div>
            <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-box p-4">
                <Role />
            </div>
        </div>
    );
}
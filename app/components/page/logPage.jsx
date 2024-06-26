import Navbar from "../common/navbar";
import TableLog from "../table/tableLog"

export default function LogPage({ orgId, stationId }) {
    return (
        <section className="w-full overflow-y-auto">
            <Navbar orgId={orgId} stationId={stationId}>บันทึก</Navbar>
            <TableLog orgId={orgId} stationId={stationId} />
        </section>
    );
} 
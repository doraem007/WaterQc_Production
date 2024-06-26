import MapStation from "../maps/mapStation"
import Navbar from "../common/navbar";

export default function StationPage({ orgId }) {
    return (
        <section className="w-full overflow-y-auto">
            <Navbar orgId={orgId}>หน้าแรก</Navbar>
            <MapStation orgId={orgId} />
        </section>
    );
}
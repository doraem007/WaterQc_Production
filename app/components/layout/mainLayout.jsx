import Sidebar from "../common/sidebar"

export default function MainLayout({ children, orgId, stationId }) {
    return (
        <main className="flex h-screen overflow-hidden">
            <Sidebar orgId={orgId} stationId={stationId} />
            {children}
        </main>
    );
}
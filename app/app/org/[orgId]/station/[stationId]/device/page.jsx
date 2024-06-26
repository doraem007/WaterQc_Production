import MainLayout from "@/components/layout/mainLayout"
import DevicePage from "@/components/page/devicePage"

export const metadata = {
    title: "หน้าแรก",
    description: "Generated by create next app",
};

export default function Page({ params }) {
    return (
        <MainLayout orgId={params.orgId} stationId={params.stationId}>
            <DevicePage orgId={params.orgId} stationId={params.stationId} />
        </MainLayout>
    );
}
import MainLayout from "@/components/layout/mainLayout"
import LogPage from "@/components/page/logPage";

export const metadata = {
    title: "บันทึก",
    description: "Generated by create next app",
  };

export default function Page({ params }) {
    return (
        <MainLayout orgId={params.orgId} stationId={params.stationId}>
            <LogPage orgId={params.orgId} stationId={params.stationId} />
        </MainLayout>
    );
}
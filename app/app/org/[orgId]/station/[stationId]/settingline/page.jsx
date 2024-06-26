import MainLayout from "@/components/layout/mainLayout";
import Navbar from "@/components/common/navbar";
import Tokenline from "../../../../../../components/common/tokenline";

export default function Page({ params }) {
    return (
        <MainLayout>
            <section className="w-full overflow-y-auto">
                <Navbar>ตั้งค่าไลน์</Navbar>
                <div className="md:p-4">
                    <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-box mb-4 min-h-[300px] p-4">
                        <Tokenline orgId={params.orgId} />
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
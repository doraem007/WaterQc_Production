import MainLayout from "@/components/layout/mainLayout";
import Navbar from "@/components/common/navbar";

export default function Page() {
    return (
        <MainLayout>
            <section className="w-full overflow-y-auto">
                <Navbar>เพิ่มผู้ใช้</Navbar>
                <div className="md:p-4">
                    test
                </div >
            </section>
        </MainLayout>
    );
}
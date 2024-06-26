import MainLayout from "@/components/layout/mainLayout";
import Navbar from "@/components/common/navbar";

export default function Page() {
    return (
        <MainLayout>
            <section className="w-full overflow-y-auto">
                <Navbar>ตั้งค่าสถานี</Navbar>
                <div className="md:p-4">
                    test
                </div >
            </section>
        </MainLayout>
    );
}
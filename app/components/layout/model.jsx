export default function Model({ children }) {
    return (
        <div className="fixed z-[10] inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
                {children}
            </div>
        </div>
    );
}
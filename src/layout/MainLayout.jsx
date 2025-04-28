import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function MainLayout({ children }) {
    return (
        <div className="bg-red-50 grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Header />
            <main className="overflow-y-auto">{children}</main>
            <Footer />
        </div>
    );
}
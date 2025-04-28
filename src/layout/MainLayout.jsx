import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function MainLayout({ children }) {
    return (
        <div className="">
            <Header />
            <main className="overflow-y-auto">{children}</main>
            <Footer />
        </div>
    );
}
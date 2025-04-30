import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

export default function MainLayout() {

    return (
        <div className="bg-sweetPeach grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Header />
            <main className="overflow-y-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
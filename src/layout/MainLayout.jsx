import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";

export default function MainLayout( { searchTerm, onSearchChange } ) {

    return (
        <div className="bg-red-50 grid grid-rows-[auto_1fr_auto] min-h-screen">
            <Header searchTerm={searchTerm} onSearchChange={onSearchChange} />
            <main className="overflow-y-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
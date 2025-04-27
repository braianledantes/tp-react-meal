import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Details from "./pages/Details/Details.jsx";

function App() {

    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
            <header className="flex items-center justify-between bg-gray-200 p-4 sticky top-0">
                <h1 className="text-3xl font-bold">Recetas</h1>
                <nav className="bg-gray-200">
                    <ul className="flex gap-4">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/favorites">Favoritos</a></li>
                    </ul>
                </nav>
            </header>

            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/details/:id" element={<Details />} />
                        <Route path="/favorites" element={<Favorites />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <footer className="bg-gray-200 p-4">
                <p className="text-center">Recetas App &copy; 2023</p>

            </footer>
        </div>
    )
}

export default App

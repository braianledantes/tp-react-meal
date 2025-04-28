import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home/Home.jsx";
import Favorites from "../pages/Favorites/Favorites.jsx";
import Details from "../pages/Details/Details.jsx";
import PATHS from "./paths";
import MainLayout from "../layout/MainLayout.jsx";

function Router() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path={PATHS.HOME} element={<Home />} />
          <Route path={PATHS.FAVORITES} element={<Favorites />} />
          <Route path={PATHS.DETAILS} element={<Details />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default Router;
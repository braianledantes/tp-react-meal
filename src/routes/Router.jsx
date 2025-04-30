import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home/Home.jsx";
import Favorites from "../pages/Favorites/Favorites.jsx";
import Details from "../pages/Details/Details.jsx";
import PATHS from "./paths";
import MainLayout from "../layout/MainLayout.jsx"; 

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={PATHS.FAVORITES} element={<Favorites />} />
          <Route path={PATHS.DETAILS} element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
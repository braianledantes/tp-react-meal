import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home/Home.jsx";
import Favorites from "../pages/Favorites/Favorites.jsx";
import Details from "../pages/Details/Details.jsx";
import Error from "../pages/Error/Error.jsx"; 
import PATHS from "./paths";
import MainLayout from "../layout/MainLayout.jsx";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={PATHS.FAVORITES} element={<Favorites />} />
          <Route path={PATHS.DETAILS} element={<Details />} />
          <Route path={PATHS.ERROR} element={<Error />} />
          <Route path="*" element={<Error />} /> { /* Catch-all route for 404 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
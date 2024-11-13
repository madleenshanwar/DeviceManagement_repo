import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../component/Login/Login'
import AddOffers from "../component/Offers/AddOffers";
import UpdateDevice from '../component/Devices/UpdateDevice'
import UpdateAccessories from '../component/Accessories/UpdateAccessories'
const LazyProfil = lazy(() => import("../component/ProfilPage/Profil"));
const LazyHome = lazy(() => import("../component/Home/Home"));
const LazyDevices = lazy(() => import("../component/Devices/Devices"));
const LazyAccessories = lazy(() =>
  import("../component/Accessories/Accessories")
);
const LazyOffers = lazy(() => import("../component/Offers/Offers"));
const LazyFavorites = lazy(() => import("../component/FavoritePages/Favorites"));
const LazyFavDevice = lazy(() =>
  import("../component/FavoritePages/FavoriteDevices")
);
export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <Routes>
          <Route path="/" element={<LazyHome />}></Route>
          <Route path="/Login" element={<Login />} />
          <Route path="/Profil" element={<LazyProfil />} />
          <Route path="/Device" element={<LazyDevices />} />
          <Route path="/Accessories" element={<LazyAccessories />} />
          <Route path="/Offers" element={<LazyOffers />} />
          <Route
            path="/UpdateAccessories/:index"
            element={<UpdateAccessories />}
          ></Route>
          <Route path="UpdateDevice/:index" element={<UpdateDevice />}></Route>
          <Route path="AddOffers" element={<AddOffers />}></Route>
          <Route path="Favorites" element={<LazyFavorites />}></Route>
          <Route path="FavDevice" element={<LazyFavDevice />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

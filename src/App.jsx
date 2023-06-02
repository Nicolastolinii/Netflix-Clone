import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
const LazyHome = React.lazy(() => import("./pages/home/Home"));
import Landing from "./pages/landing/Landing";
import Login from "./pages/login/Login";
import { PrivateRoutes, PublicRoutes } from "./guards/routes";
import { AuthGuard } from "./guards/auth.guard";
const LazyProfile = React.lazy(() => import("./pages/SelectUser/Profile"));
const LazyNewProfile = React.lazy(() =>
  import("./pages/SelectUser/newProfile/NewProfile")
);
import Register from "./pages/register/Register";
const LazyMyList = React.lazy(() =>
  import("./pages/home/component/myList/MyList")
);

import Loader from "./loader/Loader";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <React.Suspense fallback={<Loader />}>
              <AuthGuard />
            </React.Suspense>
          }
        >
          <Route path={PrivateRoutes.HOME} element={<LazyHome />} />
          <Route path={PrivateRoutes.PROFILE} element={<LazyProfile />} />
          <Route path={PrivateRoutes.NEWPROFILE} element={<LazyNewProfile />} />
          <Route path={PrivateRoutes.MYLIST} element={<LazyMyList />} />
        </Route>
        <Route path="/" element={<Navigate to={PrivateRoutes.HOME} />} />

        <Route path={PublicRoutes.LANDING} element={<Landing />} />
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route path={PublicRoutes.REGISTER} element={<Register />} />

        <Route path="*" element={<>NOT FOUND</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

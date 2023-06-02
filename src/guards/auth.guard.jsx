import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PublicRoutes } from "./routes";

export const AuthGuard = () => {
  const userState = useSelector(state => state.user);
  return userState.user ? <Outlet /> : <Navigate replace to={PublicRoutes.LANDING} />;
};

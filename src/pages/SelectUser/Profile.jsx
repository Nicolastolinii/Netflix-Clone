import CardProfile from "./CardProfile";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import "./profile.css";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import { PrivateRoutes } from "../../guards/routes";
const Profile = () => {
  const profile = useSelector((state) => state.profile.profile);
  return (
    <>
      <NavBar display={false} />
      <div className="profile-lists">
        <h1 className="text-6xl pb-10">¿Quién está viendo ahora?</h1>
        <div className="w-full flex gap-6 justify-center">
          {profile.map((item, index) => (
            <CardProfile name={item.name} key={index} />
          ))}
          <Link to={PrivateRoutes.NEWPROFILE}>
            <PlusCircleIcon className="h-[155px] w-[155px] hover:border-[3px] hover:rounded-lg cursor-pointer hover:border-white text-white text-opacity-40 " />

            <p className="pt-3">Agregar perfil</p>
          </Link>
        </div>
        <button className="btn">manage profiles</button>
      </div>
    </>
  );
};
export default Profile;

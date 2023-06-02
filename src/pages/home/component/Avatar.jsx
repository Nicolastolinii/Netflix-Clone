import avatar from "../../../assets/Netflix-avatar.png";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/states/user.state";
import { QuestionMarkCircleIcon, PencilSquareIcon, ArrowDownOnSquareIcon, UserIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";
import { PrivateRoutes } from "../../../guards/routes";

const Avatar = ({ visible }) => {
  const userName = localStorage.getItem("userName");

  if (!visible) {
    return null;
  }
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
    localStorage.clear()
  };
  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3 px-3">
        <div className=" group/item flex flex-row gap-3 -ml-1 items-center w-full">
          <img className="w-8 rounded-md" src={avatar} alt="" />
          <p className="text-white text-sm group-hover/item:underline">{userName}</p>
        </div>
        <div className="flex items-center gap-3 hover:underline">
          <PencilSquareIcon className="w-4 md:w-[25px] opacity-70"/>
          <Link to={PrivateRoutes.PROFILE}>
          
          <p className="text-white font-medium text-sm ">
            Administrar perfiles
          </p>
          </Link>
        </div>
        <div className="flex items-center gap-3 hover:underline">
          <ArrowDownOnSquareIcon className="w-4 md:w-[25px] opacity-70"/>
          <p className="text-white font-medium text-sm ">
            Transferir perfil
          </p>
        </div>
        <div className="flex items-center gap-3 hover:underline">
          <UserIcon className="w-4 md:w-[25px] opacity-70"/>
          <p className="text-white font-medium text-sm ">
            Cuenta
          </p>
        </div>
        <div className="flex items-center gap-3 hover:underline">
          <QuestionMarkCircleIcon className="w-4 md:w-[25px] opacity-70"/>
          <Link to={"https://help.netflix.com/es/"} >
          <p className="text-white font-medium text-sm hover:underline">
            centro de ayuda
          </p>
          </Link>
        </div>
      </div>
      <hr className="bg-gray-600 border-0 h-px my-4" />
      <div className="px-3  text-center text-white text-sm ">
        <button className="hover:underline" onClick={logOut}>Cerrar sesión en Netflix</button>
      </div>
    </div>
  );
};
export default Avatar;

import { Link} from "react-router-dom";
import Logo from "../assets/NetflixLogo.png";
import Button from "./Button";
import Select from "./Select";
import { PrivateRoutes, PublicRoutes } from "../guards/routes";

const NavBar = ({display}) => {
  return (
    <div className="bg-transparent w-full container flex justify-between mx-auto items-center px-1">
      <Link to={PrivateRoutes.HOME}>
      <img className="w-[12rem] h-auto text" src={Logo} alt="logo netflix" />
      </Link>
      <div className={`${display? "flex ": "hidden" } items-center gap-2`}>
        <Select/>
        <Link to={PublicRoutes.LOGIN}>
        <Button Fsize="text-sm" className="py-[4px]">Iniciar Sesión</Button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

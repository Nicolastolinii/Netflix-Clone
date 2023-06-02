import { Link } from "react-router-dom";
import Logo from "../../../assets/NetflixLogo.png";
import Avatar from "./Avatar";
import avatar from "../../../assets/Netflix-avatar.png";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import "./navhome.css";
import { useState } from "react";
import SearchInput from "./SearchInput";
import { PrivateRoutes } from "../../../guards/routes";

const NavHome = () => {
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [color, setColor] = useState("gradient")
  const  listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      setColor("gradientBlack");
    } else {
      setColor("gradient");
    }
  }
window.addEventListener("scroll", listenScrollEvent);


  const toggleAvatarMenu = () => {
    setShowAvatarMenu(!showAvatarMenu);
  };
  const toggleInput = () => {
    setShowInput(!showInput);
  };

  return (
    <div  className={`z-50 fixed text-sm flex justify-between  ${color} h-[68px] px-12 w-full`}>
      <div className=" flex ">
        <Link to={PrivateRoutes.HOME} className="mr-[30px]">
          <img className="w-[7.2rem] h-auto text" src={Logo} alt="logo netflix" />
        </Link>
        <ul className="flex gap-6 items-center text-white font-normal">
          <li>
            <Link>Inicio</Link>
          </li>
          <li>
            <Link>Series</Link>
          </li>
          <li>
            <Link>Peliculas</Link>
          </li>
          <li>
            <Link>Novedades populares</Link>
          </li>
          <li>
            <Link to={PrivateRoutes.MYLIST}>Mi lista</Link>
          </li>
          <li>
            <Link>Explora por idiomas</Link>
          </li>
          <li></li>
        </ul>
      </div>
      <div className=" flex gap-5 items-center mr-4 text-white ">
        <div className="search-box">
          <SearchInput toggle={toggleInput} visible={showInput}/>
          
        </div>
        <div className="font-medium">
          <Link>Niños</Link>
        </div>
        <div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
          </button>
        </div>
        <div
          onClick={toggleAvatarMenu}
          className="flex flex-row items-center gap-2 cursor-pointer"
        >
          <div className="w-4 h-4 lg:w-8 lg:h-8 rounded-md overflow-hidden mb-1 cursor-pointer">
            <img src={avatar} alt="" />
          </div>
          <ChevronDownIcon
            className={`w-4 text-white fill-white transition ${
              showAvatarMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <Avatar visible={showAvatarMenu} />
        </div>
      </div>
    </div>
  );
};
export default NavHome;

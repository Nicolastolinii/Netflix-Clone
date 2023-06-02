import { ChevronDownIcon, PlayIcon } from "@heroicons/react/24/outline";
import FavoriteButton from "./FavoriteButton";
import LogoN from "../../../assets/NetflixN.png";
import Liked from "./Liked";
import DontLiked from "./DontLike";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setList, removeItem } from "../../../redux/states/myList.state";

const Card = ({ dataSrc, dataInfo, dataLeng, itemId, add, toggleFavorites }) => {
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavoritess = () => {
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    if (isFavorite) {
      const newItem = {
        id: itemId,
        dataInfo: dataInfo,
        dataLeng: dataLeng,
        dataSrc: dataSrc,
        favorite: true,
      };
      dispatch(setList(newItem));
    }else{
      dispatch(removeItem(itemId));
    }
  }, [isFavorite]);

  return (
    <div className="group bg-zinc-900 col-span relative min-w-[300px] h-full">
      <div className="absolute top-2 left-1">
        <img
          className="w-7 h-7  transition
      duration-75 delay-75"
          src={LogoN}
          alt="logito"
        />
      </div>
      <img
        src={dataSrc}
        alt="Movie"
        draggable={false}
        className="
      cursor-pointer
      object-cover
      transition
      duration-500
      shadow-xl
      rounded-md
      group-hover:opacity-90
      sm:group-hover:opacity-0
      delay-200
      w-full
      h-[160px]
    "
      />
      <div
        className="
      opacity-0
      absolute
      top-0
      transition
      duration-500
      z-10
      invisible
      sm:visible
      delay-100
      w-full
      scale-0
      group-hover:scale-125
      group-hover:-translate-y-[6vw]
      
      group-hover:translate-x-[0.5vw]
      group-hover:opacity-100
    "
      >
        <div className="absolute top-2 left-1">
          <img
            className="w-7 h-7  transition
      duration-75 "
            src={LogoN}
            alt="logito"
          />
        </div>
        <img
          src={dataSrc}
          alt="Movie"
          draggable={false}
          className="
        cursor-pointer
        object-cover
        transition
        duration
        shadow-xl
        rounded-t-md
        w-full
        h-[160px]
      "
        />
        <div
          className="
        
        bg-zinc-800
        p-2
        z-40
        lg:p-4
        absolute
        w-full
        transition
        shadow-md
        rounded-b-md
        "
        >
          <div className="flex flex-row items-center gap-3">
            <div className="cursor-pointer w-6 h-6 lg:w-9 lg:h-9 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300">
              <PlayIcon className="text-black w-4 lg:w-6" />
            </div>
            <button onClick={toggleFavorites}>
              <FavoriteButton onClick={toggleFavoritess}  add={add} />
            </button>
            <Liked />
            <DontLiked />
            <div className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-9 lg:h-9 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
              <ChevronDownIcon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
            </div>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-green-400 font-semibold">
              New <span className="text-white">2023</span>
            </p>
            <p className="text-white text-[6px] lg:text-[8px] uppercase font-medium">
              {dataLeng}
            </p>
          </div>
          <div className="text-green-400 flex text-center items-center">
            <p className="text-xs font-medium pr-2">{dataInfo}% para ti</p>
            <span className="border text-xs font-medium px-1 text-white">
              +16
            </span>
          </div>
          <div className="flex flex-row items-center  mt-4 text-[8px] text-white lg:text-sm">
            <ul className="flex text-xs font-normal">
              <li>Psicológico</li>
              <li className="list-disc ml-6 p-0">Siniestro</li>
              <li className="list-disc ml-6 p-0">Complejo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

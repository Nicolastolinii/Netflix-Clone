import { InformationCircleIcon } from "@heroicons/react/24/outline";
import PlayButton from "./PlayButton";
import { useEffect, useState } from "react";
import axios from "axios";
import "./banner.css";
import requests from "../../../utils/Requests";
const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const request = await axios.get(requests.fetchTopRated);
        setMovies(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        setLoading(false);
        return request;
      };
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div className="relative h-[45.25vw]  ">
      <div className="absolute h-[45.25vw] w-full z-20 gradientt"></div>
      {loading ? (
        <div className="w-screen h-full bg-gradient-to-r from-zinc-900 to-zinc-800"></div>
      ) : (
        <img
          className="w-full h-[45.25vw] object-cover  brightness-[60%]"
          src={`http://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
          alt=""
        />
      )}
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-start text-1xl md:text-5xl h-full w-[38%] lg:text-6xl font-bold drop-shadow-xl">
          {movies?.title}
        </p>
        <p className="text-white text-start text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[50%] lg:w-[30%] drop-shadow-xl">
          {movies?.overview}
        </p>
        <div className="flex flex-row items-center  mt-3 md:mt-4 gap-3">
          <PlayButton  />
          <button
            className="
            cursor-pointer
            bg-white
            text-white
              bg-opacity-30 
              rounded-md 
              py-1 md:py-2 
              px-2 md:px-4
              w-auto 
              text-xs lg:text-lg 
              font-semibold
              flex
              flex-row
              items-center
              hover:bg-opacity-20
              transition
            "
          >
            <InformationCircleIcon className="w-4 cursor-pointer md:w-7 mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;

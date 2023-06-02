import { useEffect, useRef } from "react";
import { useState } from "react";
import axios from "axios";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

import "./tablerow.css";
import Card from "./Card";
import CardLoading from "./CardLoading";
const TableRow = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const base_url = "http://image.tmdb.org/t/p/w300/";
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setLoading(false);
      return request;
    };
    fetchData();
  }, []);
  const [sliderNumber, setSliderNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 48;
    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listRef.current.style.transform = `translateX(${1500 + distance}px)`;
    }
    if (direction === "right" && sliderNumber < 2) {
      setSliderNumber(sliderNumber + 1);
      listRef.current.style.transform = `translateX(${-1500 + distance}px)`;
    }
  };

  return (
    <div className=" pl-12">
      <h2 className="py-2 text-[1.4vw] l font-medium leading-[1.25vw]  text-white lowercase first-letter:uppercase ">
        {title}
      </h2>
      <div className="flex  flex-row">
        <div
          onClick={() => handleClick("left")}
          className={` bg-opacity-50 pl-2 absolute left-0 z-50 h-40 w-10 hover:scale-x-110 hover:scale-y-105 transition delay-[50ms] hover:bg-black hover:bg-opacity-30 ${
            !isMoved && "hidden"
          } flex items-center cursor-pointer  `}
        >
          <ChevronLeftIcon className="w-10    text-white h-10" />
        </div>
        <div
          ref={listRef}
          className="flex  transition-all duration-300 ease-in-out  gap-2 pb-[3.5vw] "
        >
          {!loading ? (
            movies
              .slice(0, 15)
              .map((movie) => (
                <Card
                  key={movie.id}
                  itemId={movie.id}
                  dataInfo={movie?.vote_count.toString().slice(0, 2)}
                  dataLeng={movie.original_language}
                  dataSrc={`${base_url}${movie?.backdrop_path}`}
                />
              ))
          ) : (
            <div className="flex gap-4">
              <CardLoading />
              <CardLoading />
              <CardLoading />
              <CardLoading />
              <CardLoading />
              <CardLoading />
            </div>
          )}
        </div>
        <div
          onClick={() => handleClick("right")}
          className={`${
            isMoved
              ? "opacity-100 hover:bg-opacity-50"
              : "opacity-0 hover:bg-opacity-50 hover:opacity-100"
          } absolute right-0 z-50 h-40 w-8 hover:scale-x-125 hover:scale-y-100 transition delay-[20ms]  hover:bg-black flex items-center cursor-pointer`}
        >
          <ChevronRightIcon className="w-10    text-white h-10" />
        </div>
      </div>
    </div>
  );
};
export default TableRow;

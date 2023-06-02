
import { PlayIcon } from '@heroicons/react/24/solid';

const PlayButton = () => {


  return (
    <button 
      className=" 
      cursor-pointer

        bg-white 
        rounded-md 
        py-1 md:py-2 
        px-2 md:px-4
        w-auto 
        text-xs lg:text-lg 
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        "
      >
        <PlayIcon className="w-4 md:w-7 cursor-pointer text-black mr-1" />
        Play
    </button>
  );
}

export default PlayButton;
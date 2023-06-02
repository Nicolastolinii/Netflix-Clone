import {HandThumbUpIcon } from '@heroicons/react/24/outline';
import {HandThumbUpIcon as HandThumbUpIconSolid } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Liked = () => {
    const [isLike, setIsLike] = useState(true)
    const toggleLike = () =>{
        setIsLike(!isLike)
    }
    const Icon = isLike ? HandThumbUpIcon : HandThumbUpIconSolid;

  return (
    <div onClick={toggleLike} className="cursor-pointer group/item w-6 h-6 lg:w-9 lg:h-9 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
      <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
    </div>
  )
}
export default Liked
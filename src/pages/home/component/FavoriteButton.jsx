
import { PlusIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';



const FavoriteButton = ({add,onClick}) => {
     const [isFavorite, setIsFavorite] = useState(add? add : false)
     const toggleFavorites = () =>{
         setIsFavorite(!isFavorite)
     }
    const Icon = isFavorite ? CheckIcon : PlusIcon;

  return (
    <div onClick={toggleFavorites}  className="cursor-pointer group/item w-6 h-6 lg:w-9 lg:h-9 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
      <Icon onClick={onClick} className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
    </div>
  )
}

export default FavoriteButton;
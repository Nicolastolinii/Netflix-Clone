import React from 'react'

const Button = ({children ,Fsize, className, onClick}) => {
  return (
    <button onClick={onClick} className={`${Fsize ? Fsize : ""} ${className ? className : ""}  w-auto h-full text-white  bg-r-button hover:bg-r-button-hover ease-in-out duration-300  px-4 rounded-[0.25rem] cursor-pointer border-[0] select-none font-medium`}>{children}</button>
  )
}

export default Button
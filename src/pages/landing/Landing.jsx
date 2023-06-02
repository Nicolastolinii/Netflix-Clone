import NavBar from "../../components/NavBar";

import Input from "../../components/Input/Input";

import "./landing.css";
import { useState } from "react";
import Button from "../../components/Button";
import BgBanner from "../../components/BgBanner";
import { Link } from "react-router-dom";
import { PublicRoutes } from "../../guards/routes";

const Landing = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <NavBar display={true} />
      <BgBanner />
      <section className="h-[70vh] w-full flex flex-col mt-16 justify-center gap-7">
        <div className="text-white  mx-auto w-[80%] gap-4 flex flex-col items-center justify-center text-center">
          <h1 className=" text-[2rem] font-bold">
            Películas y series ilimitadas y mucho más
          </h1>
          <p className="text-lg ">
            Disfruta donde quieras. Cancela cuando quieras.
          </p>
          <p className="text-lg">
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
            reiniciar tu membresía de Netflix.
          </p>
        </div>
        <div className="w-full mx-auto max-w-[36rem] flex justify-center gap-2">
          <Input
            className="pt-6 pb-1 px-2.5 w-full text-white "
            label="Email"
            type="email"
            value={email}
            onChange={handleChange}
            value2={email}
          />
          <Button Fsize="text-2xl" className="font-medium py-[0.7rem]">
            <Link to={PublicRoutes.REGISTER}>Comenzar</Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Landing;

import Input from "../../../components/Input/Input";
import NavBar from "../../../components/NavBar";
import avatar from "../../../assets/Netflix-avatar.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setProfile } from "../../../redux/states/profile.state";
import { PrivateRoutes } from "../../../guards/routes";

const NewProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newProfile = () => {
    dispatch(setProfile({ name: name }));
    navigate(PrivateRoutes.PROFILE);
  };
  const [name, setName] = useState("");
  const handleChangeText = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <NavBar display={false} />
      <section className="h-[60vh] flex gap-7  flex-col justify-center items-start mx-auto w-[30vw]">
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl text-start">Agregar perfil</h1>
          <p className="text-xl">
            Agrega un perfil para otra persona que ve Netflix.
          </p>
        </div>
        <div className="flex items-center gap-4 border-t border-b pr-16 border-gray-500 py-6">
          <img className="w-32 h-32" src={avatar} alt="" />
          <Input
            
            type="text"
            placeholder={"Nombre"}
            value={name}
            onChange={handleChangeText}
            className={"bg-gray-700 py-2 px-2 text-xl rounded-none"}
          />
        </div>
        <div className="flex gap-6">
          <button onClick={newProfile} className="py-2 px-6 text-xl bg-white">
            Continuar
          </button>
          <button className="py-2 px-6 text-xl border border-gray-400 text-gray-400">
            Cancelar
          </button>
        </div>
      </section>
    </>
  );
};
export default NewProfile;

import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input/Input";
import { auth } from "../../firebasee/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/states/user.state";
import { PrivateRoutes, PublicRoutes } from "../../guards/routes";

const CardRegister = () => {
  const [text, setText] = useState("");
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const [pass, setPass] = useState("");
  const handleChangePass = (e) => {
    setPass(e.target.value);
  };
  const [checkBox, setCheckBox] = useState(false);
  const handleChangeCheck = (e) => {
    setCheckBox(!checkBox);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signIn = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, text, pass)
      .then(() => {
        navigate(PublicRoutes.LOGIN);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-[660px]  max-w-[450px] mx-auto bg-[#000000c1] px-16 py-14 flex flex-col gap-6 relative">
      <h2 className="text-white text-[32px] font-medium">Registrar</h2>

      <form action="">
        <Input
          className="pl-2.5 pr-5 pt-4 w-full h-14 mb-6 bg-[#333]"
          label="Email o número de teléfono"
          type="text"
          value={text}
          onChange={handleChangeText}
          value2={text}
          autoComplete="email"
        />
        <Input
          className="pl-2.5 pr-5 pt-4 w-full h-14 mb-6 bg-[#333]"
          label="Contraseña"
          type="password"
          value={pass}
          onChange={handleChangePass}
          value2={pass}
          autoComplete="password"
        />
        <Button onClick={signIn} className="w-full py-[13px] mt-4">
          Registrar
        </Button>
      </form>
      <div className="flex gap-2 -mt-4 ">
        <div className="text-[#b3b3b3] text-sm w-full flex justify-between">
          <a className="pt-0.5 " href="#">
            ¿Necesitas ayuda?
          </a>
        </div>
      </div>
      <div className="text-[#737373] text-base font-normal mt-4 tracking-wide">
        <span>Crea una contraseña para que comiences tu membresía.</span>
      </div>
    </div>
  );
};
export default CardRegister;

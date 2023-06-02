import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input/Input";
import { auth } from "../../firebasee/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/states/user.state";
import { PrivateRoutes } from "../../guards/routes";

const CardLogin = () => {
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
    await signInWithEmailAndPassword(auth, text, pass)
      .then((userAuth) => {
        dispatch(
          login({
            id: userAuth.user.uid,
            email: userAuth.user.email,
          })
        );
       
        if (userAuth.user.uid) {
          localStorage.setItem("id" ,userAuth.user.uid);
          navigate(PrivateRoutes.PROFILE);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="min-h-[660px]  max-w-[450px] mx-auto bg-[#000000c1] px-16 py-14 flex flex-col gap-6 relative">
      <h2 className="text-white text-[32px] font-medium">Iniciar sesión</h2>

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
          Iniciar sesión
        </Button>
      </form>
      <div className="flex gap-2 -mt-4 ">
        <input
          className=""
          type="checkbox"
          label="recuerdame"
          value={checkBox}
          onChange={handleChangeCheck}
        />
        <div className="text-[#b3b3b3] text-sm w-full flex justify-between">
          <span className="pt-0.5 ">Recuérdame</span>
          <a className="pt-0.5 " href="#">
            ¿Necesitas ayuda?
          </a>
        </div>
      </div>
      <div className="text-[#737373] text-base font-normal mt-4 tracking-wide">
        <span>¿Primera vez en Netflix?</span>
        <a className="text-white no-underline" href="#">
          {" "}
          Suscribete ahora.
        </a>
      </div>
      <div className="text-[#8c8c8c]">
        <p className=" text-sm text-start">
          Esta página está protegida por Google reCAPTCHA para comprobar que no
          eres un robot.{" "}
        </p>
      </div>
    </div>
  );
};
export default CardLogin;

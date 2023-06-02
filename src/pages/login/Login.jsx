import BgBanner from "../../components/BgBanner"
import NavBar from "../../components/NavBar"
import CardLogin from "./CardLogin"


const Login = () => {
  return (
    <>
    <NavBar display={false}/>
    <BgBanner/>
    <CardLogin/>
    </>
  )
}

export default Login
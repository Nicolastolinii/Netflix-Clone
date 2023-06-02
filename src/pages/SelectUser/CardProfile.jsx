import "./profile.css";
import avatar from "../../assets/Netflix-avatar.png";
import { PrivateRoutes } from "../../guards/routes";
import { useNavigate } from "react-router-dom";


const CardProfile = ({name}) => {
  const navigate = useNavigate();
  const onClickTarjet = () =>{
    localStorage.setItem("userName" ,name);
    navigate(PrivateRoutes.HOME);
  }
  return (
          <div onClick={onClickTarjet} className="profile">
            <img
              className="profile-img"
              src={avatar}
              alt="Netflix Kids Avatar"
            />
            <p className="pt-3">{name}</p>
          </div>
  )
}
export default CardProfile
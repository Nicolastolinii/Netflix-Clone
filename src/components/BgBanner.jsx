import banner from "../assets/NetflixBanner.jpg";
const BgBanner = () => {
  return (
    <div className=" -z-10 h-full absolute left-0 top-0 w-full">
      <div className="relative overflow-hidden h-full w-full">
        <img
          className="w-full h-full object-cover banner"
          src={banner}
          alt=""
        />
        <div className="banner-grad bg-img"></div>
      </div>
    </div>
  );
};
export default BgBanner;

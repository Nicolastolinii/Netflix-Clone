import NavHome from "./component/NavHome";
import TableRow from "./component/TableRow";
import requests from "../../utils/Requests";
import Banner from "./component/Banner";
import "./component/tablerow.css";
const Home = () => {
  return (
    <>
      <NavHome />
      <Banner />

      <div className="absolute w-screen z-40 bg-gradiante top-[45vw]">
        <TableRow title="SOLO EN NETFLIX" fetchUrl={requests.fetchTopRated} />

        <TableRow title="TRENDING MOVIES" fetchUrl={requests.fetchTrending} />
        <TableRow
          title="ADVENTURE MOVIES"
          fetchUrl={requests.fetchAdventureMovies}
        />
        <TableRow title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />

        <TableRow title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
        <TableRow title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
        <TableRow title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />

        <TableRow title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
        <TableRow
          title="ROMANCE MOVIES"
          fetchUrl={requests.fetchRomanceMovies}
        />
      </div>

      {/* 
    <TableRow title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
    <TableRow title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
    <TableRow title="DOCUMENTARIES MOVIES" fetchUrl={requests.fetchDocumentaries}/>
    <TableRow title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
    <TableRow title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies}/> */}
    </>
  );
};

export default Home;

import { useSelector, useDispatch } from "react-redux";
import Card from "../Card";
import { removeItem } from "../../../../redux/states/myList.state";

const MovieList = () => {
  const myList = useSelector((state) => state.list.list);
  const dispatch = useDispatch();

    const remove = (id) =>{
      dispatch(removeItem(id))

    }
  return (
    <section className="h-[100vh] bg-[#141414] ">
      <div className="pt-[10vh] pl-14">
        <div className="mb-32">
          <h2 className="text-white text-3xl">Mi lista</h2>
        </div>
        <div className="flex  transition-all duration-300 ease-in-out  gap-2 pb-[3.5vw]  flex-wrap">
          {myList.map((movie) => (
            <div key={movie.id}   className="pb-20">
              <Card
                toggleFavorites={()=> remove(movie.id)}
                dataInfo={movie.dataInfo}
                dataLeng={movie.dataLeng}
                dataSrc={movie.dataSrc}
                add={true}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MovieList;

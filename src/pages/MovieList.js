
import { Cords } from "../components/Cords";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({api_path,title}) => {
  
  const {data:movies}=useFetch(api_path);
  useTitle(title);
 
  return (
    <main>
      <section className="max-w-7xl m-auto py-7">
        <div className="flex justify-start flex-wrap ">
            {movies.map((movie)=>(
            <Cords key={movie.id} movie={movie}/>))}
        </div>
      </section>
    </main>
  )
}

import { Cords } from "../components/Cords";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
export const Search = ({api_path}) => {
  const [searchParams]=useSearchParams();
  const queryTerm=searchParams.get("q")
  const {data:movies}=useFetch(api_path,queryTerm);
  useTitle(`search results for ${queryTerm}`)


  return (
   < main>
      <section >
            <p className="text-3xl text-gray-700 dark:text-white"> { movies.length ===0 ?  `No Result Found For ${queryTerm}`:`Results For ${queryTerm}`}</p>
      </section>
      <section className="max-w-7xl m-auto py-7">
        <div className="flex justify-content flex-wrap">
            {movies.map((movie)=>(
            <Cords key={movie.id} movie={movie}/>))}
        </div>
      </section>
    </main>
  )
}

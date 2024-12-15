import { useState ,useEffect} from "react"


export const useFetch = (api_path,queryTerm="") => {
    const [data,setDate]=useState([]);
    const url=`https://api.themoviedb.org/3/${api_path}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

     useEffect(() => {
        async function fetchmovies(params)
         {
          const response = await fetch(url);
          const data = await response.json();
          setDate(data.results);   
        }
        fetchmovies()
      },[url])

  return {data}
}

import {Routes, Route} from 'react-router-dom';
import { MovieList,MovieDetail,Search,PageNotFound } from '../pages';

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<MovieList api_path="movie/now_playing" title="Home"/>} />
            <Route path="movie/:id" element={<MovieDetail/>} />
            <Route path="movies/popular" element={<MovieList api_path="movie/popular" title="Popular"/>} />
            <Route path="movies/top" element={<MovieList api_path="movie/top_rated" title="TopRated"/>} />
            <Route path="movies/upcoming" element={<MovieList api_path="movie/upcoming" title="Upcoming" />} />
            <Route path="search" element={<Search api_path="search/movie" />} />
            <Route path="*" element={<PageNotFound/>}   />
        </Routes>
    </div>
  )
}

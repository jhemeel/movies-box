import React, {useState, useEffect} from 'react'
import Headbar from '../../Components/Headbar/Headbar'
import FeaturedMovie from '../../Components/FeaturedMovie/FeaturedMovie'
import Footer from '../../Components/Footer/Footer'
import tmdb from '../../Components/Api/tmdb'

export default function Home() {
  const [searchKey, setSearchKey] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (searchKey) => {
  const term = searchKey ? 'search/movie' : 'movie/top_rated'
    const {
      data: { results },
    } = await tmdb.get(`${term}`, {
      params: {
        query: searchKey,
      },
    });
    setMovies(results.slice(0, 10));
  };

  useEffect(() => {
    fetchMovies(searchKey);
  }, []);

  const searchMovies = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  return (
    <div>
      <Headbar setSearchKey={setSearchKey} searchMovies={searchMovies} />
      <FeaturedMovie movies={movies}/>
      <Footer/>
    </div>
  )
}

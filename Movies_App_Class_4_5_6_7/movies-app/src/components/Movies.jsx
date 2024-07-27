import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { FaBackward, FaForward } from "react-icons/fa"; // Import icons correctly
import MovieCard from "./MovieCard";
import axios from "axios";
import { json } from "react-router-dom";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const moviesFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
    setWatchList(moviesFromLocalStorage);
  },[]);

  const addToWatchList = (movieObj) => {
    const updateWatchList = [...watchList, movieObj]; // watchList.concat(movieObj)
    setWatchList(updateWatchList);
    localStorage.setItem("movies", JSON.stringify(updateWatchList));
  };

  const removeFromWatchList = (movieObj) => {
    let filteredMovies = watchList.filter((movie) => movie.id !== movieObj.id); // return all those movies whose id is not equal to movieObj.id
    setWatchList(filteredMovies);
    localStorage.setItem("movies", JSON.stringify(filteredMovies));
  };

  console.log("watchlist ----->", watchList);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=b9b97aab5c670ad26245f28548c6fc33&page=${pageNo}`
      )
      .then((response) => {
        console.log("Films", response.data.results);
        setMovies(response.data.results);
      });
  }, [pageNo]);

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  const handlePrevious = () => {
    if (pageNo === 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">
        <h1>Trending Movies</h1>
      </div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movieObj, index) => {
          return (
            <MovieCard
              movieObj={movieObj}
              index={index}
              addToWatchList={addToWatchList}
              watchList={watchList}
              removeFromWatchList={removeFromWatchList}
            />
          );
        })}
      </div>
      <Pagination
        nextPageFn={handleNext}
        previousPageFn={handlePrevious} // Correct prop name to "previousPageFn"
        pageNumber={pageNo}
      />
    </div>
  );
}

export default Movies;

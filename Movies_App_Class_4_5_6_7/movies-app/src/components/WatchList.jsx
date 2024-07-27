import React, { useState, useEffect } from "react";
import genreids from "../constants";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function WatchList() {
  const [watchList, setWatchList] = useState([]);
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState([
    "All Genres",
    "Thriller",
    "Action",
  ]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handlerFilter = (genre) => {
    setCurrGenre(genre);
  };

  useEffect(() => {
    const movieFromLocalStorage = JSON.parse(localStorage.getItem("movies"));
    console.log(`test watch list data ${movieFromLocalStorage}`);

    if (movieFromLocalStorage) {
      setWatchList(movieFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    // It is create filter option according to watchList genre category
    // there can be 10 movies belonging to thrikler, action and comedy
    let temp = watchList.map((movie) => {
      return genreids[movie.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchList]);

  const genre = (genre_id) => {
    return genreids[genre_id];
  };
  console.log(`test watchList ${watchList}`);

  const handleAscendingRatings = () => {
    console.log("Ascending Ratings");
    const sortAscending = watchList.sort((movieObjA, movieObjB) => {
      return movieObjA.vote_average - movieObjB.vote_average;
    });
    setWatchList([...sortAscending]);
  };

  const handleDescendingRatings = () => {
    console.log("Descending Ratings");
    const sortDescending = watchList.sort((movieObjA, movieObjB) => {
      return movieObjB.vote_average - movieObjA.vote_average;
    });
    setWatchList([...sortDescending]);
  };

  const Genre = (genre_id) => (
    <div className="flex justify-center m-4">
      {genreList.map((genre) => {
        const isActive = currGenre === genre;
        const baseStyles =
          "flex justify-center items-center h-[3rem] w-[8rem] rounded-lg text-white  font-bold mx-4 hover:cursor-pointer";
        const bgColor = isActive ? "bg-blue-400" : "bg-gray-400/50";
        return (
          <div
            onClick={() => handlerFilter(genre)}
            key={genre.id}
            className={`${baseStyles} ${bgColor}`}
          >
            {genre}
          </div>
        );
      })}
    </div>
  );

  const filteredMovies = () => {
    return watchList
    .filter((movie) => {
      if (currGenre === "All Genres") {
        return true;
      } else {
        return genreids[movie.genre_ids[0]] == currGenre;
      }
    })
    .filter((movie) => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    })
  }
  return (
    <>
      <Genre />
      {/* <div className="flex justify-center m-4">
        {genreList.map((genre) => {
          const isActive = currGenre === genre;
          const baseStyles =
            "flex justify-center items-center h-[3rem] w-[8rem] rounded-lg text-white  font-bold mx-4 hover:cursor-pointer";
          const bgColor = isActive ? "bg-blue-400" : "bg-gray-400/50";
          return <div onClick={()=> handlerFilter(genre)} key={genre.id} className={`${baseStyles} ${bgColor}`}>{genre}

          </div>;
        })}
      </div> */}
      <div className="flex justify-center my-10">
        <input
          placeholder="Search Movie"
          className="h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-gray-300"
          type="text"
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-green-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-green-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium">Name</th>
              <th>
                <div className="flex">
                  <FaArrowUp
                    onClick={handleAscendingRatings}
                    className="mx-1 hover:cursor-pointer"
                  />
                  <div>Ratings</div>
                  <FaArrowDown
                    onClick={handleDescendingRatings}
                    className="mx-1 hover:cursor-pointer"
                  />
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {filteredMovies()
              .map((movie) => (
                <tr className="hover:bg-gray-50" key={movie.id}>
                  <td className="flex items-center px-6 py-4 font-normal text-gray-900 gap-4">
                    <img
                      className="h-[6rem] w-[10rem] object-fit object-cover rounded-r-lg"
                      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                      alt=""
                    />
                    <div className="font-medium text-gray-700 text-sm">
                      {movie.title}
                    </div>
                  </td>
                  <td className="pl-6 py-4">{movie.vote_average}</td>
                  <td className="pl-6 py-4">{movie.id}</td>
                  <td className="pl-2 py-4">{genre(movie.genre_ids[0])}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;

import React from "react";

function MovieCard({
  movieObj,
  index,
  addToWatchList,
  watchList,
  removeFromWatchList,
}) {
  const doesContain = (movieObj) => {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  };

  return (
    <div
      key={index} // Add key prop for each mapped element
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.backdrop_path})`,
      }}
    >
      <div className="text-white w-full text-center text-2xl p-2 rounded-lg bg-gray-900/70">
        {movieObj.title}
      </div>
      {/* <div
        onClick={() => addToWatchList(movieObj)}
        className="m-4 flex justify-center h-8 w-8 items-center"
      >
        😊
      </div> */}
      {doesContain(movieObj) ? (
        <div 
        onClick={() => removeFromWatchList(movieObj)}
        className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-red-900"
        >❌</div>
      ) : (
        <div
          onClick={() => addToWatchList(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900"
        >
          😊
        </div>
      )}
    </div>
  );
}

export default MovieCard;

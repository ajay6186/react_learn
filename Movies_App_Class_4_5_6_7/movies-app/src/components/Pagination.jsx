import React from "react";
import { FaBackward, FaForward } from "react-icons/fa";

function Pagination({ previousPageFn, pageNumber, nextPageFn }) { // Destructure props correctly

  return (
    <div className="bg-gray-400 p-4 h-[50px] w-full mt-8 flex justify-center gap-2">
      <div onClick={previousPageFn} className="px-8 hover:cursor-pointer">
        <FaBackward /> {/* Render icon directly */}
      </div>
      <div>{pageNumber}</div>
      <div onClick={nextPageFn} className="px-8 hover:cursor-pointer">
        <FaForward /> {/* Render icon directly */}
      </div>
    </div>
  );
}

export default Pagination;

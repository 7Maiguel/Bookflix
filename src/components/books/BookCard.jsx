import { useState } from "react";
import CustomIcon from "../common/CustomIcon";

export default function BookCard({ bookId, cover, isSaved, handleLike }) {
  const [mouseFocus, setMouseFocus] = useState(false);

  const toggleMouseFocus = () => setMouseFocus(!mouseFocus);

  return (
    <div
      className="relative h-[260px] w-[170px] cursor-pointer"
      onMouseEnter={toggleMouseFocus}
      onMouseLeave={toggleMouseFocus}
    >
      <img
        src={cover}
        className={`h-full w-full duration-100 ${mouseFocus ? "opacity-85" : ""}`}
      />
      {mouseFocus && (
        <CustomIcon
          type={isSaved ? "favoriteFilled" : "favorite"}
          styles="text-3xl absolute top-2 right-2"
          handleClick={() => handleLike(bookId)}
        />
      )}
    </div>
  );
}

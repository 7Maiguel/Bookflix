import { useState } from "react";
import FavoriteIcon from "../shared/icons/FavoriteIcon";

export default function GenreCard({ title, coverURL }) {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div
      className="relative flex h-[450px] w-full cursor-pointer justify-center"
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
      <img
        src={coverURL}
        className="img-motion h-full w-full hover:opacity-65"
      />
      <h3
        className={`absolute bottom-5 w-full text-center font-semibold duration-300 ${
          mouseOver ? "text-3xl" : "text-2xl opacity-90"
        }`}
      >
        {title}
      </h3>
    </div>
  );
}

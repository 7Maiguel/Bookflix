import { useEffect, useState } from "react";
import GenreCard from "../components/genres/genreCard";
import genresData from "../db/genres.json";

export default function Genres() {
  return (
    <div className="page-container pt-[5.5rem]">
      <div className="title">Géneros</div>
      <div className="grid grid-cols-5 gap-0">
        {genresData?.map((genre) => {
          return (
            <GenreCard
              key={genre.id}
              title={genre.name}
              coverURL={genre.picture}
            />
          );
        })}
      </div>
    </div>
  );
}

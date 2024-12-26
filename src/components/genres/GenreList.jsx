import GenreCard from "./genreCard";
import genresData from "../../db/genres.json";

export default function GenreList() {
  return (
    <div className="grid grid-cols-5 gap-0">
      {genresData.map((genre) => {
        return (
          <GenreCard
            key={genre.id}
            title={genre.name}
            coverURL={genre.picture}
          />
        );
      })}
    </div>
  );
}

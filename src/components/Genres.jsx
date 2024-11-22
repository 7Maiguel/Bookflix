import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "../App";
import GenreCard from "./genres/genreCard";

export default function Genres() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    const { data, error } = await supabase.from("genres").select();
    setGenres(data);
  };

  return (
    <div>
      <div className="title">Géneros</div>
      <div className="grid grid-cols-5 gap-0">
        {genres.map((genre) => {
          return (
            <GenreCard
              key={genre.id}
              title={genre.name}
              coverURL={genre.cover}
            />
          );
        })}
      </div>
    </div>
  );
}

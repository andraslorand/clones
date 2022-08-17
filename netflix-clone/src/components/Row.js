import React, { useEffect, useState } from "react";
import axios from "../axios";
import "../scss/row.scss";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      //console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  //console.table(movies);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posts">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`${isLargeRow ? "large_row_post" : "row_post"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;

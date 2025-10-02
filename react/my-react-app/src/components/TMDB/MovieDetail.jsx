import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = import.meta.env["VITE_TMDB_API_KEY"];

export default function MovieDetail() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const config = {
        method: "GET",
        url: `${BASE_URL}/movie/2`,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        params: {
          //쿼리 파라미터
          language: "ko-KR",
          page: 1,
        },
      };

      const res = await axios(config);
      setMovies(res.data);
      console.log(res.data);
    }

    fetchData();
  }, []);

  return <div>{movies.id}</div>;
}

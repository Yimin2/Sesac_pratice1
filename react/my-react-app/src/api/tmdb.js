import axiosInstance from "./index.js";

export async function getPopularMovies() {
  const config = {
    method: "GET",
    url: `/movie/popular`,
    params: {
      page: 1,
    },
  };

  const res = await axiosInstance(config);
  return res;
}

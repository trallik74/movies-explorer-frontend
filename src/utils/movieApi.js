import { MOVIE_URL } from "./const";
import { getResponseData } from "./config";

export const getMovies = () => {
    return fetch(`${MOVIE_URL}/beatfilm-movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => getResponseData(res));
};

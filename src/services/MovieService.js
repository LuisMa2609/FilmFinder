const axios = require("axios").default;
import { TMDB_BASE_URL, TMDB_API_KEY, TMDB_IMAGE_BASE_URL, ENDPOINTS } from "../constants/Urls";
import Languages from "../constants/Languages";
const TMDB_HTTP_REQUEST = axios.create({
    baseURL: TMDB_BASE_URL,
    params: { 
    api_key: TMDB_API_KEY,
    },
});

const getNowPlayingMovies = () =>
 TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING_MOVIES);

const getPoster = (path) => `${TMDB_IMAGE_BASE_URL}/original${path}`;

const getLanguage = (language_iso) => Languages.find(language => language.iso_639_1 === language_iso) 

 export {getNowPlayingMovies, getPoster, getLanguage};
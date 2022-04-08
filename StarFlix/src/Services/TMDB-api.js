import axios from "axios"

const TMDB_API = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/550?api_key=f1f3672b73351a2d5555fc73ea622e36"
})

export default TMDB_API

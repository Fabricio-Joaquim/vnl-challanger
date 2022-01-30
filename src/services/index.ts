import axios from "axios";

const apiMovies = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export { apiMovies }
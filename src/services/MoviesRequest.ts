import { apiMovies } from "./index"
import * as types from "./types"
const subQuery = "https://image.tmdb.org/t/p/w500"
const subQueryDescription = "https://image.tmdb.org/t/p/original"
// eslint-disable-next-line import/no-anonymous-default-export
export default
    {
        async getListMovies(page?:Number, ) {
            const myResponse = apiMovies.get(`movie/popular?api_key=${process.env.REACT_APP_SECRET_NAME}&language=pt-br&page=${page||1}`)
            .then(({ data }: any) => data)
            .catch(error=>console.error(error))
            return myResponse
        },
        
        async getDescriptionMovie(id: Number) {
            const myResponse = apiMovies.get(`movie/${id}?api_key=${process.env.REACT_APP_SECRET_NAME}&language=pt-br`)
            .then(({ data }: any) => {
                const aux = subQueryDescription+ data.backdrop_path
                data={...data,backdrop_path:aux }
                return data})
            .catch(error=>console.error(error))
            return myResponse
        },

        async SearchMovie(query: string, page?:Number) {
            const myResponse = apiMovies.get<types.data>(`search/movie?api_key=${process.env.REACT_APP_SECRET_NAME}&language=pt-br&query=${query}&page=${page}`)
            .then(({ data }: any) =>
            { 
                const {results} = data
                let arr:types.results[] = []                
                results.map((item: types.results) =>
                arr.push({ ...item, poster_path: subQuery + item.poster_path }))                
                return [arr, data.total_pages]}

            ).catch((error)=>console.error(error))
            return myResponse
        },

    }
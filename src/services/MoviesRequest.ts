import { apiMovies } from "./index"

const subQuery = "https://image.tmdb.org/t/p/w500"

// eslint-disable-next-line import/no-anonymous-default-export
export default
    {

        async getListMovies(page?:number, ) {
            const x = apiMovies.get(`movie/popular?api_key=${process.env.REACT_APP_SECRET_NAME}&language=pt-br&page=${page}`).then(({ data }: any) => data)
            return x
        },

        async getDescriptionMovie(id: number) {
            const x = apiMovies.get(`movie/${id}?api_key=${process.env.REACT_APP_SECRET_NAME}&language=pt-br`).then(({ data }: any) => {
                const aux = subQuery+ data.backdrop_path
                data={...data,backdrop_path:aux }
                return data})
            return x
        },
        async SearchMovie(query: string) {
            const x = apiMovies.get(`search/movie?api_key=${process.env.REACT_APP_SECRET_NAME}&&query=${query}`).then(({ data }: any) => data)
        
            return x
        },

    }
//    https://api.themoviedb.org/3/search/movie?api_key=0b012c3aeefb1c84ff39f9bf739763fa&query=
//https://api.themoviedb.org/3/search/movie?api_key=0b012c3aeefb1c84ff39f9bf739763fa&query=homem
    //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
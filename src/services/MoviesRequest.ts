import { apiMovies } from "./index"

// eslint-disable-next-line import/no-anonymous-default-export
export default
    {
        async message() {
            const x = apiMovies.get(`popular?api_key=${process.env.REACT_APP_SECRET_NAME}&language=en-US&page=1`).then(({ data }: any) => data)
            return x
        }
    }

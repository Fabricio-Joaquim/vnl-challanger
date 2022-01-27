import api from "./index"

export default

    {
        async message() {

            const x = api.get(`popular?api_key=${process.env.REACT_APP_SECRET_NAME}&language=en-US&page=1`).then(({ data }) => data)
            return x
        }

    }

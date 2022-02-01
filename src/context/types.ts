export interface IListMovies {
    adult: boolean,
    id: number,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: false,
    vote_average: number,
    vote_count: number,
}

export interface IContext {
    user?: string
    DarkMode?: boolean;
    ListMovies?: IListMovies[],
    handleBG?: () => void,
    handleSearch?:(ev:any)=>any,
    Page?:number,
    setPage?:any,
    handlePage?:any
    MaxPage?: number
    Search?:string
    buttonClick?: ()=>void
    Render?: boolean
}
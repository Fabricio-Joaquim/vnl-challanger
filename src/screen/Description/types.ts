export interface IDescription {
    backdrop_path?: string,
    genres?: [{name:string, id:number}],
    homepage?: string,
    id?: number,
    imdb_id?: string,
    original_title?: string,
    overview?: string,
    popularity?: number,
    poster_path?: string,
    production_companies?: [{name:string, id:number}],
    production_countries?:[{name:string, id:number}],
    release_date?:string,
    revenue?: number,
    runtime?: number,
    tagline?: string,
    title?: string,
    vote_average?: number,
    vote_count?: number,
    spoken_languages?:[{name:string}]

}
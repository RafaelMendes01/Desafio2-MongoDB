import Imdb from "../Interfaces/I-Imdb";
import Awards from "../Interfaces/IAwards";
import Tomatoes from '../Interfaces/ITomatoes'

export class CreateMovieDto {
    awards: Awards;
    cast: string[];
    countries: string[];
    directors: string[];
    fullplot: string;
    genres: string[];
    imdb: Imdb;
    languages: string[];
    lastupdated: string;
    metacritic: number;
    num_mflix_comments: number;
    plot: string;
    poster: string;
    rated: string;
    released: Date;
    runtime: number;
    title: string;
    tomatoes: Tomatoes;
    type: string;
    writers: string[];
    year: number;
}

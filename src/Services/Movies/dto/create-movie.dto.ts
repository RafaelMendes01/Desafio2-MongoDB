import { ApiProperty } from "@nestjs/swagger";
import Imdb from "../Interfaces/I-Imdb";
import Awards from "../Interfaces/IAwards";
import Tomatoes from '../Interfaces/ITomatoes'

export class CreateMovieDto {
    @ApiProperty({
        description: 'Premios que o filme recebeu',
        example: "['wins': 1, 'nominations': 0, 'text': '1 win']"
    })
    awards: Awards;
    @ApiProperty({
        description: 'Elenco que participou do filme',
        example: "['Nicolas Cage', 'Dwayne Johnson']"
    })
    cast: string[];
    @ApiProperty({
        description: 'paises que o filme foi feito',
        example: "['Brazil', 'China']"
    })
    countries: string[];
    @ApiProperty({
        description: 'diretores do filmes',
        example: "['pedro', 'joão', 'Maria']"
    })
    directors: string[];
    @ApiProperty({
        description: 'historia do filme',
        example: 'aconteceu isso, isso e isso'
    })
    fullplot: string;
    @ApiProperty({
        description: 'generos do filme',
        example: "['terror', 'comedia', 'ação']"
    })
    genres: string[];
    @ApiProperty({
        description: 'notas do filme no imdb',
        example: "['rating': 7.8, 'votes': 1000, 'id': 12225]"
    })
    imdb: Imdb;
    @ApiProperty({
        description: 'linguagens do filme',
        example: "['ingles', 'mandarim', 'esperanto']"
    })
    languages: string[];
    @ApiProperty({
        description: 'ultima atualização',
        example: '2015-09-16 06:21:19.243000000'
    })
    lastupdated: string;
    @ApiProperty({
        description: 'nota do filme no metacritic',
        example: '78'
    })
    metacritic: number;
    @ApiProperty({
        description: 'numero de comentarios do filme',
        example: '2'
    })
    num_mflix_comments: number;
    @ApiProperty({
        description: 'sinopse do filme',
        example: 'acontecera isso'
    })
    plot: string;
    @ApiProperty({
        description: 'a capa do filme',
        example: 'https://m.media-amazon.com/images/M/MV5BNzE5YjRjOTItZGFkYS00NzE5LTkzZGUtZmRhMzY5M2I2MTU3XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_SY1000_SX677_AL_.jpg'
    })
    poster: string;
    @ApiProperty({
        description: 'o estado de analise do filme',
        example: 'PASSED'
    })
    rated: string;
    @ApiProperty({
        description: 'data de relançamento do filme',
        example: '2015-09-16 06:21:19.243000000'
    })
    released: Date;
    @ApiProperty({
        description: 'duração do filme em minutos',
        example: '60'
    })
    runtime: number;
    @ApiProperty({
        description: 'nome do filme',
        example: 'filme tal'
    })
    title: string;
    @ApiProperty({
        description: 'nota do filme no rotten tomatoes',
        example: 'rated: 8'
    })
    tomatoes: Tomatoes;
    @ApiProperty({
        description: 'tipo de metragem',
        example: "['viewer': {'rating': 4, 'numReviews': 400, 'meter': 88 }, 'lastupdated': 2015-08-20T18:51:24.000+00:00]"
    })
    type: string;
    @ApiProperty({
        description: 'escritores do filme',
        example: "['Paulo', 'josé', 'Joana']"
    })
    writers: string[];
    @ApiProperty({
        description: 'ano de lançamento do filme',
        example: '2020'
    })
    year: number;
}

//Uso de un mapper para transformar los datos de la API a un modelo de dominio
//con el fin de desacoplar la lógica de la API de la lógica de la aplicación.

import {Movie} from '../../core/entities/movie.entity';
import type {Result} from '../interfaces/movieResponses';

//tomamos un objeto del tipo Result y lo transformamos a un objeto del tipo Movie

export class MovieMapper {
  static fromMovieDbResultToEntity(result: Result): Movie {
    return {
      id: result.id,
      title: result.title,
      description: result.overview,
      releaseDate: new Date(result.release_date),
      rating: result.vote_average,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
    };
  }
}
//https://image.tmdb.org/t/p/w500/...

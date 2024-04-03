//Implementacion de los casos de uso

import {HttpAdapter} from '../../../config/adapters/http/httpAdapter';
import {TopRatedResponse} from '../../../infrastructure/interfaces/topRatedResponses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entity';

//se busca que los casos de uso sean agnosticos a la tecnologia
export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<TopRatedResponse>('/top_rated');
    //retornamos un array de peliculas
    return topRated.results.map(MovieMapper.fromMovieDbResultToEntity);
    // return nowPlaying.results.map(result =>
    //   MovieMapper.fromMovieDbResultToEntity(result),
    // );
    //Hay que transformar la respuesta de la api a la entidad de la aplicacion para que sea mas facil de manejar
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching top Rated movies');
  }
};

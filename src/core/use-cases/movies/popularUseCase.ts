//Implementacion de los casos de uso

import {HttpAdapter} from '../../../config/adapters/http/httpAdapter';

import {PopularResponse} from '../../../infrastructure/interfaces/popularResponses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entity';

interface Options {
  page?: number;
  limit?: number;
}

//se busca que los casos de uso sean agnosticos a la tecnologia
export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
  options?: Options,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<PopularResponse>('/popular', {
      params: {
        page: options?.page ?? 1,
      },
    });
    //retornamos un array de peliculas
    return popular.results.map(MovieMapper.fromMovieDbResultToEntity);
    // return nowPlaying.results.map(result =>
    //   MovieMapper.fromMovieDbResultToEntity(result),
    // );
    //Hay que transformar la respuesta de la api a la entidad de la aplicacion para que sea mas facil de manejar
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching Popular movies');
  }
};

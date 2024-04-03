//Implementacion de los casos de uso

import {HttpAdapter} from '../../../config/adapters/http/httpAdapter';

import {UpComingResponse} from '../../../infrastructure/interfaces/upComingResponses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entity';

//se busca que los casos de uso sean agnosticos a la tecnologia
export const moviesUpcomingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upComing = await fetcher.get<UpComingResponse>('/upcoming');
    //retornamos un array de peliculas
    return upComing.results.map(MovieMapper.fromMovieDbResultToEntity);
    // return nowPlaying.results.map(result =>
    //   MovieMapper.fromMovieDbResultToEntity(result),
    // );
    //Hay que transformar la respuesta de la api a la entidad de la aplicacion para que sea mas facil de manejar
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching up coming movies');
  }
};

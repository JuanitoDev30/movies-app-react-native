//Implementacion de los casos de uso

import {HttpAdapter} from '../../../config/adapters/http/httpAdapter';
import {NowPlayingResponses} from '../../../infrastructure/interfaces/movieResponses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import type {Movie} from '../../entities/movie.entity';

//se busca que los casos de uso sean agnosticos a la tecnologia
export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponses>('/now_playing');

    //retornamos un array de peliculas
    return nowPlaying.results.map(MovieMapper.fromMovieDbResultToEntity);

    // return nowPlaying.results.map(result =>
    //   MovieMapper.fromMovieDbResultToEntity(result),
    // );

    //Hay que transformar la respuesta de la api a la entidad de la aplicacion para que sea mas facil de manejar
  } catch (error) {
    console.log(error);
    throw new Error('Error fetching now playing movies');
  }
};

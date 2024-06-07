import {HttpAdapter} from '../../../config/adapters/http/httpAdapter';
import {MovieDB} from '../../../infrastructure/interfaces/fullMovieResponse';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {FullMovie} from '../../entities/movie.entity';

export const getMovieById = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const fullUniqueMovie = await fetcher.get<MovieDB>(`${movieId}`);

    if (fullUniqueMovie) {
      return MovieMapper.fromMovieDbToEntity(fullUniqueMovie);
    } else {
      throw new Error('Cannot get movie by id');
    }
  } catch (error) {
    console.log(error);
    throw new Error('Cannot get movie by id');
  }
};

//fetcher
//mapeo
//return del FullMovie

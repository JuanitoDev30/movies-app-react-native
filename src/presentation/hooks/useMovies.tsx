import {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {getMovieById} from '../../core/use-cases';
import {movieDbFetcher} from '../../config/adapters/MovieDbAdapter';
import {FullMovie} from '../../core/entities/movie.entity';

export const useMovies = (movieId: number) => {
  const [isLoanding, setisLoanding] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setisLoanding(true);
    const fullMovie = await getMovieById(movieDbFetcher, movieId);
    setMovie(fullMovie);
    setisLoanding(false);
  };

  return {isLoanding, movie};
};

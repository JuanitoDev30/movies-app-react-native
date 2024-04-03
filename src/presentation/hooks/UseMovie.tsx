import React, {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import * as UseCases from '../../core/use-cases';
import {movieDbFetcher} from '../../config/adapters/MovieDbAdapter';

let popularPage = 1;

export const UseMovies = () => {
  const [isLoading, setisLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upComing, setUpComing] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    // setisLoading(true);
    //Es un objeto de nuestra interfaz de movie
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(
      movieDbFetcher,
    );
    const popularMovies = await UseCases.moviesPopularUseCase(movieDbFetcher);
    const topRatedMovies = await UseCases.moviesTopRatedUseCase(movieDbFetcher);
    const upComingMovies = await UseCases.moviesUpcomingUseCase(movieDbFetcher);
    // console.log(nowPlayingMovies[0]);

    const [nowPlaying, popular, topRated, upComing] = await Promise.all([
      nowPlayingMovies,
      popularMovies,
      topRatedMovies,
      upComingMovies,
    ]);
    setNowPlaying(nowPlaying);
    setPopular(popular);
    setTopRated(topRated);
    setUpComing(upComing);
    setisLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upComing,

    //Methods

    popularNextPage: async () => {
      popularPage++;
      const nextPage = await UseCases.moviesPopularUseCase(movieDbFetcher, {
        page: popularPage,
      });
      setPopular(prev => [...prev, ...nextPage]);
    },
  };
};

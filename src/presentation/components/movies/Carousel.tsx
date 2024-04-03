import React from 'react';
import {Text, View} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';

interface Props {
  movies: Movie[];
  height?: number;
}

export const Carousel = ({movies, height = 440}: Props) => {
  return (
    <View style={{height}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePoster key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
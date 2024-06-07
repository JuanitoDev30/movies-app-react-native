import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entity';

interface Props {
  movie: FullMovie;
}

export const MovieInfo = ({movie}: Props) => {
  return (
    <View>
      <Text>Información de la película</Text>

      <Text>Description: {movie.description}</Text>
      {/* Agrega más detalles de la película según sea necesario */}
    </View>
  );
};

const styles = StyleSheet.create({});

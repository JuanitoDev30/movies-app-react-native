import React from 'react';
import {Movie} from '../../../core/entities/movie.entity';
import {
  View,
  Image,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/Navigation';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  //<NavigationProp<RootStackParamList>>  ---> Esto es para que el useNavigation sepa que tipo de parametros se le pasan
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Details', {movieId: movie.id})}>
      <View style={styles.imageContainer}>
        <Image
          style={{...styles.image, height, width}}
          source={{uri: movie.poster}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
    marginHorizontal: 5,
    //marginVertical: 10,
    backgroundColor: '#A6A3A3',
  },
  imageContainer: {
    flex: 1,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 9,
  },
  button: {
    marginHorizontal: 10,
    paddingBottom: 10,
    paddingHorizontal: 3,
    borderRadius: 10,
    //padding: 10,
    margin: 8,
    //alignItems: 'center',
    justifyContent: 'center',
    //marginRight: 30,
  },
});

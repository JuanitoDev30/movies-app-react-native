import {StackScreenProps} from '@react-navigation/stack';
import {View, Text, Image, StyleSheet} from 'react-native';
import {RootStackParamList} from '../../navigation/Navigation';
import {useMovies} from '../../hooks/useMovies';
import {MovieHeader} from '../../components/movie/movieHeader';
import {MovieInfo} from '../../components/movie/movieInfo';

interface Props extends StackScreenProps<RootStackParamList, 'Details'> {}

export const DetailScreen = ({route}: Props) => {
  const {movieId} = route.params;
  const {isLoanding, movie} = useMovies(movieId);
  if (isLoanding)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  return (
    <View>
      {/* Header */}
      <MovieHeader movie={movie!} />
      {/* Detalles */}
      <MovieInfo movie={movie!} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 300,
  },
});

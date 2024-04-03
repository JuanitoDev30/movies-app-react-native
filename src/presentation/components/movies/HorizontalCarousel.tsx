import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {FlatList} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';
import {useEffect, useRef} from 'react';

interface Props {
  movies: Movie[];
  title?: string;
  loadNextMovies?: () => void;
}

export const HorizontalCarousel = ({movies, title, loadNextMovies}: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);

    isLoading.current = false;
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;
    //calcular la cantidad maxima del scroll
    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEndReached) return;
    isLoading.current = true; //Evitar que se ejecute varias veces
    //Cargar las siguientes peliculas
    //Si tenemos la funcion loadNextMovies, la ejecutamos
    loadNextMovies && loadNextMovies();
  };
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && <Text style={styles.title}>{title}</Text>}

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '400',
    marginLeft: 10,
    marginBottom: 10,
    color: 'black',
  },
});

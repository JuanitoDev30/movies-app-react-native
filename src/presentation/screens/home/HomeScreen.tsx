import {StyleSheet, Text, View} from 'react-native';
import {UseMovies} from '../../hooks/UseMovie';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Carousel} from '../../components/movies/Carousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const topWithMargin = top + 20;
  const {isLoading, nowPlaying, popular, topRated, upComing, popularNextPage} =
    UseMovies();

  if (isLoading) {
    return (
      <View style={[styles.container, {marginTop: topWithMargin}]}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={[styles.container, {marginTop: topWithMargin}]}>
        {/* Carousel Principal */}
        <Carousel movies={nowPlaying} />

        {/* Carousel Popular */}
        <HorizontalCarousel
          movies={popular}
          title="Populars"
          loadNextMovies={popularNextPage}
        />
        {/* Carousel Top Rated */}
        <HorizontalCarousel movies={topRated} title="Top Rated" />

        {/* Carousel Up Coming */}
        <HorizontalCarousel movies={upComing} title="Up Coming" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
});

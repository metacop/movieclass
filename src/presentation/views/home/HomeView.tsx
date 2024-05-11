import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PosterCarousel} from '../../components/movies/PosterCarousel';
import {HorizontalCarousel} from '../../components/movies/HorizontalCarousel';

interface HomeViewProps {}

export const HomeView = ({}: HomeViewProps) => {
  const {isLoading, nowPlaying, popular,topRated,upComing} = useMovies();

  const {top} = useSafeAreaInsets(); //! para obtener el top de la pantalla para que no se superponga con el notch del iphone

  if (isLoading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <ScrollView>
      <View
        style={{
          marginTop: top + 20,
          paddingBottom: 30,
        }}>
        {/* //! CARRUSEL 0 DEPENDENCIAS. CARGA TODOS LOS ELEMENTOS INCLUSO SI NO SE VEN EN PANTALLA (scrollview) */}
        {/* PRINCIPALES */}
        <PosterCarousel movies={nowPlaying}   />

        {/* POPULARES */}
        <HorizontalCarousel movies={popular} title={'Populares'} loadNextPage={()=> console.log("first")} />

        {/* TOP MOVIES */}
        <HorizontalCarousel movies={topRated} title={'Top Movies'} />

        {/* PROXIMAMENTES */}
        <HorizontalCarousel movies={upComing} title={'Proximamente'} />
      </View>
      </ScrollView>
  );
};

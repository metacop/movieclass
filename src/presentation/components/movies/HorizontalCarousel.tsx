import React, {useEffect, useRef} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Movie} from '../../../core/entities/movie.entity';
import {FlatList} from 'react-native';
import {MoviePoster} from './MoviePoster';

interface HorizontalCarouselProps {
  movies: Movie[];
  title: string;
  loadNextPage?: () => void;
}

export const HorizontalCarousel = ({
  movies,
  title,
  loadNextPage,
}: HorizontalCarouselProps) => {
  const isLoading = useRef(false); //! para saber si esta cargando o no. y useref porque no quiero que se renderize de nuevo

  useEffect(() => {
    //! esto evitamos que se cargue la siguiente pagina de peliculas si no se ha terminado de cargar la primera pagina. le damos una pausa para que carge bien.
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    // console.log(contentSize.width) //! tamaño total del contenido
    // console.log(layoutMeasurement.width); //! tamaño width de la pantalla viewport width
    // console.log(contentOffset.x) //! la posicion en x del scroll
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    // ! el layoutmeasurement no es tan necesario. es para darle un margen de 600px para que cargue la siguiente pagina de peliculas. si se lo quitamos igual funciona. el importante es el x + la proximidad al final del scroll
    if (!isEndReached) {
      return;
    }

    isLoading.current = true;

    // cargar las siguientes peliculas
    //! en top movies no tiene loadNextPage y proximamente tampoco por eso preguntamos si viene la funcion loadNextPage
    loadNextPage && loadNextPage();
  };

  return (
    <View
      style={{
        height: title ? 260 : 220,
      }}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`} //! es como el key de react
        horizontal
        showsHorizontalScrollIndicator={false} //! para que no se vea la barra de scroll
        onScroll={onScroll}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

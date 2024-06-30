import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Actor, FullMovie} from '../../../core/entities/movie.entity';
import {Formatter} from '../../../config/helpers/formatter';
import {FlatList} from 'react-native-gesture-handler';

interface MovieDetailsProps {
  movie: FullMovie;
  actores: Actor[];
}

export const MovieDetails = ({movie, actores}: MovieDetailsProps) => {
  //   console.log({actores});
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Text>{movie.rating}</Text>
          <Text style={{marginLeft: 5}}> - {movie.genres.join(',')}</Text>
        </View>
        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>Historia</Text>
        <Text style={{marginTop: 10, fontSize: 16}}>{movie.description}</Text>

        <Text style={{fontSize: 23, marginTop: 10, fontWeight: 'bold'}}>Presupuesto</Text>
        <Text style={{marginTop: 10, fontSize: 18}}>{Formatter.formatCurrency(movie.budget)}</Text>

        {/* ACTORES */}
        <View style={{marginTop: 10, marginBottom: 100}}>
          <Text style={{fontSize: 23, marginVertical: 10, fontWeight: 'bold'}}>Actores</Text>

          <FlatList
            // style={{backgroundColor: 'red'}}
            data={actores}
            renderItem={({item}) => (
              //! podriamos poner un componente ActorComponente que reciba un actor y lo renderize
              <View style={{width: 100, marginRight: 10}}>
                <Image
                  source={{uri: item.profile_path}}
                  style={{
                    height: 150,
                    width: 100,
                    //   marginRight: 10,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{fontSize: 15, fontWeight: 'bold'}}
                  numberOfLines={2} //! en casoo que no cae en los 100 with del padre se corta en 2 lineas. puede ser del mismo Text o del View padre
                  //   ellipsizeMode="tail" en caso de no caber añade ... al final
                >
                  {item.name}
                </Text>
                <Text style={{fontSize: 12, opacity: 0.7}}>{item.character}</Text>
              </View>
            )}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

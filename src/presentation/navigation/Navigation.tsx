import { createStackNavigator } from '@react-navigation/stack';
import { HomeView } from '../views/home/HomeView';
import { DetailView } from '../views/details/DetailView';

export type RootStackParamList = {
    Home: undefined;
    Detail: { movieId: number};
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () =>{
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="Detail" component={DetailView} />
    </Stack.Navigator>
  );
}
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {DetailScreen} from '../screens/details/DetailScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: {movieId: number};
};

const Stack = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailScreen} />
    </Stack.Navigator>
  );
};

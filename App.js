import { View, Text } from "react-native";
import Home from "./screens/Home";
import BmiResults from "./screens/BmiResults";
import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Results" component={BmiResults} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

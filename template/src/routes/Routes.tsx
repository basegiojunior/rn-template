import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Secondary from '../pages/Secondary';
import { RoutesList } from './Routes.types';

const Stack = createNativeStackNavigator();

const MainRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={RoutesList.Home}
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name={RoutesList.Secondary}
          component={Secondary}
          options={{ title: 'Secondary' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoutes;

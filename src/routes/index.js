import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import Detail from '../screens/Detail';

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
}

export default App;
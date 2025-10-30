import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CadastroCScreen from "./CadastroCScreen";
import EditCScreen from "./EditCScreen";

import CadastroUScreen from "./CadastroUScreen";
import EditUScreen from "./EditUScreen";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Contato */}
        <Stack.Screen
          name="AddContato"
          component={CadastroCScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditContato"
          component={EditCScreen}
          options={{ headerShown: false }}
        />

        {/* Usuário */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroUScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditUser"
          component={EditUScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login"> 
      
      {/*Contato*/}
      <Stack.Screen name="AddContato" component={CadastroCScreen} options={{ headerShown: false }} />{/*Corrigida*/}
      <Stack.Screen name="EditContato" component={EditCScreen} options={{ headerShown: false }} />

      {/*Usuario*/}
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>{/*Corrigida*/}
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/> {/*Corrigida*/}
      <Stack.Screen name="Cadastro" component={CadastroUScreen} options={{ headerShown: false }}/>{/*Corrigida*/}
      <Stack.Screen name="EditUser" component={EditUScreen} options={{ headerShown: false }} />{/*Corrigida*/}
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
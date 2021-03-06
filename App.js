import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from './src/pages/LoginScreen'

// Aqui teremos nosso Router.
function LoginScreen(){
  return (
    <LoginPage>
      
    </LoginPage>
  )
}

const Stack = createStackNavigator(); // Pilha de Navegação -- Similar ao Router do NodeJS/Express.

function App(){

  return(
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="LoginTela" component={LoginScreen}
            options={
                {
                  headerTintColor: '#fff',
                  headerStyle: { 
                      backgroundColor: '6CA2F7',
                      borderBottomWidth: 5,
                      borderBottomColor: '#C5C5C5'
                  },
                  headerTitleStyle: {
                      color: '#FFF',
                      fontSize: 30
                  }
                }
            }
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

export default App;
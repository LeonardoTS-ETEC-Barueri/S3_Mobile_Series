import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
import LoginScreen from './pages/LoginScreen';
// import SeriesPage from './pages/SeriesPage'
 
const AppNavigator = createStackNavigator({
 
    'Main':{

        screen: LoginScreen,
        navigationOptions:{
            title: 'Bem Vindo'
        }

    },
    // 'Main': {

    //     screen: SeriesPage

    // }
 
}, {
 
    defaultNavigationOptions:{

        title: 'SÉRIES',
        headerTintColor: '#fff',
        headerStyle:{

            backgroundColor: '#6ca2f7',
            borderBottomWidth: 10,
            borderBottomColor: '#c5c5c5'

        },
        headerTitleStyle:{
            color: '#fff',
            fontSize: 30,
            flexGrow: 1,
            textAlign: 'center'
        }

    }
 
})
 
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
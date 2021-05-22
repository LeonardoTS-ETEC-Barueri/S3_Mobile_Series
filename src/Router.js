import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
import LoginScreen from './pages/LoginScreen';
import SeriesPage from './pages/SeriesPage';
import SerieDetailPage from './pages/SerieDetailPage';
import SerieFormPage from './pages/SerieFormPage';
 
const AppNavigator = createStackNavigator({
 
    'Main': {

        screen: SeriesPage

    },
    'Login':{

        screen: LoginScreen,
        navigationOptions:{
            title: 'Bem Vindo'
        }

    },
    'SerieDetailPage': {
        screen: SerieDetailPage,
        navigationOptions: ({ navigation }) => {
            const { serie } = navigation.state.params;
            return {
                title: serie.title
            }
        }
    },
    'SerieForm': {
        screen: SerieFormPage,
        navigationOptions: {
            title: 'Bem vindo'
        }
    }
 
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
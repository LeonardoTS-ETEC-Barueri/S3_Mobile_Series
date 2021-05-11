import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';
import firebase from 'firebase';

import FormRow from '../component/FormRow';

import { connect } from 'react-redux';

import { tryLogin } from '../actions';

class LoginPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            mail: '',
            password: '',
            message: ''
        }
    }

    componentDidMount(){

        const config = {
            // Sua auth firebase aqui.
        };

        if (firebase.apps.length === 0){
            firebase.initializeApp(config);
        }

    }

    tryLogin(){

        // console.log('stateBeforeTryLogin: ', this.state);

        console.log('State:', this.state);
        const {mail, password} = this.state;

        // this.props.navigation.navigate('Main'); // Fica pra documentar a diferença entre Navigate/Replace...
        this.props.tryLogin({mail, password})
        .then((user) => {

            if (user){

                this.props.navigation.replace('Main');

            } else {

                this.setState({
                    message: ''
                });

            }

        })
        .catch((error) => {

            this.setState({
                message: 'ERRO AO EFETUAR O LOGIN'
            });

        });
        
        
        
        // console.log('stateAfterTryLogin: ', this.state);

    }

    renderMessage(){

        const { message } = this.state;

        if(!message){
            return null;
        }
        
        return(
            <View>
                <Text> { message } </Text>
            </View>
        )

    }

    renderButton(){
        return(
            <Button title="ENTRAR"
                    onPress={ () => { this.tryLogin() } }
            />
        )
    }

    onChangeEmail(mail){
        this.setState({ mail });
        // console.log('UserInput E-mail: ', mail);
        // console.log('State Mail: ', this.state.mail)
    }

    onChangePassword(password){
        this.setState({ password });
        // console.log('UserInput Senha: ', password);
        // console.log('State Password: ', this.state.password)
    }


    render(){    // Como esse class component será uma tela que renderiza coisas, naturalmente chamamos o Render.

        return(
            <View>

                <FormRow>
                    <TextInput  style={styles.input}
                                value={this.state.mail}
                                onChangeText={
                                    (value) => this.onChangeEmail(value)
                                }
                                placeholder="email@dominio.com">
                    </TextInput>
                </FormRow>

                <FormRow>
                    <TextInput  style={styles.input}
                                value={this.state.password}
                                onChangeText={
                                    (value) => this.onChangePassword(value)
                                }
                                placeholder="***********"
                                secureTextEntry={true}>
                    </TextInput>
                </FormRow>

                { this.renderButton() }

                { this.renderMessage() }
                
            </View>

            
        )

    }

}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10
    }
});

export default connect(null, { tryLogin })(LoginPage);
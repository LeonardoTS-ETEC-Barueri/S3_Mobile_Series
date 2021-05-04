import React from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert } from 'react-native';
import firebase from 'firebase';

import FormRow from '../component/FormRow';

export default class LoginPage extends React.Component{

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
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: "",
            appId: "",
            measurementId: ""
        };

        if (firebase.apps.length === 0){
            firebase.initializeApp(config);
        }

    }

    tryLogin(){

        // console.log('stateBeforeTryLogin: ', this.state);

        const {mail, password} = this.state;

        firebase.auth()
        .signInWithEmailAndPassword(mail, password)
        .then((user) => {
            this.setState({ 
                message: 'Usuário autenticado com sucesso!'
            })
            console.log('Autenticado!'/*, user*/);
        })
        .catch((error) => {
            this.setState({ 
                message: 'Erro ao autenticar o usuário!'
            })

            if(error.code === 'auth/user-not-found'){
                Alert.alert('USUÁRIO NÃO ENCONTRADO',
                'DESEJA CRIAR UM USUÁRIO?',
                [
                    {text: 'NÃO', onPress: () => { console.log('Não criar usuário.') } },
                    {text: 'SIM', onPress: () => { 

                        console.log('Crie o usuário.');

                        firebase.auth()
                        .createUserWithEmailAndPassword(mail, password)
                        .then((user) => {
                            this.setState({ 
                                message: 'Usuário criado com sucesso!'
                            });
                            console.log('Usuário criado com sucesso: ', user);
                        })
                        .catch((error) => {
                            this.setState({ 
                                message: 'Erro ao criar o usuário.'
                            });
                            console.log('Erro ao criar o usuário: ', error);
                        });

                    } },
                ],
                {
                    cancelable: false
                }

                );
            }

            console.log('Usuário não autenticado'/*, error*/);
        })

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
})
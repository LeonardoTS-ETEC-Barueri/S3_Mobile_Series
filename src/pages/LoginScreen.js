import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

import FormRow from '../component/FormRow';

export default class LoginPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            mail: '',
            password: ''
        }
    }

    tryLogin(){
        console.log('state: ', this.state);
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

                <Button title="ENTRAR" onPress={ () => { this.tryLogin() } } />
                
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
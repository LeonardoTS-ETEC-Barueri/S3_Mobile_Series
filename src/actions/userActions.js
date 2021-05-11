import firebase from 'firebase';
import { Alert } from 'react-native';

// TYPE ACTIONS:
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';

// ACTION CREATOR:
const userLoginSuccess = (user) => {
    return {
        type: USER_LOGIN_SUCCESS,
        user
    }
}

const userLogout = () => {
    return {
        type: USER_LOGOUT
    }
}

// FUNÇÃO LOGIN:
export const tryLogin = ({mail, password}) => dispatch => {

    // return new Promise((resolve, reject) => {

        return firebase.auth()
        .signInWithEmailAndPassword(mail, password)
        .then((user) => {
            // this.setState({ 
            //     message: 'Usuário autenticado com sucesso!'
            // })

            const action = userLoginSuccess(user)
            dispatch(action);
            console.log('Autenticado!', user);

            return user;
        })
        .catch((error) => {
            // this.setState({ 
            //     message: 'Erro ao autenticar o usuário!'
            // });

            console.log('errorAction-userAction.js', error);
            if(error.code === 'auth/user-not-found'){
                
                return new Promise((resolve, reject) => {
                    
                    Alert.alert('USUÁRIO NÃO ENCONTRADO',
                        'DESEJA CRIAR UM USUÁRIO?',
                        [
                            {
                                text: 'NÃO', 
                                onPress: () => { 
                                    /*console.log('Não criar usuário.')*/
                                    resolve();
                                }
                            }, {
                                text: 'SIM', 
                                onPress: () => { 
                                    console.log('userActions - Crie o usuário.');
                                    firebase.auth()
                                    .createUserWithEmailAndPassword(mail, password)
                                    .then((user) => {
                                        // this.setState({ 
                                        //     message: 'Usuário criado com sucesso!'
                                        // });
                                        console.log('userActions - Usuário criado com sucesso: ', user);
                                        resolve(user);
                                        
                                    })
                                    .catch((error) => {
                                        // this.setState({ 
                                        //     message: 'Erro ao criar o usuário.'
                                        // });
                                        console.log('userActions - Erro ao criar o usuário: ', error);
                                        reject();
                                    });
                                } 
                            }
                        ],
                        {
                            cancelable: false
                        }
                    );

                });

            }

            console.log('Usuário não autenticado'/*, error*/);
            return Promise.reject(error);
        });

    // });

    // ---------------------------------------------------------

    // return new Promise((resolve, reject) => {

    //     firebase.auth()
    //     .signInWithEmailAndPassword(mail, password)
    //     .then((user) => {
    //         // this.setState({ 
    //         //     message: 'Usuário autenticado com sucesso!'
    //         // })

    //         const action = userLoginSuccess(user)
    //         dispatch(action);
    //         console.log('Autenticado!', user);

    //         resolve(user);
    //     })
    //     .catch((error) => {
    //         // this.setState({ 
    //         //     message: 'Erro ao autenticar o usuário!'
    //         // });

    //         if(error.code === 'auth/user-not-found'){

    //             // return new Promise((resolve, reject) => {
                    
    //                 Alert.alert('USUÁRIO NÃO ENCONTRADO',
    //                     'DESEJA CRIAR UM USUÁRIO?',
    //                     [
    //                         {
    //                             text: 'NÃO', 
    //                             onPress: () => { 
    //                                 /*console.log('Não criar usuário.')*/
    //                                 resolve();
    //                             }
    //                         }, {
    //                             text: 'SIM', 
    //                             onPress: () => { 
    //                                 console.log('Crie o usuário.');
    //                                 firebase.auth()
    //                                 .createUserWithEmailAndPassword(mail, password)
    //                                 .then((user) => {
    //                                     // this.setState({ 
    //                                     //     message: 'Usuário criado com sucesso!'
    //                                     // });
    //                                     console.log('Usuário criado com sucesso: ', user);
    //                                     resolve(user);
                                        
    //                                 })
    //                                 .catch((error) => {
    //                                     // this.setState({ 
    //                                     //     message: 'Erro ao criar o usuário.'
    //                                     // });
    //                                     console.log('Erro ao criar o usuário: ', error);
    //                                     reject(error);
    //                                 });
    //                             } 
    //                         }
    //                     ],
    //                     {
    //                         cancelable: false
    //                     }
    //                 );

    //             // });

    //         }

    //         console.log('Usuário não autenticado'/*, error*/);
    //     });

    // });

    // ---------------------------------------------------------------------------

    // firebase.auth()
    // .signInWithEmailAndPassword(mail, password)
    // .then((user) => {
    //     // this.setState({ 
    //     //     message: 'Usuário autenticado com sucesso!'
    //     // })

    //     const action = userLoginSuccess(user)
    //     dispatch(action);
    //     console.log('Autenticado!', user);
    //     return user;
    // })
    // .catch((error) => {
    //     // this.setState({ 
    //     //     message: 'Erro ao autenticar o usuário!'
    //     // });

    //     if(error.code === 'auth/user-not-found'){

    //         return new Promise((resolve, reject) => {
                
    //             Alert.alert('USUÁRIO NÃO ENCONTRADO',
    //                 'DESEJA CRIAR UM USUÁRIO?',
    //                 [
    //                     {
    //                         text: 'NÃO', 
    //                         onPress: () => { 
    //                             /*console.log('Não criar usuário.')*/
    //                             resolve();
    //                         }
    //                     }, {
    //                         text: 'SIM', 
    //                         onPress: () => { 
    //                             console.log('Crie o usuário.');
    //                             firebase.auth()
    //                             .createUserWithEmailAndPassword(mail, password)
    //                             .then((user) => {
    //                                 // this.setState({ 
    //                                 //     message: 'Usuário criado com sucesso!'
    //                                 // });
    //                                 console.log('Usuário criado com sucesso: ', user);
    //                                 resolve(user);
                                    
    //                             })
    //                             .catch((error) => {
    //                                 // this.setState({ 
    //                                 //     message: 'Erro ao criar o usuário.'
    //                                 // });
    //                                 console.log('Erro ao criar o usuário: ', error);
    //                                 reject(error);
    //                             });
    //                         } 
    //                     }
    //                 ],
    //                 {
    //                     cancelable: false
    //                 }
    //             );

    //         });

    //     }

    //     console.log('Usuário não autenticado'/*, error*/);
    // });


}
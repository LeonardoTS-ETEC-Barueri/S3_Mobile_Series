import React from 'react';
import { StyleSheet, View } from 'react-native';

// Functional Component que nos permitirá implementar várias "Linhas de formulário".
const FormRow = (props) => {

    const { children }  = props
        // Similar à "props.children" - Logo, children é uma propriedade do parâmetro objeto "props".

    return(
        <View style={styles.container}>
            { children /* Observe como recebemos children da props aqui.*/}
        </View>
    )

}

const styles = StyleSheet.create({

    container:{     // Container é uma Classe, assim como as classes do CSS.

        padding: 10,
        backgroundColor: '#CCC',
        marginTop: 5,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
        elevation: 1

    }

});

export default FormRow;
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const SeriesCard = ({ serie, isFirstColumn, onNavigate }) => (
    
    <TouchableOpacity 
        onPress={
            onNavigate
        } 
        style={[ styles.container, isFirstColumn ? styles.firstColumn : styles.lastColumn ]}>

        <View style={ styles.card }>
            <Image
                source={ require('../../sources/add.png') }
                style={ styles.image }
                aspectRatio={1}
                resizeMode="cover"
            />
        </View>

    </TouchableOpacity>

)

const styles = StyleSheet.create({

    container: {
        width: '50%',
        padding: 5,
        height: Dimensions.get('window').width / 2  // Garante que a altura seja a largura da janela / 2.
    },
    card: {

        flex: 1,
        // borderWidth: 1
    },
    cardTitleWrapper: {
        backgroundColor: '#000',
        height: 50,
        position: 'absolute',
        bottom: 0,
        opacity: 0.7,
        width: '100%',

        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 5,
        paddingRight: 5,
        
        alignItems: 'center'
    },
    cardTitle: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
    },
    firstColumn:{
        paddingLeft: 10
    },
    lastColumn:{
        paddingRight: 10
    },
    image: { 
        width: '100%',
        height: '100%'
    }

});

export default SeriesCard;

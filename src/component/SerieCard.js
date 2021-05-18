import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const SeriesCard = ({ serie, onNavigate }) => (
    
    <TouchableOpacity 
        onPress={
            onNavigate
        } 
        style={ styles.container }>

        <View style={ styles.card }>
            <Image  source={ 
                        { 
                            uri: serie.img,
                            
                        }   
                    }
                    aspectRatio={1}
                    resizeMode="cover"
            />

            <View style={styles.cardTitleWrapper}>

                <Text style={styles.cardTitle}>{ serie.title }</Text>

            </View>
        </View>

    </TouchableOpacity>

)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        height: Dimensions.get('window').width / 2  // Garante que a altura seja a largura da janela / 2.
    },
    card: {

        flex: 1,
        borderEndWidth: 1
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
    }

});

export default SeriesCard;

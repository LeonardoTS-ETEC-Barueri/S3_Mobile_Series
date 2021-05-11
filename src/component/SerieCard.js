import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const SeriesCard = ({ serie }) => {
    
    <View style={ styles.container }>

        <View style={ styles.card }>
            <Image  source={ 
                        { 
                            uri: serie.img,
                            
                        }   
                    }
                    aspectRatio={1}
                    resizeMode="cover"
            />
        </View>

    </View>

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        height: Dimensions.get('window').width / 2  // Garante que a altura seja a largura da janela / 2.
    },
    card: {

        flex: 1,
        borderEndWidth: 1
    }

});

export default SeriesCard;

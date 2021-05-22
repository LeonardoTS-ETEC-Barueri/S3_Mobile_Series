import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import LongText from '../component/LongText';

export default class SerieDetailPage extends React.Component {
    render() {

        const { serie } = this.props.navigation.state.params

        return (
            <View>

                <ScrollView>
                    <Image
                        style={styles.image}
                        source={
                            {
                                uri: serie.img
                            }
                        }
                    />
                    <Text>TITULO: { serie.title }</Text>
                    <Text>GENERO: { serie.gender }</Text>
                    <Text>AVALIAÇÃO: { serie.rate }</Text>
                    {/* <Text>DESCRIÇÃO: { serie.description }</Text> */}
                    
                    <LongText label="DESCRIÇÃO" content={ serie.description } />

                </ScrollView>
            </View>
        )

    }
}

const styles = StyleSheet.create({

    image: {
        aspectRatio: 1
    }

})
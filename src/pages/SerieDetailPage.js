import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class SerieDetailPage extends React.Component {
    render() {

        const { serie } = this.props.navigation.state.params

        return (
            <View>
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
            </View>
        )

    }
}

const styles = StyleSheet.create({

    image: {
        aspectRatio: 1
    }

})
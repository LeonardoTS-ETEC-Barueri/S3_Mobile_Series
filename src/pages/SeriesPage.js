import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import series from '../../series.json';
import SerieCard from '../component/SerieCard';

const SeriesPage = (props) =>{

    return (
        <View>
            {/* <Text>ESSA É A SÉRIES PAGE!</Text> */}
            
            <FlatList
                data={series}
                renderItem={
                    ({item}) => (
                        <SerieCard
                            serie={item}
                            onNavigate={ 
                                () => {
                                    return props.navigation.navigate(
                                        'SerieDetailPage', 
                                        {
                                            serie: item
                                        }
                                    )
                                } 
                            } />
                    )
                }
                keyExtractor={ (item) => item.id }
                numColumns="2"
            />

        </View>
    )

}

    

// );

const styles = StyleSheet.create({});

export default SeriesPage;
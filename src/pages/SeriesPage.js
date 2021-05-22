import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import series from '../../series.json';
import SerieCard from '../component/SerieCard';
import AddSerieCard from '../component/AddSerieCard';

const isEven = number =>( number % 2 === 0 )

const SeriesPage = (props) =>{

    return (
        <View>
            {/* <Text>ESSA É A SÉRIES PAGE!</Text> */}
            
            <FlatList
                data={[...series, { isLast: true }]}
                renderItem={
                    ({item, index}) => (

                        item.isLast ?
                            <AddSerieCard 
                                isFirstColumn={isEven(index)}
                                onNavigate={ 
                                    () => {
                                        return props.navigation.navigate(
                                            'SerieForm'
                                        )
                                    } 
                                }
                            />
                        :
                        <SerieCard
                            serie={item}
                            isFirstColumn={isEven(index)}
                            onNavigate={ 
                                () => {
                                    return props.navigation.navigate(
                                        'SerieDetailPage', 
                                        {
                                            serie: item
                                        }
                                    )
                                } 
                            }
                        />
                    )
                }
                keyExtractor={ (item) => item.id }
                numColumns="2"
                ListHeaderComponent={props => (<View style={styles.marginTop} />)}
                ListFooterComponent={props => (<View style={styles.marginBottom} /> )}
            />

        </View>
    )

}

    

// );

const styles = StyleSheet.create({

    marginTop:{
        marginTop:5
    },
    marginBottom:{
        marginBottom:5
    }

});

export default SeriesPage;
import React from 'react';
import { View, 
         Text, 
         StyleSheet, 
         TouchableWithoutFeedback,
         LayoutAnimation,
         NativeModules } from 'react-native';

if (Platform.OS === 'android') {
    if (NativeModules.setLayoutAnimationEnabledExperimental) {
        NativeModules.setLayoutAnimationEnabledExperimental(true);
    }
}

export default class LongText extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            isExpandend: false
        }

    }

    toogleIsExpanded(){

        const { isExpandend } = this.state;
        
        this.setState({

            isExpandend: !isExpandend

        });

    }

    componentDidUpdate(nextProps, nextState){

        LayoutAnimation.spring();

    }

    render(){

        const { label = "", content = "-" }  = this.props;
        const { isExpandend } = this.state;

        return (
            <View style={styles.line}>
                <Text style={[
                    styles.cell,
                    styles.label
                ]}>{ label }</Text>
                <TouchableWithoutFeedback onPress={ () => this.toogleIsExpanded() }>
                    <View>
                        <Text 
                            style={
                                    [styles.cell, 
                                    styles.content, 
                                    isExpandend ? styles.expanded : styles.collapsed ]}>
                                        
                            { content }
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );

    }

}
const styles = StyleSheet.create({
	line: {
		paddingTop: 3,
		paddingBottom: 3
	},
	cell: {
		fontSize: 18,
		paddingLeft: 5,
        paddingRight: 5
	},
	label: {
		fontWeight: 'bold',
		flex: 1,
        textDecorationLine:'underline',
        paddingBottom: 10
	},
	content: {
		flex: 3
	},
    collapsed:{
        maxHeight: 70
    },
    expanded:{
        flex:1
    }
});

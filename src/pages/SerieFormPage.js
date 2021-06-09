import React from 'react';
import { View, Text, StyleSheet, TextInput,
Picker, Slider, Button }
    from 'react-native';

import { connect } from 'react-redux';
import FormRow from '../component/FormRow';

import { setField } from '../actions';

const SerieFormPage = ({ serieForm, setField }) => {

    return ( 
        <View>

            <FormRow>
                <TextInput
                    style={styles.input}
                    placeholder='Título da série'
                    value={serieForm.title}
                    onChangeText={(value) => { return setField('title', value) } }
                />
            </FormRow>

            <FormRow>
                <Picker
                    selectedValue={serieForm.gender}
                    onValueChange={ (itemValue) => { return setField('gender', itemValue) } }
                >
                    <Picker.Item label="Policial" value="policial" />
                    <Picker.Item label="Comédia" value="comédia" />
                    <Picker.Item label="Terror" value="terror" />
                </Picker>
            </FormRow>

        </View>
    );

}

// Styles.

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10,
    }
});

// Redux Mapping.
const mapStateToProps = (state) => {
    return {
        serieForm: state.serieForm
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setField: (field, value) => { return dispatch( setField(field, value) ) }
    }
}

// Exportações.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SerieFormPage);
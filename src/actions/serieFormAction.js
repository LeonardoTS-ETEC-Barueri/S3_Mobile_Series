// Action Type.
export const SET_FIELD = 'SET_FIELD';

// Action Creator.
export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
}
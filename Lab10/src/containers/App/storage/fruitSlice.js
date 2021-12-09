import {createSlice} from "@reduxjs/toolkit";

export const fruitSlice = createSlice({
    name: "fruit",
    initialState: {
        value: []
    },
    reducers: {
        addFruit: (state, payloadFruit) => {
            state.value.push(payloadFruit.payload)
        },
        removeFruit: (state, payloadId) => {
            let elemToRemoveIndex = state.value.findIndex((element, index, array) => element.id ===payloadId)
            state.value.splice(elemToRemoveIndex, 1)
        },
        clearCart: state => {
            state.value = []
        }
    }
})
export const {addFruit, removeFruit, clearCart} = fruitSlice.actions;

export default fruitSlice.reducer;

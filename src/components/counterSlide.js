import { createSlice } from "@reduxjs/toolkit";
// import {getStore} from './AxiosMethods';


// populate the core of our Redux logic in Slice
// createSlice is a function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

const initialState = { value: 0, storename: 'NameOfStore' }

const Slice = createSlice({
  name: 'counter',
  initialState,
    //  Reducer is acting as an "event listener" that handles events based on received action type while Dispatching actions is "triggering events"
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
    decrementByAmount(state, action) {
      state.value -= action.payload
    },
    validateStore(state, action) {
      // state.storename = action.payload.value
      state.value = +2
    },
  },
})

export  const selectCount = (state) => state.counter.value;
export const { increment, decrement, incrementByAmount, decrementByAmount, validateStore } = Slice.actions
export default Slice.reducer
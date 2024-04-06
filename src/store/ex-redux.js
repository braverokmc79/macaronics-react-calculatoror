import { createStore } from "redux";

export const INCREMENT ="increment";
export const INCREASE ="increase";
export const DECREMENT ="decrement";

const initialState = { counter: 0, showCounter: true };
createSlice({
  name:'counter',
  initialState:initialState,
  
})

const counterReducer = (state = initialState , action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter,
      };
    case INCREASE:
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter,
      };

    case DECREMENT:
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter,
      };

    case "toggle":
      return {
        counter: state.counter ,
        showCounter: !state.showCounter,
      };


    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;

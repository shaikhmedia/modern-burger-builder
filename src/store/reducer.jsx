import * as actionTypes from "./actions";

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
  },
  totalPrice: 4,
};

const pricing = {
  cheese: 0.5,
  bacon: 0.7,
  meat: 1.3,
  salad: 0.4,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        // Spread the whole state
        ...state,
        // Mutate ingredients object spreading old ingredients
        ingredients: {
          ...state.ingredients,
          //Mutate the value of old ingredient
          [action.ingName]: state.ingredients[action.ingName] + 1,
        },
        totalPrice: state.totalPrice + pricing[action.ingName],
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          //Mutate the value of old state
          [action.ingName]: state.ingredients[action.ingName] - 1,
        },
        totalPrice: state.totalPrice - pricing[action.ingName],
      };
    default:
      return state;
  }
};

export default reducer;

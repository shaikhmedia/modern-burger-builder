import * as actionTypes from "./actionsTypes";
import axios from "../../axios-orders";

// To dispatch for adding ingredients
export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    // This will be action.ingName in reducer
    ingName: name,
  };
};

// To dispatch for removing ingredients
export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    // This will be action.ingName in reducer
    ingName: name,
  };
};

// To dispatch for setting ingredients
export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    // This will be action.ingredients in reducer
    ingredients,
  };
};

export const fetchIngredients = () => {
  return (dispatch) => {
    axios
      .get("https://burger-builder-41792.firebaseio.com/ingredients.json")
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

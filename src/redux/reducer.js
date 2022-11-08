import { initialState } from "./initialState";

export function reducer(state = initialState, action) {

  switch (action.type) {
    case "SET_SIMPSONS_API":
      return { ...state, simpsons: action.payload };

    // case "ADD_SIMPSONS_CHAR":
    //   return { simpsons: action.userInput };

    default:
      return state;
  }
}

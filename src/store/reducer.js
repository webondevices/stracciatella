import Action from "./actions";
import { BrightnessTheme } from "./enums";

const initialState = {
  brightnessTheme: BrightnessTheme.Light,
};

const reducer = (state = initialState, action) => {
  switch (action?.type) {
    case Action.SetBrightnessTheme:
      return {
        ...state,
        brightnessTheme: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

export const Action = {
  SetBrightnessTheme: "setBrightnessTheme",
};

export const setBrightnessTheme = (payload) => ({
  type: Action.SetBrightnessTheme,
  payload,
});

export default Action;

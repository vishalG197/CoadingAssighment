export const TOGGLE_LEGEND = 'TOGGLE_LEGEND';

export const toggleLegend = (legendName) => ({
  type: TOGGLE_LEGEND,
  payload: legendName,
});

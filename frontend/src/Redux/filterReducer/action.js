export const SET_DATE_FILTER = 'SET_DATE_FILTER';

export const setDateFilter = (startDate, endDate) => ({
  type: SET_DATE_FILTER,
  payload: { startDate, endDate },
});
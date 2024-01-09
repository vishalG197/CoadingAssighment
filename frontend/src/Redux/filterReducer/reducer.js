import { SET_DATE_FILTER } from "./action";

const initialState = {
   startDate: null,
   endDate: null,
 };
 
 const dateFilterReducer = (state = initialState, action) => {
   switch (action.type) {
     case SET_DATE_FILTER:
       return {
         ...state,
         startDate: action.payload.startDate,
         endDate: action.payload.endDate,
       };
     default:
       return state;
   }
 };
 
 export default dateFilterReducer;
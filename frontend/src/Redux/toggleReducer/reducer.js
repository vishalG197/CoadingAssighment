import { TOGGLE_LEGEND } from "./action";

const initialState = {
   legends: {
     legend1: true,
     legend2: true,
     // ... add more legends as needed
   },
 };
 
 const legendToggleReducer = (state = initialState, action) => {
   switch (action.type) {
     case TOGGLE_LEGEND:
       return {
         ...state,
         legends: {
           ...state.legends,
           [action.payload]: !state.legends[action.payload],
         },
       };
     default:
       return state;
   }
 };
 
 export default legendToggleReducer;
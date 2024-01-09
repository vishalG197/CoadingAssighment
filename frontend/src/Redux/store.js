
import { createStore, combineReducers } from 'redux';
import dateFilterReducer from './filterReducer/reducer';
import legendToggleReducer from './toggleReducer/reducer';


const rootReducer = combineReducers({
   dateFilter: dateFilterReducer,
   legendToggle: legendToggleReducer,
 });
 
 const store = createStore(rootReducer);
 
 export default store;
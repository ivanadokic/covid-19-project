import { combineReducers } from 'redux'
import countries from './countriesReducer'
import summaries from './summariesReducer'
//import reducer here

const rootReducer = combineReducers({
  //list reducer here
  countries, summaries
})

export default rootReducer
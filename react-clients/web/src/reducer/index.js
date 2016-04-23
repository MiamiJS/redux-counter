import {applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import counterReducer from './counterReducer'


const rootReducer = combineReducers({
	counter: counterReducer
})


export default rootReducer

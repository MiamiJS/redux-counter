import {applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import middleware from './middleware'
import counterReducer from './counterReducer'


const reducer = combineReducers({
	counter: counterReducer
})

const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)

const store = createStoreWithMiddleware(reducer)
export default store

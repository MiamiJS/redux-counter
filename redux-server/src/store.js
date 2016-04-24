import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'


const logger = store => next => action => {
	const result = next(action);
	console.log(action.type, store.getState())
	return result;
}


const makeStore = () => createStore(reducer, applyMiddleware(thunk, logger))


export default makeStore

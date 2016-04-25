import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import {firebaseRef} from '../index'




const fbMiddleware = store => next => action => {
	const result = next(action);
	if(action.type!=='SET_STATE'){
		console.log(action.type, store.getState())
		firebaseRef.update(store.getState().toJS())
	}
}



const storeWithMiddleware = applyMiddleware(thunk, fbMiddleware)(createStore)

const store = storeWithMiddleware(reducer)

export default store

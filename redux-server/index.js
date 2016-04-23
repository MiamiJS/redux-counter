import makeStore from './src/store'
import startServer from './src/server'
import Firebase from 'firebase'
import {INITIAL_STATE} from './src/core'

export const store = makeStore()
startServer(store)



const firebaseRef = new Firebase('https://miamijsredux.firebaseio.com/')

//set initial state in firebase. runs once at server start
firebaseRef.set(INITIAL_STATE.toJS())


//TODO: update firbase on dispatch

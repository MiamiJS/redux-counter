import makeStore from './src/store'
import startServer from './src/server'
import Firebase from 'firebase'


export const store = makeStore()
startServer(store)


export const firebaseRef = new Firebase('https://miamijsredux.firebaseio.com/')

//set inital state 
firebaseRef.child('currentNumber').on("value", function(snapshot) {
  store.dispatch({type: 'SET_STATE', currentNumber: snapshot.val()})
})

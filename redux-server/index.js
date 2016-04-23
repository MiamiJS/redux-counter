import makeStore from './src/store'
import startServer from './src/server'
import Firebase from 'firebase'


export const store = makeStore()
startServer(store)



const firebaseRef = new Firebase('https://miamijsredux.firebaseio.com/')


firebaseRef.child('currentNumber').on("value", function(snapshot) {
  const currentNumber = snapshot.val()
  getsFromFB(currentNumber)
})



function getsFromFB(currentNumber){
  const setState = {type: 'SET_STATE', value: currentNumber}
  store.dispatch(setState)
  console.log(store.getState().toJS())
}

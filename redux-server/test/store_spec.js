import {Map, fromJS} from 'immutable'
import {expect} from 'chai'
import makeStore from '../src/store'


describe('Store', () => {



  it('Dispatch Store Initial State', ()=>{
    const store = makeStore();
    const action = {type: 'SET_STATE', currentNumber: 0}
    store.dispatch(action)
    expect(store.getState()).to.equal(Map({currentNumber:0}))

  })


})

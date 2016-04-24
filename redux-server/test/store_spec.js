import {Map, fromJS} from 'immutable'
import {expect} from 'chai'
import makeStore from '../src/store'


describe('Store', () => {



  it('Dispatch Store Initial State', ()=>{
    const store = makeStore();
    const action = {type: 'SET_STATE', value: 0}
    store.dispatch(action)
    expect(store.getState()).to.equal(Map({value:0}))

  })


})

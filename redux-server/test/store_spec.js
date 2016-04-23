import {Map, fromJS} from 'immutable'
import {expect} from 'chai'
import makeStore from '../src/store'


describe('Store', () => {

  let store
  beforeEach(() => {store = makeStore()})

  it('Confirm store functions', ()=>{
    expect(store.getState()).to.equal(Map({}))
  })

  it('Dispatch Action to Store', ()=>{
    const action = {type: 'SET_STATE', value:7}
    store.dispatch(action)
    expect(store.getState()).to.equal(fromJS({value:7}))
  })



})

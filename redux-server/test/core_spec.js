import {expect} from 'chai'
import {Map, fromJS} from 'immutable';
import {setState, increment, decrement} from '../src/core'


describe('Business Logic', () => {

  let state
  beforeEach(() => {
    state = Map({value:0})
  })


  it('Set Initial State', ()=>{
    const value = 32
    const nextState = setState(state, value)
    expect(nextState).to.equal(fromJS({value:32}))

  })

  it('Increment', ()=>{
    const nextState = increment(state)
    expect(nextState).to.equal(fromJS({value:1}))
  })
  it('Decrement', ()=>{
    const nextState = decrement(state)
    expect(nextState).to.equal(fromJS({value:-1}))
  })

})

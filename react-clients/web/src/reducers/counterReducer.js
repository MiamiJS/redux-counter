import {Map} from 'immutable'

export default function(state = Map({}), action) {
  switch (action.type) {
    case 'MERGE_STATE':
      return state.merge(action.serverState)
    case 'INCREMENT':
      return state.updateIn(['value'], value=>value+1)
    case 'DECREMENT':
      return state.updateIn(['value'], value=>value-1)

  }
  return state
}

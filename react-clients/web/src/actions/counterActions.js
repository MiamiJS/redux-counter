export const mergeState= (serverState) => ({
  local: true,
  type: 'MERGE_STATE', serverState
})

export const onIncrement= () => ({
  local: false,
  type: 'INCREMENT'
})
export const onDecrement= () => ({
  local: false,
  type: 'DECREMENT'
})

//currying
export default store => next => action => {
  console.log('in middleware', action)
  return next(action)
}

// export default function(store) {
//   return function(next) {
//     return function(action) {
//
//     }
//   }
// }

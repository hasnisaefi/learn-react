const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 12,
};

//reducer
const rootReducer = (state = initialState, action) => {
  
//   if (action.type === 'ADD_AGE') {
//     return {
//       ...state,
//       age: state.age + 1,
//     };
//   }
//   if (action.type === 'CHANGE_VALUE') {
//     return {
//       ...state,
//       value: state.value + action.newValue,
//     };
//   }
//   return state;
// };

switch (action.type) {
  case 'ADD_AGE':
    return {
      ...state,
      age: state.age + 1,
    };
  case 'CHANGE_VALUE':
    return {
      ...state,
      value: state.value + action.newValue,
    };
  default:
    return state;
}
}
//store
const store = createStore(rootReducer);
console.log( store.getState());

//subscription
// store.subscribe(() => {
//   console.log(store.getState());
// });

//dispaching action
store.dispatch({ type: 'ADD_AGE' });
store.dispatch({ type: 'CHANGE_VALUE', newValue: 16 });
console.log( store.getState());

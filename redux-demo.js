// we will need to create a store, Reducer, components
const redux = require('redux');
const counterReducer = (state = { counter: 0 }, action) => { // reducer function, that has a function (old state, dispatched ) -> returns Output: new State Object that replaced the old state
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }  
    if (action.type === 'decrement'){
        return {
            counter: state.counter - 1
        }
    }
    return state; // otherwise return unchanged state
}; 

const store = redux.createStore(counterReducer);

console.log("initial state ",store.getState())

const counterSubscriber = () => {
    latestState = store.getState(); // gives the latest state (after it was changed)
    console.log("After being updated ", latestState);
};

// both counterSubscriber and counterReducer will be executed by redux
store.subscribe(counterSubscriber);  // this makes store to run 

store.dispatch({ type: 'increment' }) // this make counterSubscriber to run 
store.dispatch({ type: 'decrement'})
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
const loggerMiddleware = createLogger()

const reducer = (prevState={text:'Hello'},action)=>{


    switch(action.type) {
      case 'BIRTHDAY':
        return Object.assign({},action);
      case 'WEDDINGDAY':
        return Object.assign({},action);
      default:
        return prevState;
    }
}

const store = createStore(reducer, applyMiddleware(thunk, loggerMiddleware));
store.subscribe(()=>{console.log('redux action called')})
    export default store;







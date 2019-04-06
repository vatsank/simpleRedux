import { createStore } from 'redux';

export const showBirthday= (text)=>{

  return {
    type:'BIRTHDAY',
    text
  }
}

export const showWeddingDay= (text)=>{

  return {
    type:'WEDDINGDAY',
    text
  }
}

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

const store = createStore(reducer);
store.subscribe(()=>{console.log('redux action called')})
    export default store;
import { createStore } from 'redux';

const reducer = (state={text:'Hello'},action)=>{


    switch(action.type) {
      case 'BIRTHDAY':
        return {
          text: 'Happy Birthday'
        };
      case 'WEDDINGDAY':
        return {
          text: 'Happy Anniversary'
        };
      default:
        return state;
    }
}

const store = createStore(reducer);

    export default store;
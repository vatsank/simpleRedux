import React from 'react';
import { connect } from 'react-redux';
import HelloWorld from '../HelloWorld.react';
import {showBirthday,showWeddingDay} from '../Store';
import store from '../Store';
class Greeting extends React.Component {


birthday = ()=>{

    store.dispatch(showBirthday('Happy Birthday'));
}

weddingday =() =>{
    store.dispatch(showWeddingDay('Happy Anniversarry'));

}

    render() {
        return (
            <div>
            <h1>{this.props.text}</h1>
            <div>
             <HelloWorld action={this.weddingday} label={"Wedding Day"}/>
             </div>
             <div>
             <HelloWorld action={this.birthday} label={"Birth Day"}/>
              </div>
             </div>
        );
    }
}

const mapStateToProps =(state)=> {
    return {
      text: state.text
    };
  }
  
export default connect(mapStateToProps)(Greeting);




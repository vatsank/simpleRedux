import React from 'react';
import { connect } from 'react-redux';
import HelloWorld from '../HelloWorld.react';

class Greeting extends React.Component {


birthday = ()=>{
    this.props.dispatch({type:'BIRTHDAY'});
}

weddingday =() =>{
    this.props.dispatch({type:'WEDDINGDAY'});

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




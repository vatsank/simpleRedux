import React from 'react';


const HelloWorld = (props) => {

    return (
        <div >
 <button onClick={props.action}>{props.label}</button>

        </div>
    );

}

export default HelloWorld;
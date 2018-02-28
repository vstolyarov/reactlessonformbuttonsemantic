import React, { Component } from 'react';

const Singletodo = props => {
    return (
        <li>{props.todo}<button onClick={props.delete}>X</button></li>
    );


}
export default Singletodo;
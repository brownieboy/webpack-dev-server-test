import React from "react";

export default class HelloClass extends React.Component {
    constructor(props) {
    	console.log("HelloClass constructor called");
        console.log("constructor called");
        super(props);
    }

 render() {
 	return(<span>Hello world 17</span>);
 }
}

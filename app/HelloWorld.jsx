import React from "react";

export default class HelloClass extends React.Component {
   constructor(props) {
    	console.log("HelloClass constructor called");
    	super(props);
   }
   render() {
 	   return(<span>Hello world</span>);
   }
}

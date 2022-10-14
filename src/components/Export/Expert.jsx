import React from "react";
import "./Expert.css";

function Expert(props) {

  return (
    <div>
      {props.blocks.map((el) => {
        let math= '#' + Math.random().toString(16).substring(2, 8)
        console.log(math);
      const math1 ={
        backgroundColor: math
      } 
        return (
          <div className="block1" style={math1} key={el.id} >{el.id}</div>
        )
        
        // if (el.block === "yellow") {
        //   return <div className='block1' key={el.id}>{el.id}</div>;
        // } else if (el.block === "green") {
        //   return <div className="block2" key={el.id}>{el.id}</div>;
        // } else if (el.block === "color") {
        //   return <div className="block3" key={el.id}>{el.id}</div>;
        // } else {
        //   return <div className="block4" key={el.id}>{el.block}</div>
        // }
      })}
    
    </div>
  );
}

export default Expert;

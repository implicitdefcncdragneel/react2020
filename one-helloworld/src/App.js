import React from "react";
import "./style.css";

import Button from "./Button"


const  Appy=() => { 
     
    return (
       <div>
           <h1 style={{textAlign:"center"}}>Hello World !!</h1>
           <Button title="App Store"/>
           <Button title="Play Store"/>
           <Button />           
           
           {/* <button className="button">App Store</button>
           <button className="button">Play Store</button> */}
        </div>


    );

};

export default Appy;
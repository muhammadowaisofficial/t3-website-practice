import React from "react";

const Button = (props) => { 
  
  return ( 
    
    <button className="inline-flex font-medium items-center justify-center focus:outline-none transition duration-200 active:scale-90  border border-transparent bg-gray-900 text-white hover:enabled:bg-gray-1000 focus:ring-gray-900/30 text-gray-0 ml-5 rounded-lg px-6 py-2 text-sm capitalize md:text-base 4xl:px-8 4xl:py-2.5" onClick={props.onClick}>{props.text}</button> 
    
  ); 
  
} 


export default Button;

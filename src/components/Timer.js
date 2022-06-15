import React from 'react';
import  './Timer.css'

function Timer() {
    const d = new  Date() ;
    const hour = d.getHours() ;
    let text ;

    if (hour > 1 && hour < 11){
        text = "Hello Good morning"  
    } else if ( hour > 11 && hour < 19) {
        text = " Hello Good Afternoon"
    } else {
        text = "Good Night"
    }
    
  return (
    <div>
        <h2>Task-1</h2>
        <h1 className='greet'>{text}</h1>
         
    </div>
  )
}

export default Timer
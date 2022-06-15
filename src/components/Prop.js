import React from 'react';
import './Prop.css';

function Prop( props) {
    console.log(props)
  return (
    <section>
        
        
        <div className="box">
            <h2 className="headings">{props.heading}</h2>
            <p className="detail">{props.detail}</p>
            <img className='nximg' src={props.imgsrc} alt="mypic" />
        </div>

    </section>
  )
}

export default Prop
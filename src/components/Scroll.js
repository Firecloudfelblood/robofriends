import React from 'react'
import './Scroll.css'



const Scroll = (props) =>{
    return (

            <div className='mainrobotcontainer'>
                {props.children}
            </div>
    )
}

export default  Scroll;

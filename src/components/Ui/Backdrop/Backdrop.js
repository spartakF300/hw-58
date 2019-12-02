import React from 'react';
import './Backdrop.css'
const Backdrop = (props) => {
    return (
        <div className={'Backdrop'} style={{display: props.show ? 'block' : 'none'}} >

        </div>
    );
};

export default Backdrop;
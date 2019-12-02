import React, {Fragment} from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";

const Modal = props => {
    return (
        <Fragment>
        <div className={'Modal'} style={{display: props.show ? 'block' : 'none'}}>
            <h2>{props.title}</h2>
            {props.children}
            <button className={'btn-modal'} onClick={props.closed}>X</button>
        </div>
        <Backdrop show={props.show} />
        </Fragment>
    );
};

export default Modal;
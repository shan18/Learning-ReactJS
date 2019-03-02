import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <div className="ui standard modal visible active">Modal</div>
    </div>,
    document.querySelector('#modal') // places the modal inside the container with id 'modal' in index.html
  );
};

export default Modal;

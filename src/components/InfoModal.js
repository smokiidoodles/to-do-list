//This component allows for information to pop up on the screen.
import React from 'react';

const InfoModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        position: 'relative',
        width: '300px',
        textAlign: 'center'
      }}>
        <h2>Info</h2>
        <p>This is a to-do list application. You can add, edit, delete tasks and mark them as completed.</p>
        <button onClick={onClose} style={{ marginTop: '20px' }}>Close</button>
      </div>
    </div>
  );
};

export default InfoModal;

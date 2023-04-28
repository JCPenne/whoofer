import React from 'react';
import FocusLock from 'react-focus-lock';



import styles from './Modal.module.css';


export function Modal({ modalOpen, setTimerStatus, children }) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        modalOpen(false);
        setTimerStatus('active');
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen, setTimerStatus]);

  return (
    <FocusLock returnFocus={true}>
      <div className={styles.wrapper}>
        <div
          className={styles.backdrop}
          onClick={() => {
            modalOpen(false);
            setTimerStatus('active');
          }}
        />
        {children}
      </div>
    </FocusLock>
  );
}

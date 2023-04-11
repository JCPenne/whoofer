import React from 'react';

import styles from './Header.module.css';

import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import ProgressBar from '../ProgressBar/ProgressBar';
import Timer from '../Timer/Timer';

export function Header({
  modalOpen,
  setModalOpen,
  timerStatus,
  setTimerStatus,
  percentComplete,
  handleTimeExpired,
}) {
  function handleClick() {
    setModalOpen(!modalOpen);
    setTimerStatus('paused');
  }

  return (
    <>
      {modalOpen && (
        <Modal
          modalOpen={setModalOpen}
          setTimerStatus={setTimerStatus}
        />
      )}
      <header className={styles.header}>
        <Button
          type='homepage-link'
          onClick={handleClick}
        >
          Whoofer
        </Button>
        <ProgressBar percentComplete={percentComplete} />
        <Timer timerStatus={timerStatus} handleTimeExpired={handleTimeExpired} />
      </header>
    </>
  );
}

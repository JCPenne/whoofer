import React from 'react';
import FocusLock from 'react-focus-lock';

import { josefinSans } from '@/pages/_app';

import styles from './Modal.module.css';

import { Button } from '../Button/Button';
import Link from 'next/link';

export function Modal({ modalOpen, setTimerStatus }) {
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
        <div className={styles.dialog}>
          <p className={`${styles.text} ${josefinSans.className}`}>
            Are you sure you would like to exit the quiz?
          </p>
          <div className={styles.buttonGroup}>
            <Button
              type='modal'
              onClick={() => {
                modalOpen(false);
                setTimerStatus('active');
              }}
              className={styles.closeBtn}
            >
              Cancel
            </Button>
            <Link href='/'>
              <Button
                type='modal'
                className={styles.closeBtn}
              >
                Exit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </FocusLock>
  );
}

import React from 'react';
import FocusLock from 'react-focus-lock';

import styles from './Modal.module.css';

import Button from '../Button/Button';
import Link from 'next/link';

export function Modal({ modalOpen }) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        modalOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <FocusLock returnFocus={true}>
      <div className={styles.wrapper}>
        <div
          className={styles.backdrop}
          onClick={() => modalOpen(false)}
        />
        <div className={styles.dialog}>
          <p className={styles.text}>
            Are you sure you would like to exit the quiz?
          </p>
          <div className={styles.buttonGroup}>
            <Button
              type='modal'
              onClick={() => modalOpen(false)}
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

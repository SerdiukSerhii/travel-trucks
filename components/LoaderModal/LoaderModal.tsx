'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './LoaderModal.module.css';

const LoaderModal = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.loaderContainer}>
        <div className={css.spinner} />

        <p className={css.title}>Loading trucks...</p>

        <p className={css.text}>
          Please wait while we fetch the best
          <br />
          travel trucks for you
        </p>
      </div>
    </div>,

    document.body
  );
};

export default LoaderModal;

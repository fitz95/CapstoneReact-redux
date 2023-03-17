import React from 'react';
import PropTypes from 'prop-types';
import styles from 'src/css/modal.module.css';
import { RiCloseLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { coinsFilter } from 'src/redux/coins/coinsSlice';

function Modal({ setIsOpen }) {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget.id;
    dispatch(coinsFilter(target));
    setIsOpen(false);
  };
  const handleClickClose = ({ code }) => {
    if (code === 'Escape') {
      setIsOpen(false);
    }
  };
  return (
    <>
      <div
        className={styles.darkBG}
        onClick={() => setIsOpen(false)}
        onKeyDown={handleClickClose}
        role="button"
        aria-label="closeModal"
        tabIndex={0}
      />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Dialog</h5>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setIsOpen(false)}
            type="button"
          >
            <RiCloseLine style={{ marginBottom: '-3px' }} />
          </button>
          <div className={styles.modalContent}>
            <button
              id="10"
              type="button"
              className={styles.cancelBtn}
              onClick={handleClick}
            >
              &gt; 1$
            </button>
            <button
              id="10"
              type="button"
              className={styles.cancelBtn}
              onClick={handleClick}
            >
              &gt; 10$
            </button>
            <button
              id="100"
              type="button"
              className={styles.cancelBtn}
              onClick={handleClick}
            >
              &gt; 100$
            </button>
            <button
              id="1000"
              type="button"
              className={styles.cancelBtn}
              onClick={handleClick}
            >
              &gt; 1000$
            </button>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                type="button"
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
export default Modal;

import React from "react";
import reactDom from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = ({ onClose }) => {
  return <div onClick={onClose} className={styles.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

export default function Modal({ children, onClose }) {
  return (
    <React.Fragment>
      <>
        {reactDom.createPortal(<Backdrop onClose={onClose} />, portalElement)}
        {reactDom.createPortal(
          <ModalOverlay>{children}</ModalOverlay>,
          portalElement
        )}
      </>
    </React.Fragment>
  );
}

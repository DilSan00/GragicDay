import React, { ReactNode } from 'react';
import styles from './Modal.module.css';
import { observer } from 'mobx-react';
import addGraficStore from '../../store/AddGraficStore';


interface ModalProps {
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const openModal = addGraficStore.onModal ? styles.open : styles.close;

  return (
    <div className={`${styles.modal} ${openModal}`}>
      { children }
    </div>
  );
}


export default observer(Modal);
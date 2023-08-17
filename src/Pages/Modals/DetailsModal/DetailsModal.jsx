import React from 'react';
import styles from './DetailsModal.module.scss';

// redux
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setDetailsModalState } from '../../../redux/slices/detailSlice';

const DetailsModal = () => {
  const {detailsModalState, title, topText, bottomText, points} = useSelector((state) => state.detailSlice)
  const dispatch = useDispatch();

  return (
    <div className={styles.detailsModal} style={detailsModalState ? {display: 'block'} : {display: 'none'}} onClick={() => dispatch(setDetailsModalState({detailsModalState: false}))}>
      <div className={styles.detailsModalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.detailsModalTitleBlock}>
          <div className={styles.detailsModalTitle}>{title}</div>
          <div className={styles.detailsModalDart} onClick={() => dispatch(setDetailsModalState({detailsModalState: false}))}>&times;</div>
        </div>
        <div className={styles.detailsModalTextBlock}>
          <div className={styles.detailsModalText}>{topText}</div>
        </div>

        <div className={styles.detailsModalPointsBlock}>
          {points.map((obj) => 
            <div style={{margin: '5px'}}>{obj}</div>
          )}
        </div>

        <div className={styles.detailsModalTextBlock}>
          <div className={styles.detailsModalText} style={{marginTop: '10px'}}>{bottomText}</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(DetailsModal);
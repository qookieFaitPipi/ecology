import React from 'react';
import styles from './Tools.module.scss';

// redux
import { useDispatch } from 'react-redux';
import { setDetailsModalState } from '../../../Redux/slices/detailSlice';

const Tools = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.tools}>
      <div className={styles.toolsTitle} id='scrollTools'>Виды работ</div>
      <div className={styles.toolsContent}>
        <div className={styles.toolsItem}>
          <div className={styles.toolsItemTitle}>Предпроектная документация</div>
          <div className={styles.toolsItemDescription}>Компания выполняет предварительную оценку воздействия на окружающую среду, разрабатывает рекомендации по перечню мероприятий по охране окружающей среды на предпроектных стадиях обоснования намечаемой хозяйственной деятельности</div>
          <div className={styles.toolsItemInputBlock} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 1}))}>
            <div className={styles.toolsItemInput}>Подробнее</div>
          </div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsItemTitle}>Инженерные изыскания</div>
          <div className={styles.toolsItemDescription}>Силами специалистов компании с привлечением специализированных аккредитованных лабораторий выполняются различные виды инженерных изысканий</div>
          <div className={styles.toolsItemInputBlock} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 2}))}>
            <div className={styles.toolsItemInput}>Подробнее</div>
          </div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsItemTitle}>Проектные работы</div>
          <div className={styles.toolsItemDescription}>Основным направлением проектной деятельности компании является решение задач в области охраны окружающей среды</div>
          <div className={styles.toolsItemInputBlock} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 3}))}>
            <div className={styles.toolsItemInput}>Подробнее</div>
          </div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsItemTitle}>Проекты рекультивации земель</div>
          <div className={styles.toolsItemDescription}>Одним из видов работ компании в области охраны окружающей среды является выполнение комплекса проектно-изыскательских работ в рамках обоснования хозяйственной деятельности по ликвидации объектов накопленного вреда окружающей среде (свалки коммунальных отходов, промышленных отходов и пр.)</div>
          <div className={styles.toolsItemInputBlock} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 4}))}>
            <div className={styles.toolsItemInput}>Подробнее</div>
          </div>
        </div>
        <div className={styles.toolsItem}>
          <div className={styles.toolsItemTitle}>Экспертизы и согласования</div>
          <div className={styles.toolsItemDescription}>Компания оказывает услуги по выполнению функций Заказчика в части сопровождения проектной документации</div>
          <div className={styles.toolsItemInputBlock} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 5}))}>
            <div className={styles.toolsItemInput}>Подробнее</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Tools);
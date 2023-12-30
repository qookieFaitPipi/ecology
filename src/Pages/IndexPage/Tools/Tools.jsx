import React, {useState, useEffect} from 'react';
import styles from './Tools.module.scss';

// redux
import { useDispatch } from 'react-redux';
import { setDetailsModalState } from '../../../Redux/slices/detailSlice';

const Tools = () => {
  const dispatch = useDispatch();
  const [height, setHeight] = useState();

  useEffect(() => {
    let elem = document.querySelectorAll('#toolsItem');

    let res = 0;
    for(let i=0;i<elem.length;i++) {
      if(elem[i].offsetHeight > res) {
        res = elem[i].offsetHeight;
      }
    }

    setHeight(res + 45)
  }, []);

  return (
    <div className={styles.tools}>
      <div className={styles.title} id='scrollTools'>Виды работ</div>
      <div className={styles.container}>
        <div className={styles.item} id='toolsItem' style={{height: height}}>
          <div className={styles.itemTitle}>Предпроектная документация</div>
          <div className={styles.itemDescription}>Компания выполняет предварительную оценку воздействия на окружающую среду, разрабатывает рекомендации по перечню мероприятий по охране окружающей среды на предпроектных стадиях обоснования намечаемой хозяйственной деятельности</div>
          <div className={styles.itemInput} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 1}))}>Подробнее</div>
        </div>
        <div className={styles.item} id='toolsItem' style={{height: height}}>
          <div className={styles.itemTitle}>Инженерные изыскания</div>
          <div className={styles.itemDescription}>Силами специалистов компании с привлечением специализированных аккредитованных лабораторий выполняются различные виды инженерных изысканий</div>
          <div className={styles.itemInput} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 2}))}>Подробнее</div>
        </div>
        <div className={styles.item} id='toolsItem' style={{height: height}}>
          <div className={styles.itemTitle}>Проектные работы</div>
          <div className={styles.itemDescription}>Основным направлением проектной деятельности компании является решение задач в области охраны окружающей среды</div>
          <div className={styles.itemInput} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 3}))}>Подробнее</div>
        </div>
        <div className={styles.item} id='toolsItem' style={{height: height}}>
          <div className={styles.itemTitle}>Проекты рекультивации земель</div>
          <div className={styles.itemDescription}>Одним из видов работ компании в области охраны окружающей среды является выполнение комплекса проектно-изыскательских работ в рамках обоснования хозяйственной деятельности по ликвидации объектов накопленного вреда окружающей среде (свалки коммунальных отходов, промышленных отходов и пр.)</div>
          <div className={styles.itemInput} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 4}))}>Подробнее</div>
        </div>
        <div className={styles.item} id='toolsItem' style={{height: height}}>
          <div className={styles.itemTitle}>Экспертизы и согласования</div>
          <div className={styles.itemDescription}>Компания оказывает услуги по выполнению функций Заказчика в части сопровождения проектной документации</div>
          <div></div>
          <div className={styles.itemInput} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 5}))}>Подробнее</div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Tools);
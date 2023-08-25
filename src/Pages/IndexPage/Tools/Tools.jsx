import React from 'react';
import styles from './Tools.module.scss';

// carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// images
import cr3 from './../../../Assets/images/carousel/cr3.jpg';

// redux
import { useDispatch } from 'react-redux';
import { setDetailsModalState } from '../../../redux/slices/detailSlice';

const Tools = () => {
  const dispatch = useDispatch();
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className={styles.tools}>
      <div className={styles.toolsTitleBlock}>
        <div className={styles.toolsTitle}>Виды работ</div>
      </div>
      <Carousel responsive={responsive} className={styles.toolsContent}>

        <div className={styles.toolsItem} style={{backgroundImage: `url(${cr3})`}}>
          <div className={styles.toolsTitleBlock}>
            <div className={styles.toolTitle}>Предпроектная документация</div>
          </div>
          <div className={styles.toolsTextBlock}>
            <div className={styles.toolsText}>Компания выполняет предварительную оценку воздействия на окружающую среду, разрабатывает рекомендации по перечню мероприятий по охране окружающей среды на предпроектных стадиях обоснования намечаемой хозяйственной деятельности:</div>
          </div>
          <div className={styles.toolsInputBlock}>
            <div className={styles.toolsInput} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 1}))}>Подробнее</div>
          </div>
        </div>

        <div className={styles.toolsItem} style={{backgroundImage: `url(${cr3})`}}>
          <div className={styles.toolsTitleBlock}>
            <div className={styles.toolTitle}>Инженерные изыскания</div>
          </div>
          <div className={styles.toolsTextBlock}>
            <div className={styles.toolsText}>Силами специалистов компании с привлечением специализированных аккредитованных лабораторий выполняются следующие виды инженерных изысканий:</div>
          </div>
          <div className={styles.toolsInputBlock}>
            <div className={styles.toolsInput} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 2}))}>Подробнее</div>
          </div>
        </div>

        <div className={styles.toolsItem} style={{backgroundImage: `url(${cr3})`}}>
          <div className={styles.toolsTitleBlock}>
            <div className={styles.toolTitle}>Проектные работы</div>
          </div>
          <div className={styles.toolsTextBlock}>
            <div className={styles.toolsText}>Основным направлением проектной деятельности компании является решение задач в области охраны окружающей среды, а именно:</div>
          </div>
          <div className={styles.toolsInputBlock}>
            <div className={styles.toolsInput} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 3}))}>Подробнее</div>
          </div>
        </div>

        <div className={styles.toolsItem} style={{backgroundImage: `url(${cr3})`}}>
          <div className={styles.toolsTitleBlock}>
            <div className={styles.toolTitle}>Проекты рекультивации нарушенных земель</div>
          </div>
          <div className={styles.toolsTextBlock}>
            <div className={styles.toolsText}>Одним из видов работ компании в области охраны окружающей среды является выполнение комплекса проектно-изыскательских работ в рамках обоснования хозяйственной деятельности по ликвидации объектов накопленного вреда окружающей среде (свалки коммунальных отходов, промышленных отходов и пр.).</div>
          </div>
          <div className={styles.toolsInputBlock}>
            <div className={styles.toolsInput} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 4}))}>Подробнее</div>
          </div>
        </div>

        <div className={styles.toolsItem} style={{backgroundImage: `url(${cr3})`}}>
          <div className={styles.toolsTitleBlock}>
            <div className={styles.toolTitle}>Экспертизы и согласования</div>
          </div>
          <div className={styles.toolsTextBlock}>
            <div className={styles.toolsText}>Компания оказывает услуги по выполнению функций Заказчика в части сопровождения проектной документации:</div>
          </div>
          <div className={styles.toolsInputBlock}>
            <div className={styles.toolsInput} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 5}))}>Подробнее</div>
          </div>
        </div>

      </Carousel>
    </div>
  )
}

export default React.memo(Tools);
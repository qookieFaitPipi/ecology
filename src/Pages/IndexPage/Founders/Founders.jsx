import React from 'react';
import styles from './Founders.module.scss';

// images
import fd2 from './../../../Assets/images/founders/wr3.jpeg';

// redux
import { useDispatch } from 'react-redux';
import { setDetailsModalState } from '../../../Redux/slices/detailSlice';

const Founders = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.founders}>
      <div className={styles.title}>Руководство</div>
      <div className={styles.container}>
        <div className={styles.imageBlock}>
          <img className={styles.image} src={fd2} alt="founder" />
          <div className={styles.link} onClick={() => dispatch(setDetailsModalState({detailsModalState: true, type: 6}))}>Биография генерального директора АО «ЭСП»</div>
        </div>
        <div className={styles.textBlock}>
          <i className={styles.name}>Уважаемые коллеги!</i>
          <i className={styles.text}>Я рад приветствовать Вас на сайте нашей компании!</i>
          <i className={styles.text}>АО «ЭСП» с 2021 года выполняет проектно-изыскательские работы в области инженерной экологии.</i>
          <i className={styles.text}>Да, мы – молодая компания, но вместе с тем, нашими сотрудниками накоплен многолетний огромный опыт выполнения работ различной сложности и различных направлений хозяйственной деятельности проектируемых объектов, что позволяет нам выполнять работы по объектам транспортной инфраструктуры (автомобильные дороги, мостовые переходы, транспортные развязки), газопроводам, объектам водоснабжения и водоотведения (водоводы, канализационные коллекторы), линейным объектам энергетики (линии электропередачи), объектам по размещению отходов (свалки ТКО, полигоны промышленных и коммунальных отходов), объектам портовой инфраструктуры и пр.</i>
          <i className={styles.text}>Наша компания обладает всем необходимым для выполнения указанных работ: кадровые, материально-технические ресурсы, специализированное программное обеспечение.</i>
          <i className={styles.text}>В своей деятельности мы всегда ориентированы на достижение положительного результата, партнерские взаимовыгодные отношения с заказчиками и подрядными организациями.</i>
          <i className={styles.text}>Мы всегда открыты к сотрудничеству, не боимся сложных проектов и умеем решать поставленные задачи!</i>
          <i className={styles.text}>С уважением, <br />Савченко Андрей Владимирович <br />Генеральный директор АО «ЭСП»</i>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Founders);
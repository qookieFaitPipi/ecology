import React from 'react'

// components
import Header from '../../Universal/Header/Header';
import Logo from './Logo/Logo';
import About from './About/About';
import Tools from './Tools/Tools';
import News from './News/News';
import Founders from './Founders/Founders';
import Footer from '../../Universal/Footer/Footer';

// modals
import DetailsModal from '../Modals/DetailsModal/DetailsModal';

const IndexPage = () => {
  return (
    <section>
      <Header />
      <Logo />
      <About />
      <Tools />
      <News />
      <Founders />
      <Footer />

      // modals
      <DetailsModal />
    </section>
  )
}

export default React.memo(IndexPage);
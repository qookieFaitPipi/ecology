import React from 'react'

// components
import Header from '../../Universal/Header/Header';
import HiddenHeader from '../../Universal/HiddenHeader/HiddenHeader';
import Logo from './Logo/Logo';
import About from './About/About';
import Tools from './Tools/Tools';
import News from './News/News';
import Founders from './Founders/Founders';
import Partners from './Partners/Partners';
import Footer from '../../Universal/Footer/Footer';

// modals
import DetailsModal from '../Modals/DetailsModal/DetailsModal';

const IndexPage = () => {
  return (
    <section>
      <Header />
      <HiddenHeader />
      <Logo />
      <About />
      <Tools />
      <News />
      <Founders />
      <Partners />
      <Footer />

      <DetailsModal />
    </section>
  )
}

export default React.memo(IndexPage);
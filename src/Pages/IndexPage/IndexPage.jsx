import React from 'react'

// pages
import Header from './Header/Header';
import MainSlider from './MainSlider/MainSlider';
import About from './About/About';
import News from './News/News';
import Founders from './Founders/Founders';
import Footer from './Footer/Footer';

const IndexPage = () => {
  return (
    <section>
      <Header />
      <MainSlider />
      <About />
      <News />
      <Founders />
      <Footer />
    </section>
  )
}

export default React.memo(IndexPage);
import React from 'react'

// pages
import Header from './Header/Header';
import TopSlider from './TopSlider/TopSlider';
import About from './About/About';

const IndexPage = () => {
  return (
    <section>
      <Header />
      <TopSlider />
      <About />
    </section>
  )
}

export default React.memo(IndexPage);
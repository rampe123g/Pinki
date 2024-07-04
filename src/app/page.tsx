import Head from 'next/head'
import React from 'react'
import Headerr from './Headerr/page'
import About from './About/page'
import Projects from './Projects/page'
import Graybox from './Graybox/page'
import Services from './Services/page'
import Footer from './Footer/page'
import Pricing from './Pricing/page'
import Skills from './Skills/page'

function page() {
  return (
    <>
      <Headerr />
      <About />
      <Projects />
      {/* <Graybox /> */}
      <Skills />
      <Services />
      <Pricing />
      <Footer />
    </>
  )
}

export default page

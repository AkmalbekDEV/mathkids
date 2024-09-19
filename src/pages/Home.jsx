import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Courses from '../components/Courses'
import FullAbout from '../components/FullAbout'
import Teachers from '../components/Teachers'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
      <Hero />
      <Courses />
      <FullAbout />
      <Teachers />
      <Contact />
    </div>
  )
}

export default Home
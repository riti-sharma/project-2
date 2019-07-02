import React from 'react'
import PicSection from './PicSection'
import Lyrics from './Lyrics'
import Footer from './Footer';

import { Link, Route } from 'react-router-dom'


export default function Home() {
  return (
    <>
      <Link to="/lyrics"><Lyrics /></Link>
      <PicSection />
      <Footer />
    </>
  )
}
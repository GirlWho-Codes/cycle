import React from 'react'
import NavPage from '../components/NavPage';
import Hero from '../components/Hero'
import Features from '../components/Features'
import FeaturesBanner from '../components/FeaturesBanner';
import Testimonial from '../components/Testimonial';
import TalentBanner from '../components/TalentBanner'
import FAQ from '../components/FAQ'
import FooterBanner from '../components/FooterBanner';
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
      <NavPage/>
      <Hero/>
      <Features />
      <FeaturesBanner/>
      <Testimonial/>
      <TalentBanner/>
      <FAQ/>
      <FooterBanner/>
      <Footer/>
    </div>
  )
}

export default Home

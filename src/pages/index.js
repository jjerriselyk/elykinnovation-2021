import React from 'react'

import Layout from '../components/layout'
import HeroSection from '../components/hero-section'
import ThreeCards from '../components/three-cards'
import { Container } from '../components/styled/global'

import vars from '../vars'
import heroSrc from '../../content/assets/hero.jpg'

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection image={heroSrc} />
      <Container>
        <ThreeCards bgColor={vars.colorRed} topOffset />
      </Container>
    </Layout>
  )
}

export default IndexPage

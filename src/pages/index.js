import * as React from 'react'
import Seo from '../components/seo'
import Home from '../components/home/home'

import './index.less'

const IndexPage = () => {
  return <Home />
}

export default IndexPage

export const Head = () => <Seo />

import * as React from 'react'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { Avatar, Badge } from 'antd'

import './index.less'

const IndexPage = () => {
  return (
    <div className="home">
      <div className="home-line1">
        <div className="home-line1-left">
          <Badge count={32}>
            <Avatar src={`xiang.jpg`} className="home-avatar" />
          </Badge>
        </div>
      </div>
      <div>nijiaying</div>
      <div>
        <StaticImage src="../images/star.png" alt="test" />
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <Seo />

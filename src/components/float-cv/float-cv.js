import * as React from 'react'
import './float-cv.less'
import { StaticImage } from 'gatsby-plugin-image'
import { QRCode, Popover } from 'antd'

const FloatCV = () => {
  return (
    <Popover
      placement="leftBottom"
      className="float-cv display-only-mobile"
      overlayInnerStyle={{
        padding: 0,
      }}
      content={
        <QRCode
          value="https://github.com/MagicienDeCode/images/blob/master/cv/xiang_en_2024.pdf"
          bordered={false}
        />
      }
    >
      <StaticImage
        alt="cv"
        className="float-cv-img"
        src={'../../images/qrcode.png'}
      />
      <p className="float-cv-p">CV</p>
    </Popover>
  )
}
export default FloatCV

import * as React from 'react'
import './backtop.less'
import { StaticImage } from 'gatsby-plugin-image'
import { Button } from 'antd'

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

const BackTop = () => {
  return (
    <Button
      className="back-top"
      type="link"
      onClick={() => topFunction()}
      id="my-bt-div"
    >
      <StaticImage
        alt="cv"
        className="back-top-img"
        src={'../../images/backtop.png'}
      />
    </Button>
  )
}
export default BackTop

import * as React from 'react'
import './index.less'
import './global.less'

const IndexLayout = ({ children }) => {
  return (
    <div className="layout-body">
      <div className="layout-header"></div>

      <div className="layout-children">{children}</div>
      <div className="layout-footer"></div>
    </div>
  )
}

export default IndexLayout

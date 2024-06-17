import './navigation-bar.less'
import { Breadcrumb } from 'antd'
import { Link } from 'gatsby'
import React from 'react'
import { HomeOutlined } from '@ant-design/icons'
import MenuItem from './menu-item'

export default function NavigationBar({ paths }) {
  const pathArray = paths.split('/')

  const buildName = (pathArray, index) => {
    let result = ''
    for (let i = 0; i <= index; i++) {
      result += '/' + pathArray[i]
    }
    return result
  }

  return (
    <div className="navigation-bar-main">
      <Breadcrumb separator=">">
        <Breadcrumb.Item>
          <Link to="/">
            <HomeOutlined />
            <span className="margin-l10">Home</span>
          </Link>
        </Breadcrumb.Item>
        {pathArray.length === 1 ? (
          <Breadcrumb.Item overlay={<MenuItem />}>
            <Link key={pathArray[0]} to={'/' + pathArray[0]}>
              {pathArray[0]}
            </Link>
          </Breadcrumb.Item>
        ) : (
          pathArray.map((path, index) =>
            index === pathArray.length - 1 ? (
              ''
            ) : index === 0 ? (
              <Breadcrumb.Item key={path} overlay={<MenuItem />}>
                <Link to={buildName(pathArray, index)}>{path}</Link>
              </Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item key={path}>
                <Link to={buildName(pathArray, index)}>{path}</Link>
              </Breadcrumb.Item>
            )
          )
        )}
        {/*
        <Breadcrumb.Item>
          <span className="navigation-bar-last-title">
            {lastTitle.length > 17
              ? lastTitle.substring(0, 17) + '...'
              : lastTitle}
          </span>
        </Breadcrumb.Item>
        */}
      </Breadcrumb>
    </div>
  )
}

import './menu-item.less'
import { Menu } from 'antd'
import { Link } from 'gatsby'
import React from 'react'
import { Categorys } from './category'

export default function MenuItem() {
  return (
    <Menu>
      {Categorys.map((category, index) => (
        <Menu.Item key={index}>
          <Link to={'/' + category.path}>
            <img
              className="menu-item-img"
              src={category.imgPath}
              alt={category.label}
            />
            <span>{category.label}</span>
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  )
}

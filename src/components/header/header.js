import * as React from 'react'
import './header.less'
import { Menu, Row, Col } from 'antd'
import {
  AppstoreAddOutlined,
  FileDoneOutlined,
  FolderOpenOutlined,
  ContactsOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Link } from 'gatsby'

function getItem(label, key, icon, children) {
  return {
    key,
    children,
    label,
  }
}
const items = [
  getItem(
    <span className="menu-titles ant-menu-title-content">Resume</span>,
    '1',
    <FileDoneOutlined style={{ fontSize: '1.3em' }} />
  ),
  getItem(
    <span className="menu-titles ant-menu-title-content">Projects ↓</span>,
    'sub1',
    <AppstoreAddOutlined style={{ fontSize: '1.3em' }} />,
    [
      getItem('Option 3', '3'),
      getItem('Option 4', '4'),
      getItem('Submenu', 'sub1-2', null, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
      ]),
    ]
  ),
  getItem(
    <span className="menu-titles ant-menu-title-content">Articles ↓</span>,
    'sub2',
    <FolderOpenOutlined style={{ fontSize: '1.3em' }} />,
    [
      getItem('Option 7', '7'),
      getItem('Option 8', '8'),
      getItem('Option 9', '9'),
      getItem('Option 10', '10'),
    ]
  ),
  getItem(
    <Link to="/" className="decoration-none">
      <span className="menu-titles ant-menu-title-content">Contact</span>
    </Link>,
    'link',
    <ContactsOutlined style={{ fontSize: '1.3em' }} />
  ),
]

const MyHeader = () => {
  return (
    <Row className="header" wrap={false}>
      <Col className="header-logo-div">
        <Link to="/">
          <img alt="logo" src={`logo.png`} className="header-logo" />
        </Link>
      </Col>
      <Col className="header-menu-div">
        <Menu
          mode="horizontal"
          className="header-menu"
          selectable={false}
          items={items}
          overflowedIndicator={
            <UnorderedListOutlined
              style={{ fontSize: '1.5em', color: '#1677ff' }}
            />
          }
          triggerSubMenuAction={'hover'}
        />
      </Col>
    </Row>
  )
}
export default MyHeader

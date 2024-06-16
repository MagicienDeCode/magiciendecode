import * as React from 'react'
import './header.less'
import { Menu, Row, Col, QRCode, Popover } from 'antd'
import {
  AppstoreAddOutlined,
  FileDoneOutlined,
  FolderOpenOutlined,
  ContactsOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

function getItem(label, key, icon, children) {
  return {
    key,
    children,
    label,
  }
}
const items = [
  getItem(
    <Link to="/resume" className="decoration-none">
      <span className="menu-titles ant-menu-title-content">Resume</span>
    </Link>,
    '1',
    <FileDoneOutlined style={{ fontSize: '1.3em' }} />
  ),
  getItem(
    <Link to="/projects" className="decoration-none">
      <span className="menu-titles ant-menu-title-content">Projects</span>
    </Link>,
    '2',
    <AppstoreAddOutlined style={{ fontSize: '1.3em' }} />
  ),
  getItem(
    <span className="menu-titles ant-menu-title-content">Articles ↓</span>,
    'sub2',
    <FolderOpenOutlined style={{ fontSize: '1.3em' }} />,
    [
      getItem('Book', '7'),
      getItem('Chinese', '8'),
      getItem('Java', '9'),
      getItem('Kotlin', '10'),
      getItem('Japanese', '11'),
      getItem('English', '12'),
    ]
  ),
  getItem(
    <Popover
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
      <StaticImage alt="cv" className="cv-img" src="../../images/qrcode.png" />
      <span />
    </Popover>,
    'link',
    <ContactsOutlined style={{ fontSize: '1.3em' }} />
  ),
]

const MyHeader = () => {
  return (
    <Row className="header" wrap={false}>
      <Col className="header-logo-div">
        <Link to="/">
          <StaticImage
            alt="logo"
            src="../../images/logo.png"
            className="header-logo"
          />
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

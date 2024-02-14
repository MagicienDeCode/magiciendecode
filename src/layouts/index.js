import * as React from 'react'
import './index.less'
import './global.less'
import MyFooter from '../components/footer/footer'

import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

const App = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'blue',
        }}
      ></Header>
      <Content className="index-content">
        <div>{children}</div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: 'black',
        }}
      >
        <MyFooter />
      </Footer>
    </Layout>
  )
}
export default App

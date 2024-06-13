import * as React from 'react'
import './index.less'
import './global.less'
import MyFooter from '../components/footer/footer'
import MyHeader from '../components/header/header'
import { Helmet } from 'react-helmet'
import STAR from '../images/star.png'
import { Layout } from 'antd'

const { Header, Content, Footer } = Layout

const App = ({ children }) => {
  return (
    <div>
      <Helmet
        title="MagicienDeCode"
        meta={[
          { name: 'description', content: 'magiciendecode' },
          {
            name: 'keywords',
            content: 'magiciendecode, gatsby, antd, javascript, less',
          },
        ]}
      >
        <link rel="icon" href={STAR} />
      </Helmet>

      <Layout className="app-layout bg-linear">
        <Header
          className="bg-linear layout-header"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            backgroundColor: '#ffffff',
          }}
        >
          <div className="index-header">
            <MyHeader />
          </div>
        </Header>
        <Content className="index-content">
          <div>{children}</div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            backgroundColor: 'black',
            marginTop: '20px',
          }}
        >
          <MyFooter />
        </Footer>
      </Layout>
    </div>
  )
}
export default App

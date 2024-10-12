import { Layout } from 'antd'
import React from 'react'

const {Footer}=Layout
const FooterComponent = () => {
  return (
    <div> <Footer style={{ textAlign: 'center' }}>
    Ant Design ©{new Date().getFullYear()} Created by Ant UED
  </Footer></div>
  )
}

export default FooterComponent
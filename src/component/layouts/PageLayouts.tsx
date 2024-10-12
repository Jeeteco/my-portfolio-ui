import React, { FC } from 'react'



import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AppHeader from '../header/Header';
import FooterComponent from '../footer/Footer';
import { Content } from 'antd/es/layout/layout';

interface PageLayoutsProps {
  children: React.ReactNode;
}

const PageLayouts: FC<PageLayoutsProps> = ({ children }) => {
  return (
    <div>
      <Layout>

        <AppHeader />
        <Content style={{ padding: '0 48px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
           
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>About</Breadcrumb.Item>
            <Breadcrumb.Item>Contact</Breadcrumb.Item>
            <Breadcrumb.Item>Login</Breadcrumb.Item> 
            <Breadcrumb.Item>Project</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            {children}
          </div>
        </Content>
        <FooterComponent />
    </Layout>
    </div>
  )
}

export default PageLayouts
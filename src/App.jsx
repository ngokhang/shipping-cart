import React from 'react';
import { Col, Layout, Menu, Row } from 'antd';
import './App.scss';
import { Header, Content } from 'antd/es/layout/layout';
import HeaderLayout from './components/HeaderLayout';
import BodyLayout from './components/BodyLayout';

function App() {
  return (
    <Layout style={{ padding: '0', backgroundColor: 'white' }}>
      <Header style={{ backgroundColor: 'white' }}>
        <HeaderLayout />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <BodyLayout />
      </Content>
    </Layout>
  );
}

export default App;

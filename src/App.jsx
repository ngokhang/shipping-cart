import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import './App.scss';
import './assets/styles/index.scss';
import MyHeader from './components/MyHeader';
import Homepage from './pages/Homepage';
import FooterLayout from './Layouts/Footer';

function App() {
  return (
    <Layout>
      <MyHeader />
      <Content style={{ backgroundColor: 'white !important' }}>
        <Homepage></Homepage>
      </Content>
      <FooterLayout />
    </Layout>
  );
}

export default App;

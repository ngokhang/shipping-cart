import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import './App.scss';
import Profile from './pages/Profile';
import Logout from './pages/Authentication/components/Logout';


function App() {
  return (
    <Layout style={{ padding: '0', backgroundColor: 'white' }}>
      <Content style={{ padding: '0 50px' }} className="contentLayout">
        <Logout />
        <Profile />
      </Content>
    </Layout>
  );
}

export default App;

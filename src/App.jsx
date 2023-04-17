import { Layout } from 'antd';
import React from 'react';
import MyHeader from './components/MyHeader';
import SearchResult from './pages/SearchResult';
import './assets/styles/index.scss';
import RegisterPage from './pages/Authentication/Register';
import { Content } from 'antd/es/layout/layout';
import Login from './pages/Authentication/Login';

function App() {
  return (
    <Layout>
      <MyHeader />
      <Content>
        <SearchResult />
      </Content>
    </Layout>
  );
}

export default App;

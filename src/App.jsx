import { Layout } from 'antd';
import React from 'react';
import MyHeader from './components/MyHeader';
import SearchResult from './pages/SearchResult';
import './assets/styles/index.scss';

function App() {
  return (
    <Layout>
      <MyHeader />
    </Layout>
  );
}

export default App;

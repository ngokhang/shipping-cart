import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import './App.scss';
import HeaderLayout from './Layouts/Header';
import Profile from './pages/Profile';
import FilledCart from './components/HeaderCart/components/FilledCart';
import EmptyCart from './components/HeaderCart/components/EmptyCart';
import HeaderCart from './components/HeaderCart';

function App() {
  return (
    <Layout>
      <HeaderLayout/>
   
      
    </Layout>
  );
}

export default App;

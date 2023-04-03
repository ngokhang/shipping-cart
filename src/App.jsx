import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import React from 'react';
import './App.scss';
import Profile from './pages/Profile';
import Logout from './pages/Authentication/components/Logout';
import RegisterPage from './RegisterAccount/RegisterAccount';

function App() {
  return (
    <RegisterPage />
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPassowordLost from './LoginPassowordLost';
import LoginPassowordReset from './LoginPassowordReset';

const Login = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="perdeu" element={<LoginPassowordLost />} />
        <Route path="resetar" element={<LoginPassowordReset />} />
      </Routes>
    </>
  );
};

export default Login;

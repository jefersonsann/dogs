import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPassowordLost from './LoginPassowordLost';
import LoginPassowordReset from './LoginPassowordReset';
import { UserContext } from '../../UserContext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/" />;
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="reset" element={<LoginPassowordLost />} />
        <Route path="resetar" element={<LoginPassowordReset />} />
      </Routes>
    </>
  );
};

export default Login;

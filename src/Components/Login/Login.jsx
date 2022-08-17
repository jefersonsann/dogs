import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPassowordLost from './LoginPassowordLost';
import LoginPassowordReset from './LoginPassowordReset';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/" />;
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="lost" element={<LoginPassowordLost />} />
        <Route path="reset" element={<LoginPassowordReset />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Login;

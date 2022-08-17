import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Home from './Page/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import LoginCreate from './Components/Login/LoginCreate';
import User from './Components/Account/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './Components/Photo/Photo';
import UserProfile from './Components/Account/UserProfile';
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="create" element={<LoginCreate />} />
              <Route path="account/*" element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
              } />
              <Route path="photo/:id" element={<Photo />} />
              <Route path="profile/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
};

export default App;

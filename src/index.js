import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/globals.scss';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import SignIn from './pages/SignIn/SignIn';
import UserProfile from './pages/User/UserProfile';
import { Provider, useSelector } from 'react-redux';
import store from './app/store';
import Error from './pages/Error/Error';

const PrivateRoute = ({ element: Element }) => {
  const token = useSelector((state) => state.auth.token);
  return token ? <Element /> : <Navigate to="/signin" />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user/profile" element={<PrivateRoute element={UserProfile} />} /> 
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  </React.StrictMode>
);

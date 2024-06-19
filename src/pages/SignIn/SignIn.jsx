import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAsync, setToken } from '../../features/auth/authSlice';
import { fetchUserProfile } from '../../features/user/userApi';
import style from './signin.module.scss';
import { FaUserCircle } from "react-icons/fa";
import Wrapper from '../../components/Wrapper/Wrapper';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);
  const token = useSelector((state) => state.auth.token);
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAsync({ email, password }));
  };

  useEffect(() => {
    const handleAuthChange = () => {
      if (authStatus === 'succeeded' || token) {
        dispatch(fetchUserProfile());
        navigate('/user/profile');
      }
    };

    handleAuthChange();

    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      dispatch(setToken(storedToken));
    }
  }, [authStatus, token, dispatch, navigate]);

  return (
    <Wrapper>
      <section className={style.signInContent}>
        <FaUserCircle className={style.signInIcon} />
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className={style.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={style.inputRemember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className={style.signInButton}>
            Sign In
          </button>
          {authStatus === 'loading' && <p>Loading...</p>}
          {authStatus === 'failed' && <p>{error}</p>}
        </form>
      </section>
    </Wrapper>
  );
};

export default SignIn;


// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { loginAsync, setToken } from '../../features/auth/authSlice';
// import { fetchUserProfile } from '../../features/user/userApi';
// import style from './signin.module.scss';
// import { FaUserCircle } from "react-icons/fa";
// import Wrapper from '../../components/Wrapper/Wrapper';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const authStatus = useSelector((state) => state.auth.status);
//   const token = useSelector((state) => state.auth.token);
//   const error = useSelector((state) => state.auth.error);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginAsync({ email, password }));
//   };

//   useEffect(() => {
//     const handleAuthChange = () => {
//       if (authStatus === 'succeeded' || token) {
//         dispatch(fetchUserProfile());
//         navigate('/user/profile');
//       }
//     };
    
//     handleAuthChange();

//     const storedToken = localStorage.getItem('token');
//     if (storedToken) {
//       dispatch(setToken(storedToken));
//     }
//   }, [authStatus, token, dispatch, navigate]);

//   return (
//     <Wrapper>
//       <section className={style.signInContent}>
//         <FaUserCircle className={style.signInIcon} />
//         <h1>Sign In</h1>
//         <form onSubmit={handleSubmit}>
//           <div className={style.inputWrapper}>
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className={style.inputWrapper}>
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <div className={style.inputRemember}>
//             <input type="checkbox" id="remember-me" />
//             <label htmlFor="remember-me">Remember me</label>
//           </div>
//           <button type="submit" className={style.signInButton}>
//             Sign In
//           </button>
//           {authStatus === 'loading' && <p>Loading...</p>}
//           {authStatus === 'failed' && <p>{error}</p>}
//         </form>
//       </section>
//     </Wrapper>
//   );
// };

// export default SignIn;

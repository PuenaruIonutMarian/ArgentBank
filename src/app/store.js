import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/user/userSlice';

/**
 * Configure et crée le store Redux pour l'application.
 * @typedef {Object} RootState
 * @property {Object} auth - L'état d'authentification géré par authReducer.
 * @property {Object} user - L'état de l'utilisateur géré par userReducer.
 */

/**
 * Le store Redux configuré avec les reducers combinés.
 * @type {import('@reduxjs/toolkit').EnhancedStore<RootState>}
 */
const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
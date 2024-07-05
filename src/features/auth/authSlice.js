import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from './authApi';

/**
 * Créer une thunk asynchrone pour la connexion.
 * @function loginAsync
 * @param {Object} param0 - Les informations d'identification de l'utilisateur.
 * @param {string} param0.email - L'email de l'utilisateur.
 * @param {string} param0.password - Le mot de passe de l'utilisateur.
 * @param {Object} param1 - Les outils de Redux Toolkit.
 * @param {Function} param1.rejectWithValue - Fonction pour rejeter avec une valeur.
 * @returns {Promise<string>} Le token d'authentification si la connexion réussit.
 * @throws {Error} Si une erreur se produit lors de la connexion.
 */
export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await login({ email, password });
      return response.body.token;
    } catch (error) {
      if (error.message.includes('Password is invalid')) {
        return rejectWithValue('Mot de passe incorrect');
      } else if (error.message.includes('User not found')) {
        return rejectWithValue("L'utilisateur n'existe pas");
      } else {
        return rejectWithValue('Une erreur inconnue est survenue');
      }
    }
  }
);

const authSlice = createSlice({
  /**
   * Nom du slice.
   * @type {string}
   */
  name: 'auth',

  /**
   * État initial.
   * @type {Object}
   * @property {string|null} token - Le token d'authentification.
   * @property {string} status - Le statut de la requête.
   * @property {string|null} error - Le message d'erreur.
   */
  initialState: {
    token: localStorage.getItem('token') || null,
    status: 'idle',
    error: null,
  },

  /**
   * Réducteurs synchrones.
   */
  reducers: {
    /**
     * Gérer la déconnexion.
     * @param {Object} state - L'état actuel.
     */
    logout(state) {
      state.token = null;
      state.status = 'idle';
      localStorage.removeItem('token');
    },

    /**
     * Mettre à jour le token.
     * @param {Object} state - L'état actuel.
     * @param {Object} action - L'action contenant le nouveau token.
     */
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
  },

  /**
   * Réducteurs asynchrones.
   */
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload;
        localStorage.setItem('token', action.payload);
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || action.error.message;
      });
  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from './authApi';

// Créer une thunk asynchrone pour la connexion
export const loginAsync = createAsyncThunk(
  'auth/login', // Nom de la thunk
  async ({ email, password }, { rejectWithValue }) => { // Fonction asynchrone pour gérer la connexion
    try {
      const response = await login({ email, password }); // Appel à l'API de connexion
      return response.body.token; // Retourner le token si succès
    } catch (error) {
      // Gérer les différentes erreurs de connexion
      if (error.message.includes('Password is invalid')) {
        return rejectWithValue('Wrong password'); // Mot de passe incorrect
      } else if (error.message.includes('User not found')) {
        return rejectWithValue('User does not exist'); // Utilisateur non trouvé
      } else {
        return rejectWithValue('An unknown error occurred'); // Erreur inconnue
      }
    }
  }
);

const authSlice = createSlice({
  name: 'auth', // Nom du slice
  initialState: { // État initial
    token: localStorage.getItem('token') || null, // Récupérer le token du localStorage
    status: 'idle', // Statut de la requête
    error: null, // Message d'erreur
  },
  reducers: { // Réducteurs synchrones
    logout(state) { // Gérer la déconnexion
      state.token = null; // Supprimer le token
      state.status = 'idle'; // Réinitialiser le statut
      localStorage.removeItem('token'); // Supprimer le token du localStorage
    },
    //ce reducteur permet de mettre à jour le token dans le localStorage et dans l'état ( state)
    setToken(state, action) { // Mettre à jour le token
      state.token = action.payload; // Définir le token à la valeur de l'action
      localStorage.setItem('token', action.payload); // Enregistrer le token dans le localStorage
    },
  },
  extraReducers: (builder) => { // Réducteurs asynchrones
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading'; // Définir le statut à "loading"
        state.error = null; // Réinitialiser le message d'erreur
      })
      .addCase(loginAsync.fulfilled, (state, action) => {//>>> practique c'est ce qui permet de mettre à jour le token
        state.status = 'succeeded'; // Définir le statut à "succeeded"
        state.token = action.payload; // Mettre à jour le token
        localStorage.setItem('token', action.payload); // Enregistrer le token dans le localStorage
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed'; // Définir le statut à "failed"
        state.error = action.payload || action.error.message; // Définir le message d'erreur
      });
  },
});

export const { logout, setToken } = authSlice.actions; // Exporter les actions
export default authSlice.reducer; // Exporter le réducteur
import { createSlice } from '@reduxjs/toolkit';
import { fetchUserProfile, updateUserProfile } from './userApi';


const userSlice = createSlice({
  name: 'user', // Nom du slice
  initialState: { // État initial
    data: null, // Données de l'utilisateur
    status: 'idle', // Statut de la requête
    error: null, // Message d'erreur
    isEditing: false, // Indicateur d'édition
  },
  reducers: { // Réducteurs synchrones
    setIsEditing(state, action) { // Mettre à jour l'indicateur d'édition
      state.isEditing = action.payload; // Définir isEditing à la valeur de l'action
    },
    setStatus(state, status) { // Mettre à jour le statut
      state.status = status; // Définir le statut à la valeur passée
    },
    setError(state, error) { // Mettre à jour le message d'erreur
      state.error = error; // Définir l'erreur à la valeur passée
    },
    setData(state, data) { // Mettre à jour les données de l'utilisateur
      state.data = data; // Définir les données à la valeur passée
    },
  },
  extraReducers: (builder) => { // Réducteurs asynchrones
    const handlePending = (state) => { // Gérer l'état de la requête en attente
      state.status = 'loading'; // Définir le statut à "loading"
    };
    const handleFulfilled = (state, action, isUpdate = false) => { // Gérer l'état de la requête réussie
      state.status = 'succeeded'; // Définir le statut à "succeeded"
      state.data = isUpdate ? { ...state.data, ...action.payload.body } : action.payload.body; // Mettre à jour les données
    };
    const handleRejected = (state, action) => { // Gérer l'état de la requête échouée
      state.status = 'failed'; // Définir le statut à "failed"
      state.error = action.error.message; // Définir le message d'erreur
    };

    builder
      .addCase(fetchUserProfile.pending, handlePending) // Gérer l'état pending de fetchUserProfile
      .addCase(fetchUserProfile.fulfilled, (state, action) => handleFulfilled(state, action)) // Gérer l'état fulfilled de fetchUserProfile
      .addCase(fetchUserProfile.rejected, handleRejected) // Gérer l'état rejected de fetchUserProfile
      .addCase(updateUserProfile.pending, handlePending) // Gérer l'état pending de updateUserProfile
      .addCase(updateUserProfile.fulfilled, (state, action) => handleFulfilled(state, action, true)) // Gérer l'état fulfilled de updateUserProfile
      .addCase(updateUserProfile.rejected, handleRejected); // Gérer l'état rejected de updateUserProfile
  },
});


export const { setIsEditing, setStatus, setError, setData } = userSlice.actions;

export default userSlice.reducer;

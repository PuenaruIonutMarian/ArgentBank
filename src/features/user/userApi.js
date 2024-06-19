import axiosInstance from '../../services/axiosInstance/axiosInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';


// Cette fonction asynchrone est utilisée pour récupérer le profil de l'utilisateur depuis le serveur.
// Elle envoie une requête POST à l'endpoint '/user/profile' avec un token d'authentification dans les headers.
// Si la requête réussit, elle renvoie les données du profil de l'utilisateur.
// Si la requête échoue, elle lance une erreur.
export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async (_, { getState }) => {
  const state = getState();
  const token = state.auth.token;
  try {
    const response = await axiosInstance.post('/user/profile', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
});


// Cette fonction asynchrone est utilisée pour mettre à jour le profil de l'utilisateur sur le serveur.
// Elle envoie une requête PUT à l'endpoint '/user/profile' avec les nouvelles données de profil et un token d'authentification dans les headers.
// Si la requête réussit, elle renvoie les données mises à jour du profil de l'utilisateur.
// Si la requête échoue, elle lance une erreur.
export const updateUserProfile = createAsyncThunk('user/updateUserProfile', async ({ firstName, lastName, token }) => {
  try {
    const response = await axiosInstance.put('/user/profile', { firstName, lastName }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
});


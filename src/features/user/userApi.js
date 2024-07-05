import axiosInstance from '../../services/axiosInstance/axiosInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Cette fonction asynchrone est utilisée pour récupérer le profil de l'utilisateur depuis le serveur.
 * Elle envoie une requête POST à l'endpoint '/user/profile' avec un token d'authentification dans les headers.
 * Si la requête réussit, elle renvoie les données du profil de l'utilisateur.
 * Si la requête échoue, elle lance une erreur.
 * @function fetchUserProfile
 * @param {Function} _ - Argument placeholder non utilisé.
 * @param {Function} getState - Fonction pour obtenir l'état actuel du store Redux.
 * @returns {Promise<Object>} Les données du profil de l'utilisateur.
 * @throws {Error} Si une erreur se produit lors de la récupération du profil de l'utilisateur.
 */
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
    console.error('Erreur lors de la récupération du profil utilisateur :', error);
    throw error;
  }
});

/**
 * Cette fonction asynchrone est utilisée pour mettre à jour le profil de l'utilisateur sur le serveur.
 * Elle envoie une requête PUT à l'endpoint '/user/profile' avec les nouvelles données de profil et un token d'authentification dans les headers.
 * Si la requête réussit, elle renvoie les données mises à jour du profil de l'utilisateur.
 * Si la requête échoue, elle lance une erreur.
 * @function updateUserProfile
 * @param {Object} payload - Les données à mettre à jour.
 * @param {string} payload.firstName - Le prénom de l'utilisateur.
 * @param {string} payload.lastName - Le nom de famille de l'utilisateur.
 * @param {string} payload.token - Le jeton d'authentification de l'utilisateur.
 * @returns {Promise<Object>} Les données mises à jour du profil de l'utilisateur.
 * @throws {Error} Si une erreur se produit lors de la mise à jour du profil utilisateur.
 */
export const updateUserProfile = createAsyncThunk('user/updateUserProfile', async ({ firstName, lastName, token }) => {
  try {
    const response = await axiosInstance.put('/user/profile', { firstName, lastName }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil utilisateur :', error);
    throw error;
  }
});

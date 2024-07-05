import { createSlice } from '@reduxjs/toolkit';
import { fetchUserProfile, updateUserProfile } from './userApi';

/**
 * Slice utilisateur pour gérer l'état de l'utilisateur.
 */
const userSlice = createSlice({
  /**
   * Nom du slice.
   * @type {string}
   */
  name: 'user',

  /**
   * État initial.
   * @type {Object}
   * @property {Object|null} data - Données de l'utilisateur.
   * @property {string} status - Statut de la requête.
   * @property {string|null} error - Message d'erreur.
   * @property {boolean} isEditing - Indicateur d'édition.
   */
  initialState: {
    data: null,
    status: 'idle',
    error: null,
    isEditing: false,
  },

  /**
   * Réducteurs synchrones.
   */
  reducers: {
    /**
     * Mettre à jour l'indicateur d'édition.
     * @param {Object} state - État actuel.
     * @param {Object} action - Action contenant la nouvelle valeur.
     */
    setIsEditing(state, action) {
      state.isEditing = action.payload;
    },

    /**
     * Mettre à jour le statut.
     * @param {Object} state - État actuel.
     * @param {Object} status - Nouveau statut.
     */
    setStatus(state, status) {
      state.status = status;
    },

    /**
     * Mettre à jour le message d'erreur.
     * @param {Object} state - État actuel.
     * @param {Object} error - Nouveau message d'erreur.
     */
    setError(state, error) {
      state.error = error;
    },

    /**
     * Mettre à jour les données de l'utilisateur.
     * @param {Object} state - État actuel.
     * @param {Object} data - Nouvelles données de l'utilisateur.
     */
    setData(state, data) {
      state.data = data;
    },
  },

  /**
   * Réducteurs asynchrones.
   */
  extraReducers: (builder) => {
    /**
     * Gérer l'état de la requête en attente.
     * @param {Object} state - État actuel.
     */
    const handlePending = (state) => {
      state.status = 'loading';
    };

    /**
     * Gérer l'état de la requête réussie.
     * @param {Object} state - État actuel.
     * @param {Object} action - Action contenant les nouvelles données.
     * @param {boolean} [isUpdate=false] - Indicateur si c'est une mise à jour.
     */
    const handleFulfilled = (state, action, isUpdate = false) => {
      state.status = 'succeeded';
      state.data = isUpdate ? { ...state.data, ...action.payload.body } : action.payload.body;
    };

    /**
     * Gérer l'état de la requête échouée.
     * @param {Object} state - État actuel.
     * @param {Object} action - Action contenant le message d'erreur.
     */
    const handleRejected = (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    };

    builder
      .addCase(fetchUserProfile.pending, handlePending)
      .addCase(fetchUserProfile.fulfilled, (state, action) => handleFulfilled(state, action))
      .addCase(fetchUserProfile.rejected, handleRejected)
      .addCase(updateUserProfile.pending, handlePending)
      .addCase(updateUserProfile.fulfilled, (state, action) => handleFulfilled(state, action, true))
      .addCase(updateUserProfile.rejected, handleRejected);
  },
});

export const { setIsEditing, setStatus, setError, setData } = userSlice.actions;

export default userSlice.reducer;

import axiosInstance from '../../services/axiosInstance/axiosInstance'; 
import { createAsyncThunk } from '@reduxjs/toolkit';

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

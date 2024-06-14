import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axiosInstance/axiosInstance';

export const fetchUserProfile = createAsyncThunk('user/fetchUserProfile', async (_, { getState }) => {
  const state = getState();
  const token = state.auth.token;
  const response = await axiosInstance.get('/user/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

export const updateUserProfile = createAsyncThunk('user/updateUserProfile', async (userData, { getState }) => {
  const state = getState();
  const token = state.auth.token;
  const response = await axiosInstance.put('/user/profile', userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axiosInstance/axiosInstance';

export const login = createAsyncThunk('auth/login', async ({ email, password }) => {
  const response = await axiosInstance.post('/user/login', { email, password });
  return response.data;
});

export const signup = createAsyncThunk('auth/signup', async ({ email, password, firstName, lastName }) => {
  const response = await axiosInstance.post('/user/signup', { email, password, firstName, lastName });
  return response.data;
});

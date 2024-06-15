import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from './authApi'; 

export const loginAsync = createAsyncThunk('auth/login', async ({ email, password }) => {
  const response = await login({ email, password });
  return response.body.token; 
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    status: 'idle',
    error: null,
    user: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.token = action.payload; 
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from './authApi';

export const loginAsync = createAsyncThunk('auth/login', async ({ email, password }) => {
  const response = await login({ email, password });
  return response.body.token;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token') || null,
    status: 'idle',
    error: null,
    user: null,
  },
  reducers: {
    logout(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem('token');
    },
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
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
        localStorage.setItem('token', action.payload);
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;




// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { login } from './authApi'; 

// export const loginAsync = createAsyncThunk('auth/login', async ({ email, password }) => {
//   const response = await login({ email, password });
//   return response.body.token; 
// });

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     token: localStorage.getItem('token') || null,
//     status: 'idle',
//     error: null,
//     user: null,
//   },
//   reducers: {
//     logout(state) {
//       state.token = null;
//       state.user = null;
//       localStorage.removeItem('token');
//     },
//     setToken(state, action) {
//       state.token = action.payload;
//       localStorage.setItem('token', action.payload);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginAsync.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(loginAsync.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.token = action.payload; 
//         //pour stocker le token
//         localStorage.setItem('token', action.payload); 
//       })
//       .addCase(loginAsync.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { logout, setToken } = authSlice.actions;
// export default authSlice.reducer;

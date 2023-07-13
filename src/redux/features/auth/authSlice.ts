import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../thunks/auth';

const initialState = {
  loading: false,
  userInfo: null, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // register
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload.data.usuarioData;
        state.userToken = payload.data.token;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      // login
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userInfo = payload.data.usuarioData;
        state.userToken = payload.data.token;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.userInfo = null;
        state.error = payload;
      });
  },
});

export const { logout } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;

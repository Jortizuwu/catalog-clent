import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../thunks/auth';

interface User{
  id: string;
  active: boolean;
  name: string;
  lastName: string;
  email: string;
  password: string;
  photo: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;  
}

interface AuthState {
  loading: boolean;
  userInfo: User | null;
  userToken: string | null;
  error: Error | null;
  success: boolean;
}

const initialState: AuthState = {
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

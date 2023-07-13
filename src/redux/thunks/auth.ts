import { createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit';
import authServices from '../../shared/services/auth';

interface RegisterData {
  name: string;
  // Define los tipos de los datos requeridos para el registro
}

interface LoginData {
  name: string;
  // Define los tipos de los datos requeridos para el inicio de sesión
}

interface User {
  name: string;
  // Define los tipos de los datos del usuario
}

type RegisterThunk = AsyncThunk<User, RegisterData, { rejectValue: string }>;
type LoginThunk = AsyncThunk<User, LoginData, { rejectValue: string }>;

export const registerUser: RegisterThunk = createAsyncThunk(
  'register',
  async (data: RegisterData, { rejectWithValue }) => {
    try {
      const user = await authServices.register(data);
      return user;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser: LoginThunk = createAsyncThunk(
  'auth/login',
  async (data: LoginData, { rejectWithValue }) => {
    try {
      const user = await authServices.login(data);
      return user;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

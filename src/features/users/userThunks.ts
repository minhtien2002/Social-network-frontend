import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/userTypes';

// Fetch all users
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('/api/users');
      if (!response.ok) throw new Error('Failed to fetch users');
      return (await response.json()) as User[];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Fetch user info by accountname
export const fetchUserInfo = createAsyncThunk(
  'users/fetchUserInfo',
  async (name: string, thunkAPI) => {
    try {
      const response = await fetch(`/api/users/userinfo/${name}`);
      if (!response.ok) throw new Error('Failed to fetch user info');
      return (await response.json()) as User;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
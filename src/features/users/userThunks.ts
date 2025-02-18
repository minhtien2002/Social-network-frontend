import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '../../types/userTypes';
import { apiUserRequest } from '../../apiClient';

const User_URL = '/User';
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
  async (data: string, thunkAPI) => {
    const token = localStorage.getItem('token');
    try {
     if(token=== null){
        return await apiUserRequest(User_URL + '/userinfowithoutauthor/' + data, {
          method: 'GET',
         
        });
      }else{
     return await apiUserRequest(User_URL + '/userinfo/' + data, {
        method: 'GET',
        headers: {
          "Authorization":`Bearer ${token}`,
          "Content-Type": "application/json",
          'credentials': "include",

        },
      });
      

    }
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
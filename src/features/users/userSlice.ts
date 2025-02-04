import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserState } from '../../types/userTypes';
import { fetchUsers, fetchUserInfo } from './userThunks';

const initialState: UserState = {
    users: [],
    userInfo: null,
    loading: false,
    error: null,
  };
  const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      resetUserInfo: (state) => {
        state.userInfo = null;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
          state.loading = false;
          state.users = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        })
        .addCase(fetchUserInfo.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchUserInfo.fulfilled, (state, action: PayloadAction<User>) => {
          state.loading = false;
          state.userInfo = action.payload;
        })
        .addCase(fetchUserInfo.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    },
  });
  
  export const { resetUserInfo } = userSlice.actions;
  export default userSlice.reducer;
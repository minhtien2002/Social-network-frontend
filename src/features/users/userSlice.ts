import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { User, UserFollowProfile, UserState } from '../../types/userTypes';
import { fetchUsers, fetchUserInfo,fetchUserFollow } from './userThunks';

const initialState: UserState = {
    users: [],
    userInfo: null,
    dataInfo:null, 
    userFollow:[],
    loading: false,
    error: null,
  };
  const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
      resetUserInfo: (state) => {
        state.userInfo = null;
        state.dataInfo=null;
        state.userFollow=[];

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
        .addCase(fetchUserInfo.fulfilled, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.dataInfo = action.payload;
          

        })
        .addCase(fetchUserInfo.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
        builder.addCase(fetchUserFollow.pending, (state) => {
          state.loading = true;
          state.error = null;
      });
        builder.addCase(fetchUserFollow.fulfilled, (state, action: PayloadAction<UserFollowProfile[]>) => {
          state.loading = false;
          state.userFollow = action.payload;
      });
        builder.addCase(fetchUserFollow.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
      }
      );

    },
    
  });
  
  export const { resetUserInfo } = userSlice.actions;
  export default userSlice.reducer;
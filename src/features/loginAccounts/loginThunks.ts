import { createAsyncThunk } from '@reduxjs/toolkit';
import { Account, register } from '../../types/loginTypes';
import { apiUserRequest } from '../../apiClient';


export const acount_URL = '/Account';



export const fetchRegisterAccount = createAsyncThunk(
    'login/fetchRegisterAccount',
    async (register: register, thunkAPI) => {
        try {
            return await apiUserRequest(acount_URL+'/register', {
                method: 'POST',
                body: JSON.stringify(register),
            });
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchLoginAccount = createAsyncThunk(
    'login/fetchLoginAccount',
    async (account: Account, thunkAPI) => {
        try {
            return await apiUserRequest(acount_URL+'/login', {
                method: 'POST',
                body: JSON.stringify(account),
            });
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUserRequest } from "../../apiClient";

const Follow_URL = '/Follow';


export const fetchRequestFollow = createAsyncThunk(
    'follows/fetchRequestFollow',
    async (AccountNameFollowee: string, thunkAPI) => {
        const token = localStorage.getItem('token');
        try {
        return await apiUserRequest(Follow_URL + '/' + AccountNameFollowee, {
            method: 'POST',
            headers: {
            "Authorization":`Bearer ${token}`,
            "Content-Type": "application/json",
            'credentials': "include",
            },
        });
        } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const fetchReponseFollowPrivate = createAsyncThunk(
    'follows/fetchReponseFollowPrivate',
    async (AccountNameFollower: string, thunkAPI) => {
        const token = localStorage.getItem('token');
        try {
        return await apiUserRequest(Follow_URL + '/' + AccountNameFollower, {
            method: 'PUT',
            headers: {
            "Authorization":`Bearer ${token}`,
            "Content-Type": "application/json",
            'credentials': "include",
            },
        });
        } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const fetchRemoveFollow = createAsyncThunk(
    'follows/fetchRemoveFollow',
    async (AccountNameFollower: string, thunkAPI) => {
        const token = localStorage.getItem('token');
        try {
        return await apiUserRequest(Follow_URL + '/' + AccountNameFollower, {
            method: 'DELETE',
            headers: {
            "Authorization":`Bearer ${token}`,
            "Content-Type": "application/json",
            'credentials': "include",
            },
        });
        } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const fetchRemoveFollowee = createAsyncThunk(
    'follows/fetchRemoveFollowee',
    async (AccountNameFollowee: string, thunkAPI) => {
        const token = localStorage.getItem('token');
        try {
        return await apiUserRequest(Follow_URL + '/DeleteFollowee/' + AccountNameFollowee, {
            method: 'DELETE',
            headers: {
            "Authorization":`Bearer ${token}`,
            "Content-Type": "application/json",
            'credentials': "include",
            },
        });
        } catch (error: any) {
        return thunkAPI.rejectWithValue(error.message);
        }
    }
);
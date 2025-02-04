import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Account, AccountState, register } from '../../types/loginTypes';
import { fetchLoginAccount, fetchRegisterAccount } from './loginThunks';

const initialState: AccountState = {
    account: null,
    loading: false,
    error: null,
    register: null,
    token: null
};
const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        resetAccount: (state) => {
            state.account = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegisterAccount.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRegisterAccount.fulfilled, (state, action: PayloadAction<{token: any}>) => {
                state.loading = false;
                state.token = action.payload.token;
            })
            .addCase(fetchRegisterAccount.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // Add the fetchLoginAccount cases here
            .addCase(fetchLoginAccount.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchLoginAccount.fulfilled, (state, action: PayloadAction<string>) => {
                state.loading = false;
                state.register = action.payload;
            })
            .addCase(fetchLoginAccount.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { resetAccount } = loginSlice.actions;
export default loginSlice.reducer;
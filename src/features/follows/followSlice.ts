import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FollowState } from "../../types/followTypes";
import { fetchRemoveFollow, fetchRemoveFollowee, fetchReponseFollowPrivate, fetchRequestFollow } from "./followThunks";

const initialState: FollowState = {
    checkRequestFollow: false,
    checkReponseFollowPrivate: false,
    checkRemoveFollow: false,
    checkRemoveFollowee: false,
    loading: false,
    error: null
}
const followSlice = createSlice({
    name: 'follows',
    initialState,
    reducers: {
        resetFollow: (state) => {
            state.checkRequestFollow = false;
            state.checkReponseFollowPrivate = false;
            state.checkRemoveFollow = false;
            state.checkRemoveFollowee = false;
        }
    },
    extraReducers: (builder) => {
       builder.addCase(fetchRequestFollow.pending, (state) => {
           state.loading = true;
           state.error = null;
       });
         builder.addCase(fetchRequestFollow.fulfilled, (state, action : PayloadAction<number>) => {
            state.loading = false;
            state.checkRequestFollow = Boolean(action.payload);  
        });
        builder.addCase(fetchRequestFollow.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
        builder.addCase(fetchReponseFollowPrivate.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchReponseFollowPrivate.fulfilled, (state, action: PayloadAction<number>) => {
            state.loading = false;
            state.checkReponseFollowPrivate = Boolean(action.payload);
        });
        builder.addCase(fetchReponseFollowPrivate.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
        builder.addCase(fetchRemoveFollow.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchRemoveFollow.fulfilled, (state, action: PayloadAction<number>) => {
            state.loading = false;
            state.checkRemoveFollow = Boolean(action.payload);
        });
        builder.addCase(fetchRemoveFollow.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
        builder.addCase(fetchRemoveFollowee.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchRemoveFollowee.fulfilled, (state, action: PayloadAction<number>) => {
            state.loading = false;
            state.checkRemoveFollowee = Boolean(action.payload);
        });
        builder.addCase(fetchRemoveFollowee.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
       
    }
})
export const { resetFollow } = followSlice.actions;
export default followSlice.reducer;
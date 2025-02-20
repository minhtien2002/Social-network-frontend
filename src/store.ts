import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/users/userSlice';
import loginReducer from './features/loginAccounts/loginSlice';
import followReducer from './features/follows/followSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    logins: loginReducer,
    follows: followReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
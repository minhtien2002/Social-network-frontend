import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/users/userSlice';
import loginReducer from './features/users/userSlice';

const store = configureStore({
  reducer: {
    users: userReducer,
    logins: loginReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
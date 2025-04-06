import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import abilityScoreReducer from './abilitySlice'
import generalInfoSliceReducer from './generalSlice'
import defenseSliceReducer from './defenseSlice'
import appSliceReducer from './appSlice'
import offenseSliceReducer from './offenseSlice'
import skillSliceReducer from './skillSlice'


export const store = configureStore({
  reducer: {
    abilityScores: abilityScoreReducer,
	generalInfo: generalInfoSliceReducer,
	defense: defenseSliceReducer,
	app: appSliceReducer,
	offense: offenseSliceReducer,
	skills: skillSliceReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
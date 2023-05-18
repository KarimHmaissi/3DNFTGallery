import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"
import nftReducer from "../features/NftDisplay/nftSlice"
import { nftApi } from "../services/NFTService"

export const store = configureStore({
  reducer: {
    nft: nftReducer,
    [nftApi.reducerPath]: nftApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(nftApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

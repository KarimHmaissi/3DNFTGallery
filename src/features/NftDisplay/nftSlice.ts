import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface NFTState {
  history: string[]
}

const initialState: NFTState = {
  history: [],
}

export const nftSlice = createSlice({
  name: "nft",
  initialState,
  reducers: {
    addToHistory: (state, action: PayloadAction<string>) => {
      state.history.push(action.payload)
    },
  },
})

export const { addToHistory } = nftSlice.actions

export const selectHistory = (state: RootState) => state.nft.history

export default nftSlice.reducer

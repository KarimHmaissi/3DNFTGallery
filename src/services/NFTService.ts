import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { NftData } from "./types"
import { alchemyKey } from "../config/env"

export const nftApi = createApi({
  reducerPath: "nftApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://eth-mainnet.g.alchemy.com" }),
  endpoints: (builder) => ({
    getNftsByWalletAddress: builder.query<
      NftData,
      {
        walletAddress?: string
        pageSize?: number
        withMetadata?: boolean
      }
    >({
      query: ({
        walletAddress = "0x154B4045F07B48C3B75D73a3f6C7C11Dfec95b4a",
        pageSize = 100,
        withMetadata = true,
      }) =>
        `nft/v3/${alchemyKey}/getNFTsForOwner?owner=${walletAddress}&withMetadata=${withMetadata}&pageSize=${pageSize}`,
    }),
  }),
})

export const { useGetNftsByWalletAddressQuery } = nftApi

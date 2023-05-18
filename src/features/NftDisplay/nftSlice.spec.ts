import nftReducer, { NFTState, addToHistory } from "./nftSlice"

describe("nft slice", () => {
  const initialState: NFTState = {
    history: [],
  }

  it("should handle initial state", () => {
    expect(nftReducer(undefined, { type: "unknown" })).toEqual({
      history: [],
    })
  })

  it("should handle appending to history", () => {
    const actual = nftReducer(initialState, addToHistory("urlOfImage"))
    expect(actual.history).toEqual(["urlOfImage"])
  })
})

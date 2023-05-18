interface Contract {
  address: string
  name: string
  symbol: string
  totalSupply: null
  tokenType: string
  contractDeployer: string
  deployedBlockNumber: number
  openSeaMetadata: {
    floorPrice: null
    collectionName: string
    safelistRequestStatus: string
    imageUrl: string
    description: string
    externalUrl: string
    twitterUsername: null
    discordUrl: null
    lastIngestedAt: string
  }
  isSpam: boolean
  spamClassifications: string[]
}

interface Image {
  cachedUrl: string
  thumbnailUrl: string
  pngUrl: string
  contentType: string
  size: string
  originalUrl: string
}

interface RawData {
  tokenUri: string
  metadata: Record<string, unknown>
  error: string
}

interface OwnedNft {
  contract: Contract
  tokenId: string
  tokenType: string
  name: null
  description: null
  image: Image
  raw: RawData
  tokenUri: string
  timeLastUpdated: string
  balance: string
}

export interface NftData {
  ownedNfts: OwnedNft[]
  totalCount: number
  blockHash: string
  pageKey: string
}

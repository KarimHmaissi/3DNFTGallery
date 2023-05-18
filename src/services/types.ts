interface Contract {
  address: string
  name: string | null
  symbol: string
  totalSupply: string
  tokenType: string
  contractDeployer: string
  deployedBlockNumber: number
  openSeaMetadata: {
    floorPrice: number
    collectionName: string
    safelistRequestStatus: string
    imageUrl: string
    description: string
    externalUrl: string
    twitterUsername: string
    discordUrl: null
    lastIngestedAt: string
  }
  isSpam: boolean | null
  spamClassifications: string[]
}

interface Image {
  cachedUrl: string
  thumbnailUrl: string
  pngUrl: string
  contentType: string
  size: number
  originalUrl: string
}

interface RawData {
  tokenUri: string
  metadata: Record<string, unknown>
  error: string | null
}

interface OwnedNft {
  contract: Contract
  tokenId: string
  tokenType: string
  name: string | null
  description: string | null
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
  pageKey: string | null
}

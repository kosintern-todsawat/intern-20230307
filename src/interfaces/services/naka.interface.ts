export interface IPosition {
  x: string
  y: string
}

export interface ILandData {
  _id: string
  name: string
  details: string
  image: string
  qrcode_image: string
  NFT_token: string
  land_id: string
  position: IPosition
  type: string
  logo_approved: boolean
  NFT_video: string
  NFT_image: string
  logo_in_map?: any
}

export interface IMaterialData {
  _id: string
  created_at: Date
  seller_id?: any
  item_id: string
  item_amount: number
  price: number
  seller_type: string
  selling_type: string
  type: string
  is_active: boolean
  order_id?: any
  land_data: ILandData
}

export interface IInfo {
  pages: number
  limit: number
  currentCount: number
  totalCount: number
}

export interface IGetMaterialServ {
  status: boolean
  data: IMaterialData[]
  info: IInfo
}

export interface basicInfo {
  storeName: string
  contactNumber: string
  storeStatus: string
  address: string
  storeLogo: string
  bannerImage: string
  storeDescription: string
  shortsInfo: string
}

export interface orderInfo{
  isTakeout: string
  takeoutDiscount: number
  minOrderAmount: number
  deliveryTip: number
}

export interface deliveryInfo{
  minDeliveryTime: number
  maxDeliveryTime: number
  deliveryAreaInfo: string
}

export interface operationInfo{
  openingHours: string
  breakTime: string
  holidayDays: string
  holidayNotice: string
  pauseStartTime: string
  pauseEndTime: string
}

export interface pauseTimeInfo {
  pauseStartTime: string
  pauseEndTime: string
}
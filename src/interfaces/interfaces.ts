export interface ICategory {
  id: number
  allowAttachments: boolean
  allowQuantityVariation: boolean
  description?: string
  hasShipping: boolean
  limitRequest: number
  limitRequestsPerMonth: boolean
  name: string
  validateClient: boolean
  valueVariation: number
  allowValueVariation: boolean
}

export interface IProduct {
  id: number
  categoryId: number
  description: string
  icmsTax: number
  ipiTax: number
  isAvailable: boolean
  isWarehouse: boolean
  minPuchaseQuantity: number
  name: string
  productCategory?: ICategory
}

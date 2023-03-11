import React, { createContext, useState, type SetStateAction, type Dispatch, useEffect } from 'react'
import { type ICategory, type IProduct } from '../interfaces/interfaces'
import api from '../services/api'

interface IGlobalContext {
  productTotal: number
  setProductTotal: Dispatch<SetStateAction<number>>
  categoryTotal: number
  setCategoryTotal: Dispatch<SetStateAction<number>>
  productData: IProduct[]
  setProductData: Dispatch<SetStateAction<never[]>>
  categoryData: ICategory[]
  setCategoryData: Dispatch<SetStateAction<never[]>>
  alertColor: string
  setAlertColor: Dispatch<SetStateAction<string>>
  alertText: string
  setAlertText: Dispatch<SetStateAction<string>>
  alertOpen: boolean
  setAlertOpen: Dispatch<SetStateAction<boolean>>
}

const defaultValues = {
  productTotal: 0,
  setProductTotal: () => {},
  categoryTotal: 0,
  setCategoryTotal: () => {},
  productData: [],
  setProductData: () => {},
  categoryData: [],
  setCategoryData: () => {},
  alertColor: '',
  setAlertColor: () => {},
  alertText: '',
  setAlertText: () => {},
  alertOpen: false,
  setAlertOpen: () => {}
}
export const GlobalConext = createContext<IGlobalContext>(defaultValues)

export const GlobalProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  // total
  const [productTotal, setProductTotal] = useState(0)
  const [categoryTotal, setCategoryTotal] = useState(0)

  // data
  const [productData, setProductData] = useState([])
  const [categoryData, setCategoryData] = useState([])

  // alert
  const [alertColor, setAlertColor] = useState('')
  const [alertText, setAlertText] = useState('')
  const [alertOpen, setAlertOpen] = useState(false)

  useEffect(() => {
    void api.get('/Product')
      .then(({ data }) => {
        setProductData(data)
        setProductTotal(data.length)
      })
    void api.get('/ProductCategory')
      .then(({ data }) => {
        setCategoryData(data)
        setCategoryTotal(data.length)
      })
  }, [])

  return (
    <GlobalConext.Provider value={{
      productTotal,
      categoryTotal,
      productData,
      setProductData,
      setProductTotal,
      categoryData,
      setCategoryData,
      setCategoryTotal,
      alertColor,
      setAlertColor,
      alertText,
      setAlertText,
      alertOpen,
      setAlertOpen
    }}>
      {children}
    </GlobalConext.Provider>
  )
}

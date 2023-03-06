import React, { useContext, useState } from 'react'
import { Button, Table, UncontrolledAlert } from 'reactstrap'
import ModalUpProduct from '../Modals/ModalUpProduct'
import ModalDelProduct from '../Modals/ModalDelProduct'
import { Div } from './style'
import { GlobalConext } from '../../context/globalContext'
import { type IProduct } from '../../interfaces/interfaces'

const TableProduct: React.FC = () => {
  const {
    productData, categoryData,
    alertOpen, alertColor, alertText
  } = useContext(GlobalConext)
  const [isOpenUpProduct, setIsOpenUpProduct] = useState(false)
  const [isOpenDelProduct, setIsOpenDelProduct] = useState(false)
  const [productSelected, setProductSelected] = useState({
    id: 0,
    categoryId: 0,
    description: '',
    icmsTax: 0,
    ipiTax: 0,
    isAvailable: false,
    isWarehouse: false,
    minPuchaseQuantity: 0,
    name: ''
  })

  const openModalUpProduct = (product: IProduct): void => {
    setProductSelected(() => product)
    console.log(product)
    setIsOpenUpProduct(!isOpenUpProduct)
  }

  const openModalDeleteProduct = (product: IProduct): void => {
    setProductSelected(() => product)
    setIsOpenDelProduct(!isOpenDelProduct)
  }

  const closeModalUpProduct = (): void => {
    setIsOpenUpProduct(!isOpenUpProduct)
  }

  const closeModalDeleteProduct = (): void => {
    setIsOpenDelProduct(!isOpenDelProduct)
  }

  return (
    <Div>
      <UncontrolledAlert color={alertColor} isOpen={alertOpen}>
          {alertText}
      </UncontrolledAlert>
      <Table
        hover
        responsive
        size=""
      >
        <thead>
          <tr>
            <th>
              #id
            </th>
            <th>
              Produto
            </th>
            {/* <th>
              Descrição
            </th> */}
            <th>
              Categoria
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { productData.map((product, index) => (
            <tr key={index}>
            <th scope="row">
              {product.id}
            </th>
            <td>
              {product.name}
            </td>
            <td>
              { categoryData.filter((category) => (category.id === product.categoryId)).map((catResult) => catResult.name)}
            </td>
            <td>
              <Button
                color='primary'
                size='sm'
                onClick={ () => { openModalUpProduct(product) }}
              >
                Editar
              </Button>
            </td>
            <td>
              <Button
                color='danger'
                size='sm'
                onClick={ () => { openModalDeleteProduct(product) }}
              >
                Excluir
              </Button>
            </td>
          </tr>
          ))}

        </tbody>
      </Table>
      <ModalUpProduct isOpen={isOpenUpProduct} toggle={closeModalUpProduct} product={productSelected}/>
      <ModalDelProduct isOpen={isOpenDelProduct} toggle={closeModalDeleteProduct} product={productSelected} />
    </Div>
  )
}

export default TableProduct

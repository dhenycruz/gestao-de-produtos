import React, { useContext } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { GlobalConext } from '../../context/globalContext'
import { type IProduct } from '../../interfaces/interfaces'
import api from '../../services/api'

interface Props {
  isOpen: boolean
  toggle: () => void
  product: IProduct
}

const ModalDelProduct: React.FC<Props> = ({ isOpen, toggle, product }) => {
  const { setAlertOpen, setProductData, setProductTotal, setAlertColor, setAlertText } = useContext(GlobalConext)

  const DeleteProduct = (id: number): void => {
    void api.delete(`/Product/${id}`)
      .then((_res) => {
        setAlertColor('success')
        setAlertOpen(true)
        setAlertText('Produto foi deletado com sucesso!')
        toggle()
        void api.get('/Product')
          .then(({ data }) => {
            setProductData(data)
            setProductTotal(data.length)
          })
      })
      .catch((_error) => {
        setAlertColor('danger')
        setAlertOpen(true)
        setAlertText('Ops, algo deu errado.')
        toggle()
      })

    setTimeout(
      () => { setAlertOpen(false) }, 5000
    )
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true}>
      <ModalHeader toggle={toggle}>Deletar Produto</ModalHeader>
      <ModalBody>
        Tem certeza que deseja deletar o produto <b>{product.name}</b>?
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Não
        </Button>{' '}
        <Button color="danger" onClick={() => { DeleteProduct(product.id) }}>
          Sim
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalDelProduct

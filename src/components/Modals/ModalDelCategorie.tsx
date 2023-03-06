import React, { useContext } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { GlobalConext } from '../../context/globalContext'
import { type ICategory } from '../../interfaces/interfaces'
import api from '../../services/api'

interface Props {
  isOpen: boolean
  toggle: () => void
  category: ICategory
}

const ModalDelCategorie: React.FC<Props> = ({ isOpen, toggle, category }) => {
  const { setAlertOpen, setAlertColor, setAlertText } = useContext(GlobalConext)

  const DeleteCategory = (id: number): void => {
    void api.delete(`/ProductsCategory/${id}`)
      .catch((_error) => {
        setAlertColor('danger')
        setAlertOpen(true)
        setAlertText('Ops, algo deu errado.')
      })
      .then((_res) => {
        setAlertColor('success')
        setAlertOpen(true)
        setAlertText('Categoria foi deletada com sucesso!')
      })
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true}>
      <ModalHeader toggle={toggle}>Deletar Produto</ModalHeader>
      <ModalBody>
        Tem certeza que deseja deletar essa categoria {category.name}?
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Não
        </Button>{' '}
        <Button color="danger" onClick={() => { DeleteCategory(category.id) } }>
          Sim
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalDelCategorie

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
  const { setAlertOpen, setAlertColor, setAlertText, setCategoryData, setCategoryTotal } = useContext(GlobalConext)

  const DeleteCategory = (id: number): void => {
    void api.delete(`/ProductCategory/${id}`)
      .then((_res) => {
        setAlertColor('success')
        setAlertOpen(true)
        setAlertText('Categoria foi deletada com sucesso!')
        toggle()

        void api.get('/ProductCategory')
          .then(({ data }) => {
            setCategoryData(data)
            setCategoryTotal(data.length)
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

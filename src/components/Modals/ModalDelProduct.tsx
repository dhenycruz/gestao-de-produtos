import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

interface Props {
  isOpen: boolean
  toggle: () => void
}

const ModalDelProduct: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true}>
      <ModalHeader toggle={toggle}>Deletar Produto</ModalHeader>
      <ModalBody>
        Tem certeza que deseja deletar o produto?
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Não
        </Button>{' '}
        <Button color="danger" onClick={toggle}>
          Sim
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalDelProduct
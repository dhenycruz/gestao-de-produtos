import React from 'react'
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input, Row, Col
} from 'reactstrap'

interface Props {
  isOpen: boolean
  toggle: () => void
}

const ModalAddCategorie: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true}>
      <ModalHeader toggle={toggle}>Adicionar Categoria</ModalHeader>
      <ModalBody>
      <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleEmail">
                  Nome da Categoria
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="nome do produto..."
                  type="email"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleText">
                  Descrição
                </Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup switch>
                <Input type="switch" role="switch" />
                <Label check>Permitir Variação de Quantidade</Label>
              </FormGroup>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <FormGroup switch>
                <Input type="switch" role="switch" />
                <Label check>Permitir Variação de Valor</Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                  <Input
                    id="exampleNumber"
                    name="number"
                    placeholder="Valor da Variação"
                    type="number"
                    min='0'
                  />
                </FormGroup>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Row>
                <Col>
                  <FormGroup switch>
                    <Input type="switch" role="switch"/>
                    <Label check>Frete</Label>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup switch>
                    <Input type="switch" role="switch"/>
                    <Label check>Validar Cliente</Label>
                  </FormGroup>
                </Col>
              </Row>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleNumber">
                  Limite de Solicitações
                </Label>
                <Input
                  id="exampleNumber"
                  name="number"
                  placeholder="Valor do Limite"
                  type="number"
                  min='0'
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>{' '}
        <Button color="primary" onClick={toggle}>
          Adicionar
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalAddCategorie

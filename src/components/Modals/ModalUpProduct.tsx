import React from 'react'
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input, Row, Col
} from 'reactstrap'

interface Props {
  isOpen: boolean
  toggle: () => void
}

const ModalUpProduct: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true}>
      <ModalHeader toggle={toggle}>Editar Produto</ModalHeader>
      <ModalBody>
        <Form>
          <Row>
            <Col>
              <FormGroup>
                <Label for="exampleEmail">
                  Nome do Produto
                </Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="nome do produto..."
                  type="email"
                />
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for="exampleSelect">
                  Categoria
                </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                >
                  <option>
                    1
                  </option>
                  <option>
                    2
                  </option>
                  <option>
                    3
                  </option>
                  <option>
                    4
                  </option>
                  <option>
                    5
                  </option>
                </Input>
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
            <Col md='3'>
              <FormGroup>
                <Label for="exampleNumber">
                  ICMS
                </Label>
                <Input
                  id="exampleNumber"
                  name="number"
                  placeholder="number placeholder"
                  type="number"
                  min='0'
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for="exampleNumber">
                  IPI
                </Label>
                <Input
                  id="exampleNumber"
                  name="number"
                  placeholder="number placeholder"
                  type="number"
                  min='0'
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="exampleNumber">
                Qtd mín. de compra
                </Label>
                <Input
                  id="exampleNumber"
                  name="number"
                  placeholder="number placeholder"
                  type="number"
                  min='0'
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup switch>
                <Input type="switch" role="switch" />
                <Label check>Está disponível</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup switch>
                <Input type="switch" role="switch" />
                <Label check>É Armazém</Label>
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
          Atualizar
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ModalUpProduct

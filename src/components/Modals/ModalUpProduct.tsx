import React, { useContext, useEffect } from 'react'
import {
  Button, Modal, ModalHeader, ModalBody,
  FormGroup, Label, Row, Col, ModalFooter
} from 'reactstrap'
import { GlobalConext } from '../../context/globalContext'
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import { type IProduct } from '../../interfaces/interfaces'

interface Props {
  isOpen: boolean
  toggle: () => void
  product: IProduct
}

const ModalUpProduct: React.FC<Props> = ({ isOpen, toggle, product }) => {
  const { categoryData, setProductData, setProductTotal, setAlertOpen, setAlertColor, setAlertText } = useContext(GlobalConext)

  // react hook form
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    mode: 'onBlur'
  })

  const onSubmitProduct = handleSubmit((data) => {
    void api.put(`/Product/${product.id}`, data)
      .then((_res) => {
        setAlertColor('success')
        setAlertOpen(true)
        setAlertText('Produto foi atualizado com sucesso!')
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
  })

  useEffect(() => {
    reset(product)
  }, [product])

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true}>
      <ModalHeader toggle={toggle}>Editar Produto</ModalHeader>
      <ModalBody>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={onSubmitProduct}>
          <Row>
            <Col>
              <FormGroup>
                <Label for="name">
                  Nome do Produto
                </Label>
                <input
                  className='form-control'
                  {...register('name', {
                    required: true
                  })}
                  aria-invalid={ (errors.name != null) ? 'true' : 'false' }
                  id="name"
                  placeholder="nome do produto..."
                  type="text"
                />
                {errors.name?.type === 'required' && <p className='text-danger'>O campo nome é obrigatório!</p>}
              </FormGroup>
            </Col>
            <Col md='4'>
              <FormGroup>
                <Label for="categoryId">
                  Categoria
                </Label>
                <select
                  id='categoryId'
                  {...register('categoryId')}
                  className='form-select'
                >
                  {categoryData.map((category, index) => (
                    <option
                      key={index}
                      value={category.id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Label for="description">
                  Descrição
                </Label>
                <textarea
                  {...register('description', {
                    required: true
                  })}
                  aria-invalid={ (errors.description != null) ? 'true' : 'false' }
                  className='form-control'
                  id="description"
                />
                {errors.description?.type === 'required' && <p className='text-danger'>O campo descrição é obrigatório!</p>}
              </FormGroup>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md='3'>
              <FormGroup>
                <Label for="icms">
                  ICMS (%)
                </Label>
                <input
                  {...register('icmsTax')}
                  id='icms'
                  className='form-control'
                  placeholder="0%"
                  type="number"
                  min='0'
                  max='100'
                />
              </FormGroup>
            </Col>
            <Col md='3'>
              <FormGroup>
                <Label for="ipi">
                  IPI (%)
                </Label>
                <input
                  {...register('ipiTax')}
                  id="ipi"
                  className='form-control'
                  placeholder="0%"
                  type="number"
                  min='0'
                  max='100'
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="minPuchaseQuantity">
                  Qtd mín. de compra
                </Label>
                <input
                  {...register('minPuchaseQuantity')}
                  className='form-control'
                  id="minPuchaseQuantity"
                  placeholder="number placeholder"
                  type="number"
                  min='0'
                />
              </FormGroup>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <FormGroup switch>
                <input
                  type="checkbox"
                  {...register('isAvailable')}
                  className='form-check-input'
                />
                <Label check>Está disponível</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup switch>
                <input
                  type="checkbox"
                  {...register('isWarehouse')}
                  className='form-check-input'
                />
                <Label check>É Armazém</Label>
              </FormGroup>
            </Col>
          </Row>
          <ModalFooter>
            <Button
              className='float-right'
              color="primary"
              type='submit'
            >
              Salvar
            </Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  )
}

export default ModalUpProduct

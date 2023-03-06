import React, { useContext, useState } from 'react'
import {
  Button, Modal, ModalHeader, ModalBody,
  FormGroup, Label, Input, Row, Col, ModalFooter
} from 'reactstrap'
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import { GlobalConext } from '../../context/globalContext'
import { type ICategory } from '../../interfaces/interfaces'

interface Props {
  isOpen: boolean
  toggle: () => void
  category: ICategory
}

const ModalUpCategorie: React.FC<Props> = ({ isOpen, toggle, category }) => {
  const { setAlertOpen, setAlertColor, setAlertText } = useContext(GlobalConext)
  const [allowQuantityVariation, setAllowQuantityVariation] = useState(false)

  const handleallowQuantityVariation = (): void => {
    setAllowQuantityVariation(!allowQuantityVariation)
  }

  const [allowValueVariation, setAllowValueVariation] = useState(false)

  const handleAllowValueVariation = (): void => {
    setAllowValueVariation(!allowValueVariation)
  }

  const [hasShipping, setHasShipping] = useState(false)

  const handleHasShipping = (): void => {
    setHasShipping(!hasShipping)
  }

  const [validateClient, setValidateClient] = useState(false)

  const handleValidateClient = (): void => {
    setValidateClient(!validateClient)
  }

  const [limitRequestsPerMonth, setLimitRequestsPerMonth] = useState(false)

  const handleLimitRequestsPerMonth = (): void => {
    setLimitRequestsPerMonth(!limitRequestsPerMonth)
  }

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      allowQuantityVariation: category.allowQuantityVariation,
      description: category.description,
      hasShipping: category.hasShipping,
      limitRequest: category.limitRequest,
      limitRequestsPerMonth: category.limitRequestsPerMonth,
      name: category.name,
      validateClient: category.validateClient,
      valueVariation: category.valueVariation,
      allowValueVariation: category.allowValueVariation
    }
  })

  const onSubmitCategory = handleSubmit((data) => {
    data.allowQuantityVariation = allowQuantityVariation
    data.allowValueVariation = allowValueVariation
    data.hasShipping = hasShipping
    data.validateClient = validateClient

    void api.post('/ProductsCategory', data)
      .catch((_error) => {
        setAlertColor('danger')
        setAlertOpen(true)
        setAlertText('Ops, algo deu errado.')
        toggle()
      })
      .then((_res) => {
        setAlertColor('success')
        setAlertOpen(true)
        setAlertText('Categoria foi adicionada com sucesso!')
        toggle()
      })

    setTimeout(
      () => { setAlertOpen(false) }, 3000
    )
  })

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true}>
      <ModalHeader toggle={toggle}>Editar Categoria</ModalHeader>
      <ModalBody>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={onSubmitCategory}>
          <Row>
            <Col>
              <FormGroup>
                <Label for="name">
                  Nome da Categoria
                </Label>
                <input
                  {...register('name', {
                    required: true
                  })}
                  aria-invalid={ (errors.name != null) ? 'true' : 'false' }
                  className='form-control'
                  id="name"
                  type="text"
                />
                {errors.name?.type === 'required' && <p className='text-danger'>O campo nome é obrigatório!</p>}
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
                  {...register('description')}
                  aria-invalid={ (errors.description != null) ? 'true' : 'false' }
                  className='form-control'
                  id="description"
                />
                {errors.description?.type === 'required' && <p className='text-danger'>O campo descrição é obrigatório!</p>}
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup switch>
                <Input type="switch" role="switch" checked={allowQuantityVariation} onChange={handleallowQuantityVariation} />
                <Label check>Permitir Variação de Quantidade</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup switch>
                <Input type="switch" role="switch" checked={hasShipping} onChange={handleHasShipping} />
                <Label check>Frete</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup switch>
                <Input type="switch" role="switch" checked={validateClient} onChange={handleValidateClient} />
                <Label check>Validar Cliente</Label>
              </FormGroup>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <FormGroup switch>
                <Input type="switch" role="switch" checked={allowValueVariation} onChange={handleAllowValueVariation} />
                <Label check>Permitir Variação de Valor</Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="allowValueVariation">
                  Valor da Variação
                </Label>
                <input
                  {...register('allowValueVariation')}
                  id="allowValueVariation"
                  placeholder="Valor da Variação"
                  type="number"
                  min='0'
                  className='form-control'
                  disabled={!allowValueVariation}
                />
              </FormGroup>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <FormGroup switch>
                <Input type="switch" role="switch" checked={limitRequestsPerMonth} onChange={handleLimitRequestsPerMonth} />
                <Label check>Limite de Solicitações/mês</Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="limitRequest">
                  Limite de Validações
                </Label>
                <input
                  {...register('limitRequest')}
                  id="limitRequest"
                  placeholder="Valor do Limite"
                  type="number"
                  min='0'
                  disabled={!limitRequestsPerMonth}
                  className='form-control'
                />
              </FormGroup>
            </Col>
          </Row>
          <ModalFooter>
            <Button
              className='float-right'
              color="primary"
              type='submit'
            >
              Adicionar
            </Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal >
  )
}

export default ModalUpCategorie

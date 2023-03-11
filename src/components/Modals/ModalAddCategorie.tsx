/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect, useContext } from 'react'
import {
  Button, Modal, ModalHeader, ModalBody,
  FormGroup, Label, Row, Col, ModalFooter
} from 'reactstrap'
import { useForm } from 'react-hook-form'
import api from '../../services/api'
import { GlobalConext } from '../../context/globalContext'

interface Props {
  isOpen: boolean
  toggle: () => void
}

const ModalAddCategorie: React.FC<Props> = ({ isOpen, toggle }) => {
  const { setAlertOpen, setAlertColor, setAlertText, setCategoryData, setCategoryTotal } = useContext(GlobalConext)

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm()

  const watchAllowValueVariation = watch('allowValueVariation')
  const watchLimitRequestsPerMonth = watch('limitRequestsPerMonth')

  const onSubmitCategory = handleSubmit((data) => {
    void api.post('/ProductsCategory', data)
      .then((_res) => {
        setAlertColor('success')
        setAlertOpen(true)
        setAlertText('Categoria foi adicionada com sucesso!')
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
      () => { setAlertOpen(false) }, 6000
    )
  })

  useEffect(() => {
    if (!watchAllowValueVariation) setValue('allowValueVariation', 0)
  }, [watchAllowValueVariation])

  useEffect(() => {
    if (!watchLimitRequestsPerMonth) setValue('limitRequest', 0)
  }, [watchLimitRequestsPerMonth])

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered={true}>
      <ModalHeader toggle={toggle}>Adicionar Categoria</ModalHeader>
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
                  placeholder="nome da categoria..."
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
                <input
                  type="checkbox"
                  {...register('allowQuantityVariation')}
                  className="form-check-input"
                />
                <Label check>Permitir Variação de Quantidade</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup switch>
                <input
                  type="checkbox"
                  {...register('hasShipping')}
                  className="form-check-input"
                />
                <Label check>Frete</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup switch>
                <input
                  type="checkbox"
                  {...register('validateClient')}
                  className="form-check-input"
                />
                <Label check>Validar Cliente</Label>
              </FormGroup>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <FormGroup switch>
                <input
                  type="checkbox"
                  {...register('allowValueVariation')}
                  className="form-check-input"
                />
                <Label check>Permitir Variação de Valor</Label>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="allowValueVariation">
                  Valor da Variação
                </Label>
                <input
                  {...register('valueVariation')}
                  id="valueVariation"
                  placeholder="Valor da Variação"
                  type="number"
                  min='0'
                  className='form-control'
                  disabled={!watchAllowValueVariation}
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
                  {...register('limitRequestsPerMonth')}
                  className="form-check-input"
                />
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
                  disabled={!watchLimitRequestsPerMonth}
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

export default ModalAddCategorie

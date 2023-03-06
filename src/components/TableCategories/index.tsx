import React, { useContext, useState } from 'react'
import { Div } from './style'
import { Button, Table, UncontrolledAlert } from 'reactstrap'
import ModalUpCategorie from '../Modals/ModalUpCategorie'
import ModalDelCategorie from '../Modals/ModalDelCategorie'
import { GlobalConext } from '../../context/globalContext'
import { type ICategory } from '../../interfaces/interfaces'

const TableCategory: React.FC = () => {
  const { categoryData, alertOpen, alertColor, alertText } = useContext(GlobalConext)
  const [isOpenUpCategorie, setIsOpenUpCategorie] = useState(false)
  const [isOpenDelCategorie, setIsOpenDelCategorie] = useState(false)
  const [categorySelected, setCategorySelected] = useState({
    id: 0,
    allowAttachments: false,
    allowQuantityVariation: false,
    description: '',
    hasShipping: false,
    limitRequest: 0,
    limitRequestsPerMonth: false,
    name: '',
    validateClient: false,
    valueVariation: 0,
    allowValueVariation: false
  })

  const openModalUpCategorie = (category: ICategory): void => {
    setIsOpenUpCategorie(!isOpenUpCategorie)
  }

  const openModalDeleteCategorie = (category: ICategory): void => {
    setCategorySelected(categorySelected)
    setIsOpenDelCategorie(!isOpenDelCategorie)
  }

  const closeModalUpCategorie = (): void => {
    setIsOpenUpCategorie(!isOpenUpCategorie)
  }

  const closeModalDeleteCategorie = (): void => {
    setIsOpenDelCategorie(!isOpenDelCategorie)
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
              Categoria
            </th>
            <th>
              Descrição
            </th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { categoryData.map((category, index) => (
            <tr key={index}>
            <th scope="row">
              {category.id}
            </th>
            <td>
              {category.name}
            </td>
            <td>
              {category.description === null ? 'Nenhuma descrição para essa categoria' : category.description}
            </td>
            <td>
              <Button
                color='primary'
                size='sm'
                onClick={ () => { openModalUpCategorie(category) }}
              >
                Editar
              </Button>
            </td>
            <td>
              <Button
                color='danger'
                size='sm'
                onClick={ () => { openModalDeleteCategorie(category) }}
              >
                Excluir
              </Button>
            </td>
          </tr>
          ))}

        </tbody>
      </Table>
      <ModalUpCategorie isOpen={isOpenUpCategorie} toggle={closeModalUpCategorie} />
      <ModalDelCategorie isOpen={isOpenDelCategorie} toggle={closeModalDeleteCategorie} category={categorySelected} />
    </Div>
  )
}

export default TableCategory

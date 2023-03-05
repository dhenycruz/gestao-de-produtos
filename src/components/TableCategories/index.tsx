import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Div } from './style'
import { customStyles } from './DataTable/style'
import { Button } from 'reactstrap'
import { paginationComponentOptions } from './DataTable/paginationComponentOptions'
import ModalUpCategorie from '../Modals/ModalUpCategorie'
import ModalDelCategorie from '../Modals/ModalDelCategorie'

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988'
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 3,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 4,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 5,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 6,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 7,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 8,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 9,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 10,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 11,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 12,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 13,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 14,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 15,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 16,
    title: 'Ghostbusters',
    year: '1984'
  }
]

const Table: React.FC = () => {
  const [isOpenUpCategorie, setIsOpenUpCategorie] = useState(false)
  const [isOpenDelCategorie, setIsOpenDelCategorie] = useState(false)

  const openModalUpCategorie = (id: number): void => {
    console.log(id)
    setIsOpenUpCategorie(!isOpenUpCategorie)
  }

  const openModalDeleteCategorie = (id: number): void => {
    console.log(id)
    setIsOpenDelCategorie(!isOpenDelCategorie)
  }

  const closeModalUpCategorie = (): void => {
    setIsOpenUpCategorie(!isOpenUpCategorie)
  }

  const closeModalDeleteCategorie = (): void => {
    setIsOpenDelCategorie(!isOpenDelCategorie)
  }

  const columns = [
    {
      name: '#id',
      style: {
        fontWeight: 700,
        color: 'rgba(0,0,0,.54)'
      },
      selector: (row: { id: number }) => row.id
    },
    {
      name: 'Categoria',
      selector: (row: { title: string }) => row.title,
      sortable: true
    },
    {
      name: 'Descrição',
      selector: (row: { year: string }) => row.year,
      sortable: true
    },
    {
      cell: (row: any) => {
        return (
          <Button
            color='primary'
            size='sm'
            onClick={ () => { openModalUpCategorie(row) }}
          >
            Editar
          </Button>
        )
      },
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    },
    {
      cell: (row: any) => {
        return (
          <Button
            color='danger'
            size='sm'
            onClick={ () => { openModalDeleteCategorie(row) }}

          >
            Excluir
          </Button>
        )
      },
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    }
  ]

  return (
    <Div>
      <div>
        <DataTable
          title='Lista de Categorias'
          columns={columns}
          data={data}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          customStyles={customStyles}
          responsive={true}
        />
      </div>
      <ModalUpCategorie isOpen={isOpenUpCategorie} toggle={closeModalUpCategorie} />
      <ModalDelCategorie isOpen={isOpenDelCategorie} toggle={closeModalDeleteCategorie} />
    </Div>
  )
}

export default Table

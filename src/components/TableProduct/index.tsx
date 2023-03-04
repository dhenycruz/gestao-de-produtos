import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import { Div } from './style'
import { customStyles } from './DataTable/style'
import { Button } from 'reactstrap'
import { paginationComponentOptions } from './DataTable/paginationComponentOptions'
import ModalUpProduct from '../Modals/ModalUpProduct'
import ModalDelProduct from '../Modals/ModalDelProduct'

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
  const [isOpenUpProduct, setIsOpenUpProduct] = useState(false)
  const [isOpenDelProduct, setIsOpenDelProduct] = useState(false)

  const openModalUpProduct = (id: number): void => {
    console.log(id)
    setIsOpenUpProduct(!isOpenUpProduct)
  }

  const openModalDeleteProduct = (id: number): void => {
    console.log(id)
    setIsOpenDelProduct(!isOpenDelProduct)
  }

  const closeModalUpProduct = (): void => {
    setIsOpenUpProduct(!isOpenUpProduct)
  }

  const closeModalDeleteProduct = (): void => {
    setIsOpenDelProduct(!isOpenDelProduct)
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
      name: 'Produto',
      selector: (row: { title: string }) => row.title,
      sortable: true
    },
    {
      name: 'Descrição',
      selector: (row: { year: string }) => row.year,
      sortable: true
    },
    {
      name: 'Categoria'
    },
    {
      name: 'Descrição',
      selector: (row: { year: string }) => row.year,
      sortable: true
    },
    {
      name: 'ICMS',
      selector: (row: { year: string }) => row.year,
      sortable: true
    },
    {
      name: 'IPI',
      selector: (row: { year: string }) => row.year,
      sortable: true
    },
    {
      cell: (row: any) => {
        return (
          <Button
            color='primary'
            size='sm'
            onClick={ () => { openModalUpProduct(row) }}
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
            onClick={ () => { openModalDeleteProduct(row) }}

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
          title='Lista de Produtos'
          columns={columns}
          data={data}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          customStyles={customStyles}
          responsive={true}
        />
      </div>
      <ModalUpProduct isOpen={isOpenUpProduct} toggle={closeModalUpProduct} />
      <ModalDelProduct isOpen={isOpenDelProduct} toggle={closeModalDeleteProduct} />
    </Div>
  )
}

export default Table

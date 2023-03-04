import React from 'react'
import { Button } from 'reactstrap'

export const columns = [
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
    cell: () => <Button color='primary' size='sm'>Editar</Button>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true
  },
  {
    cell: () => <Button color='danger' size='sm'>Excluir</Button>,
    ignoreRowClick: true,
    allowOverflow: true,
    button: true
  }
]

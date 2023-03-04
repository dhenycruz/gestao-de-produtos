import React from 'react'
import DataTable from 'react-data-table-component'
import { Div } from './style'
import { columns } from './DataTable/Columns'
import { customStyles } from './DataTable/style'
import { paginationComponentOptions } from './DataTable/paginationComponentOptions'

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
    </Div>
  )
}

export default Table

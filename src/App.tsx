import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageCategoires from './components/PageCategories'
import PageNotFound from './components/PageNotFound'
import PageProducts from './components/PageProducts'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={ <PageProducts />}/>
      <Route path='/categorias' element={ <PageCategoires />} />
      <Route path='*' element={ <PageNotFound />} />
    </Routes>
  )
}

export default App

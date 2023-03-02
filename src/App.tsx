import React from 'react'
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={ <h1>Products</h1>}/>
      <Route path='/categorias' element={<h1>Categories</h1>} />
      <Route path='*' element={<h1>404 Page not found.</h1>} />
    </Routes>
  )
}

export default App

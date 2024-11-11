import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddNewData from './AddNewData'
import Read from './Read'
import UpdateData from './UpdateData'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Read />} />
        <Route path='/addNew' element={<AddNewData />} />
        <Route path='/update/:id' element={<UpdateData />} />
      </Routes>
    </Router>
  )
}

export default App
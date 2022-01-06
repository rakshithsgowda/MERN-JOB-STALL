import Landing from './pages/landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Dashboard</div>} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/Register' element={<div>Register</div>} />
        <Route path='*' element={<h1>Not OFund anything</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { Default, Figma, Timer } from 'pages'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Default />} />
        <Route path='/timer' element={<Timer />} />
        <Route path='/figma' element={<Figma />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

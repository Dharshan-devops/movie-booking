import { useState } from 'react'
import './App.css'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Pages from './components/pages/pages'
import Bangalore from './components/pages/Bangalore/bangalore'
import Movies from './components/pages/Bangalore/Movies/movies'
import Buyticket from './components/pages/Bangalore/Movies/buytickets'
import Screens from './components/pages/Bangalore/Movies/screens'
import Maintenance from './components/maintenance/maintenance'
import ScreenLayout from './components/maintenance/screenLayout'
import { Outlet } from 'react-router-dom/dist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/stream' element={<Maintenance />} />
        <Route path="/events" element={<Maintenance />} />
        <Route path="/plays" element={<Maintenance />} />
        <Route path="/sports" element={<Maintenance />} />
        <Route path="/activities" element={<Maintenance />} />



        {/* Nested routes */}
        <Route path='/pages' element={<Pages />}>
          <Route path='bangalore' element={<Bangalore />}>
            <Route path=':movies' element={<Movies />}/>
          </Route>
          <Route path="buyticket" element={<Buyticket />} />
          <Route path="screens" element={<Screens />} />
        </Route>





      </Routes>
    </>
  )
}

export default App

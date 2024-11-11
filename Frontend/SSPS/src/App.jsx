import React from 'react'
import { Routes, Route} from 'react-router-dom'
import './App.css'
import SideNavigation from './component/SideNav/nav'
import Printer from './component/Printer/printer'
import Dashboard from './component/Dashboard/dashboard'
import Student from './component/student'
import Setting from './component/setting'
import Help from './component/help'
import Config from './component/config'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AddPrinter from './component/Printer/add'

function App() {
  return (
    
    <SideNavigation
      content={
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path='/printer' element={<Printer />} />
            <Route path='/printer/add' element={<AddPrinter />} />
            <Route path='/student' element={<Student />} />
            <Route path='/config' element={<Config />} />
            <Route path='/help' element={<Help />} />
            <Route path='/setting' element={<Setting />} />
        </Routes>
      }
    />
  )
}

export default App

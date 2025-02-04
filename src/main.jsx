import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HelloWorld from './components/pages/HelloWorld.jsx'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBarComponent from './Components/NavBarComponent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBarComponent/>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/helloWorld' element={<HelloWorld />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

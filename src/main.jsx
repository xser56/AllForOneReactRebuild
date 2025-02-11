import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HelloWorld from './components/pages/HelloWorld.jsx'
import Adding from './components/pages/Adding.jsx'
import AskingQuestions from './components/pages/AskingQuestions.jsx'
import GreaterOrLess from './components/pages/GreaterOrLess.jsx'
import MadLib from './components/pages/MadLib.jsx'
import OddOrEven from './components/pages/OddOrEven.jsx'
import ReverseItAlpha from './components/pages/ReverseItAlpha.jsx'
import ReverseItNumb from './components/pages/ReverseItNumb.jsx'
import Magic8Ball from './components/pages/Magic8Ball.jsx'
import ResturantPicker from './components/pages/ResturantPicker.jsx'

import { BrowserRouter, Route, Routes} from 'react-router-dom'
import NavBar from './components/NavBarComponent.jsx'
import { Component } from 'react'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/helloWorld' element={<HelloWorld />}/>
        <Route path='/Adding' element={<Adding />}/>
        <Route path='/AskingQuestions' element={<AskingQuestions />}/>
        <Route path='/GreaterOrLess' element={<GreaterOrLess />}/>
        <Route path='/OddOrEven' element={<OddOrEven />}/>
        <Route path='/ReverseItAlpha' element={<ReverseItAlpha />}/>
        <Route path='/ReverseItNumb' element={<ReverseItNumb />}/>
        <Route path='/Magic8Ball' element={<Magic8Ball />}/>
        <Route path='/ResturantPicker' element={<ResturantPicker />}/>
        <Route path='/MadLib' element={<MadLib />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)

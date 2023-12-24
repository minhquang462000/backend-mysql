import { useState } from 'react'
import './App.css'
import {  Routes , Route } from 'react-router-dom'
import UserComponent from './components/users/user';

function App() {
  return (
    <>
    <Routes>
      <Route path="/user" element = {<UserComponent/>}/>
    </Routes>
    </>
  )
}

export default App

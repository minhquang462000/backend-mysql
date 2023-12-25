import { useState } from 'react'
import './App.css'
import {  Routes , Route } from 'react-router-dom'
import UserList from './components/users/ListUser';

function App() {
  return (
    <>
    <Routes>
      <Route path="/user" element = {<UserList/>}/>
    </Routes>
    </>
  )
}

export default App

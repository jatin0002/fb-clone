import React from 'react'
import Feed from './components/Feed/Feed'
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import './App.css'
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
      </div>
    </div>
  )
}

export default App

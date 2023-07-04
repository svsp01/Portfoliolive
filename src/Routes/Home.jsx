import React from 'react'
import Navtop from '../Components/Navtop'
import Foot from '../Components/Foot'
import '../CSS/Home.css'
import { Outlet } from 'react-router-dom'

function Home({userData}) {
  const userdata = userData
  return (
    <>
        <Navtop props = {userdata}/>
        <div className='container-fluid mx-0 px-0 '>
        <Outlet />
        </div>
        <div className='container-fluid'>
          <Foot />
        </div>
    </>
  )
}

export default Home
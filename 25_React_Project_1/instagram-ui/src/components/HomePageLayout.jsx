import React from 'react'
import Leftsidebar from './Leftsidebar'
import RightSidebar from './RightSidebar'
import { Outlet } from 'react-router-dom'

const HomePageLayout = () => {
  return (
    <main className="flex h-auto bg-black">

      <div className='w-full md:flex'>
        <Leftsidebar />


        <div className='w-[650px]'>
            <Outlet/>
        </div>
        {/* right sidebar */}

       <RightSidebar/>
      </div>



    </main>
  )
}

export default HomePageLayout
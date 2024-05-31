import React from 'react'


import Feed from './components/Feed'
import Leftsidebar from './components/Leftsidebar'
import RightSidebar from './components/RightSidebar'

const App = () => {
  return (
    <main className="flex h-auto bg-black">

      <div className='w-full md:flex'>
        <Leftsidebar />


        <div className='max-w-[670px]'>
          <Feed />
        </div>
        {/* right sidebar */}

       <RightSidebar/>
      </div>



    </main>
  )
}

export default App
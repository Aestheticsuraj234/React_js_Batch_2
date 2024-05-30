import React from 'react'
import Leftsidebar from './components/Leftsidebar'
import Feed from './components/Feed'
import RightSidebar from './components/RightSidebar'

const App = () => {
  return (
    <main className="bg-black  flex h-screen">

        <div className='w-full md:flex'>
            <Leftsidebar/>

<div className="max-w-[42rem] w-full">
    <Feed/>
</div>

<RightSidebar/>

        </div>

    </main>
  )
}

export default App
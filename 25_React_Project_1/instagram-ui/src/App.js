import React , {useEffect, useState} from 'react'


import Feed from './components/Feed'
import Leftsidebar from './components/Leftsidebar'
import RightSidebar from './components/RightSidebar'

const App = () => {

  // const [count , setCount] = useState(0)

 

// useEffect(()=>{

//   setTimeout(()=>{

//     console.log("Hello world");
//     setCount(count+1)
//     // console.log(count);

//   },1000)
 
// } , [count])


// window.addEventListener("load",()=>{
//   console.log("hello world window has Called")
// })




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
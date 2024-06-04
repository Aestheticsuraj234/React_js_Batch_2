// import React, { useEffect, useState, useContext } from 'react'
// import { GlobalContext } from './context/GlobalContext'


import Feed from './components/Feed'

import SearchPage from './components/SearchPage'
import MessagePage from './components/MessagePage'
import NotificationsPage from './components/NotificationPage'
import { Route, Routes } from 'react-router-dom'
import HomePageLayout from './components/HomePageLayout'

const App = () => {
  // const { UserName } = useContext(GlobalContext)

  // console.log("APP.js", UserName)

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

    <Routes>
      <Route element={<HomePageLayout />}>
        <Route index element={<Feed />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/notification' element={<NotificationsPage />} />
        <Route path='/message' element={<MessagePage />} />
      </Route>
    </Routes>

  )
}

export default App
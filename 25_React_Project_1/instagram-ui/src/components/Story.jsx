import React , {useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'

const Story = ({avatar , username , isWatched}) => {

  const {UserName} = useContext(GlobalContext)

  console.log(UserName)

  
  return (
    <div className='flex flex-col items-center justify-center gap-2 cursor-pointer'>

        <img
        src={avatar}
        alt="user profile"
        className={`h-18 w-18 rounded-full p-1 object-contai border-2 hover:scale-110 transition duration-200 ease-out ${
            isWatched ? "border-gray-400" : "border-red-500"  
        } ${ username === "Chris Taylor" && "border-green-600"}`}
        />

        <p className="text-xs w-14 truncate text-white text-center">{username}</p>


    </div>  
  )
}

export default Story
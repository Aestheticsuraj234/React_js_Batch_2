import React , {useEffect , useState} from 'react'
import Story from './Story'
import toast from 'react-hot-toast';
// import { StoryDataUser } from '../constants/story-data-user'

const Stories = () => {
  const [StoryDataUser , setStoryDataUser] = useState([]);


  useEffect(()=>{

    const FetchUserData = async()=>{
      try{
        const res = await fetch("https://api.github.com/users/Aestheticsuraj234/followers");
        const data = await res.json();
        setStoryDataUser(data)
        toast.success("Data Fetched Successfully")
      }
      catch(error){
        console.log("Error",error)
        toast.error("Failed to Fetch Data")

      }
    }

    FetchUserData();
  

  },[])




  return (
    <div className="flex space-x-2 bg-black mt-2 p-6">
         
            {
                StoryDataUser.map((story)=>(
                    <Story
                    key={story.id}
                    avatar={story.avatar_url}
                    username={story.login}
                    isWatched={false}
                    />
                ))
            }

        
    </div>
  )
}

export default Stories
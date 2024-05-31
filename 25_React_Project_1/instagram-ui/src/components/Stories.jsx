import React from 'react'
import Story from './Story'
import { StoryDataUser } from '../constants/story-data-user'

const Stories = () => {
  return (
    <div className="flex space-x-2 bg-black mt-2 p-6">
         
            {
                StoryDataUser.map((story)=>(
                    <Story
                    key={story.id}
                    avatar={story.avatar}
                    username={story.username}
                    isWatched={story.isWatched}
                    />
                ))
            }

        
    </div>
  )
}

export default Stories
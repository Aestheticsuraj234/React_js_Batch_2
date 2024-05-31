import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-5 space-y-4'>
      <Post
      userAvatar="https://avatar.iran.liara.run/public/4"
      username="sigma_developer"
      updatedAt="Now"
      PostUrl="https://www.codewithantonio.com/_next/image?url=https%3A%2F%2Futfs.io%2Ff%2F06ceaef3-36db-42c0-b06e-85a81663a380-idym73.jpg&w=1920&q=75"
      likesNumber=""
      location={""}
      />

    </div>
  )
}

export default Posts
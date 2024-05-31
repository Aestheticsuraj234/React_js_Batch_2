import React, { useState } from 'react'
import { BiComment, BiHeart, BiShare } from 'react-icons/bi'
import { FaHeart } from "react-icons/fa";
import { BsThreeDots } from 'react-icons/bs'
import { CiBookmark } from 'react-icons/ci'
import { IoBookmark } from "react-icons/io5";


const Post = ({ userAvatar, username, updatedAt, location, PostUrl, likesNumber }) => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(200);
    const [isSaved, setIsSaved] = useState(false);



    const onLikeToggle = () => {
        // setIsLiked(!false); = true
        // setIsLiked(!true); = false;
        setIsLiked(!isLiked)

        if (!isLiked) {
            setLikeCount(likeCount + 1)
        }
        else {
            setLikeCount(likeCount - 1)
        }

    }


    const onSavedToggle = () => {
        setIsSaved(!isSaved)
    }




    return (

        <div className='max-w-[32rem] w-full text-white p-4 h-auto bg-transparent m-4 rounded-md flex flex-col'>
            {/* upper */}
            <div className="flex justify-between items-center">
                {/* l.h.s */}
                <div className='flex flex-row justify-center items-center space-x-2 gap-1'>
                    <img
                        src={userAvatar}
                        className='h-8 w-8 rounded-full object-cover'
                        alt="profile"
                    />

                    <div className='flex flex-col items-start gap-1'>
                        <div className='flex items-center justify-center space-x-2'>
                            <p className='font-semibold text-sm text-white'>{username}</p>
                            <span className='font-medium text-xs text-gray-500'>•</span>
                            <p className='font-medium text-xs text-gray-500'>{updatedAt}</p>
                        </div>
                    </div>
                </div>
                {/* r.h.s */}
                <BsThreeDots className='text-white cursor-pointer' />
            </div>
            {/* main post */}
            <div className='relative w-full overflow-hidden rounded-[24px] my-5'>
                <img
                    src={PostUrl}
                    className='w-full h-auto object-cover aspect-video rounded-[24px]'
                    alt="post"

                />
            </div>
            {/* lower */}
            <div className='flex flex-row justify-between items-center'>
                <div className='flex group   flex-row justify-center items-center gap-4'>

                    <span onClick={onLikeToggle} className='flex group-hover:cursor-pointer  justify-center items-center gap-1 font-medium text-base'>
                        {isLiked ? <FaHeart size={24} className="text-red-500" /> : <BiHeart size={24} />} {likeCount}k </span>

                    <BiComment size={24} />
                    <BiShare size={24} />
                </div>
                <span onClick={onSavedToggle} className="hover:cursor-pointer">
                    {isSaved ? <IoBookmark size={24} className='text-white' /> : <CiBookmark size={24} />}
                </span>
            </div>
        </div>
    )
}

export default Post

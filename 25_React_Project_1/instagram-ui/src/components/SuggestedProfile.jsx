import React from 'react'

const SuggestedProfile = ({FullName , type , ProfilePic}) => {
  return (
    <div  className="flex flex-row justify-between items-center gap-4">
    {/* div-left */}
    
{/* div-left */}

<div className="flex flex-row justify-center items-center gap-3">
        <img
        src={ProfilePic}
        alt="Profile"
        className="h-12 w-12 rounded-full"
        />

    <div className="relative flex flex-col items-start justify-center">
        <span className="text-white font-extrabold">{FullName}</span>
        <span className="text-gray-500">{type}</span>
    </div>

</div>

<p className="text-sm font-normal text-blue-500">
        Follow
</p>




        {/* right */}

    </div>
  )
}

export default SuggestedProfile
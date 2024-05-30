import React from 'react'
import Profile from './Profile'
import SuggestedProfile from './SuggestedProfile'
import { SUGGESTED_ACCOUNT_DATA } from '../constants/suggested-account'

const RightSidebar = () => {
    return (
        <aside className="hidden md:flex bg-black px-4 py-10
    flex-col justify-between border-l min-w-[16rem]
    ">
            <div className="flex flex-col gap-11">

                {/* account */}
                <Profile
                    fullname={"Sigma Developer"}
                    username={"sigma_developer_"}
                />

                {/* suggested user */}

                <div className="flex flex-col gap-4">
                    <div className='flex flex-row justify-between items-center'>
                        <span className="text-white font-bold">
                            Suggested Account
                        </span>

                        <span className="text-blue-500 font-bold">
                            See All
                        </span>

                    </div>

                    {SUGGESTED_ACCOUNT_DATA.map((account) => (
                        <SuggestedProfile
                            key={account.id}
                            FullName={account.FullName}
                            type={account.type}
                            ProfilePic={account.ProfilePic}
                        />
                    ))}






                </div>

            </div>

        </aside>
    )
}

export default RightSidebar
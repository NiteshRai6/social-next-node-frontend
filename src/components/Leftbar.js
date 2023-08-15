import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { CgWebsite } from 'react-icons/cg';
import { BsYoutube } from 'react-icons/bs';
import { AiFillClockCircle } from 'react-icons/ai';
import { MdEventNote } from 'react-icons/md';
import { SiYoutubegaming } from 'react-icons/si';
import { BiPhotoAlbum } from 'react-icons/bi';
import { MdVideoSettings } from 'react-icons/md';
import { AiFillMail } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { ImLocation } from 'react-icons/im';
import { FaReact } from 'react-icons/fa';
import { MdDevicesOther } from 'react-icons/md';

import Link from 'next/link';

export default function Leftbar() {

    const [user, setUser] = useState();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, []);

    return (
        <div className='sticky top-16'>
            <div className='hidden lg:flex flex-col gap-2 xl:px-[2rem] sm:px-2 pt-2 pb-3'>

                <div className='flex gap-2 items-center'>
                    <span>
                        {user?.user_img &&
                            <img
                                src={`http://localhost:4000/users/${user?.user_img}`}
                                className='w-5 h-5 rounded-full'
                                width='20'
                                height='20'
                                alt='socialImage'
                            />
                        }
                    </span>

                    {user?.name &&
                        <span className='font-[600] hover:text-[magenta]'>
                            {user?.name}
                        </span>
                    }
                </div>

                <div className='flex gap-2 items-center'>
                    <span className='text-xl text-[#007ca2]'>
                        <FaUserFriends />
                    </span>

                    <span className='font-[600] hover:text-[magenta]'>Friends</span>
                </div>

                <div className='flex gap-2 items-center'>
                    <span className='text-xl text-[tomato]'>
                        <HiUserGroup />
                    </span>

                    <span className='font-[600] hover:text-[magenta]'>Groups</span>
                </div>

                <div className='flex gap-2 items-center'>
                    <span className='text-xl text-[#007ca2]'>
                        <CgWebsite />
                    </span>

                    <span className='font-[600] hover:text-[magenta]'>Marketplace</span>
                </div>

                <div className='flex gap-2 items-center'>
                    <span className='text-xl text-[tomato]'>
                        <BsYoutube />
                    </span>

                    <span className='font-[600] hover:text-[magenta]'>Watch</span>
                </div>

                <div className='flex gap-2 items-center'>
                    <span className='text-xl text-[#007ca2]'>
                        <AiFillClockCircle />
                    </span>

                    <span className='font-[600] hover:text-[magenta]'>Memories</span>
                </div>

                <hr className='mt-2 h-[1px] border-none bg-[#e5e7eb] dark:bg-[#323944]' />

                <p className='font-[700]'>Your shortcuts</p>

                <div className='flex gap-2 items-center'>
                    <span className='text-xl text-[tomato]'>
                        <MdEventNote />
                    </span>

                    <span className='font-[600] hover:text-[magenta]'>Events</span>
                </div>

                <div className='flex gap-2 items-center'>
                    <span className='text-xl text-[#007ca2]'>
                        <SiYoutubegaming />
                    </span>

                    <span className='font-[600] hover:text-[magenta]'>Gaming</span>
                </div>

                <div className='flex gap-2 items-center'>
                    <span className='text-xl text-[tomato]'>
                        <BiPhotoAlbum />
                    </span>

                    <span className='font-[600] hover:text-[magenta]'>Gallery</span>
                </div>

                <div className='flex gap-2 items-center'>
                    <span className='text-xl text-[#007ca2]'>
                        <MdVideoSettings />
                    </span>

                    <span className='font-[600] hover:text-[magenta]'>Videos</span>
                </div>

                <div className='flex gap-2 items-center'>
                    <span className='text-xl text-[tomato]'>
                        <AiFillMail />
                    </span>

                    <span className='font-[600] hover:text-[magenta]'>Messages</span>
                </div>

                <hr className='mt-2 h-[1px] border-none bg-[#e5e7eb] dark:bg-[#323944]' />
                <p className='font-[700]'>User</p>

                <div className='flex gap-2 items-center'>
                    <span className='text-xl text-[#007ca2]'>
                        <CgProfile />
                    </span>

                    <span
                        className='font-[600] hover:text-[magenta] cursor-pointer'>Profile</span>
                </div>

                <div className='flex gap-2 items-center'>
                    <span className='text-xl text-[tomato]'>
                        <ImLocation />
                    </span>

                    <Link href='/register'>
                        <span className='font-[600] hover:text-[magenta]'>Locations</span>
                    </Link>
                </div>

                <div className='flex gap-2 items-center'>
                    <span className='text-xl text-[#007ca2]'>
                        <FaReact />
                    </span>

                    <Link href='/login'>
                        <span className='font-[600] hover:text-[magenta]'>Courses</span>
                    </Link>
                </div>

                <div className='flex gap-2 items-center'>
                    <span className='text-xl text-[tomato]'>
                        <MdDevicesOther />
                    </span>

                    <span className='font-[600] hover:text-[magenta]'>Others</span>
                </div>

            </div>
        </div>
    )
}

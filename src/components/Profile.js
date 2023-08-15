import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ImLocation2 } from 'react-icons/im';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';

export default function Profile() {

    const [user, setUser] = useState();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, []);

    return (
        <div className='mb-5'>
            <div className='flex flex-col justify-center'>

                <div className='w-auto h-auto flex p-2'>

                    <Image
                        src='/react.jpg'
                        alt=''
                        className='rounded-xl'
                        width={600}
                        height={300}
                        priority
                    />
                </div>

                <div className='flex flex-col justify-center items-center'>

                    <div className='flex rounded-xl p-2'>
                        {user?.user_img &&
                            <Image
                                src={`http://localhost:4000/users/${user?.user_img}`}
                                alt='socialImage'
                                className='rounded-full'
                                width={80}
                                height={80}
                            />
                        }
                    </div>

                    {user?.name &&
                        <h1 className='text-2xl font-bold p-2'>
                            {user?.name}
                        </h1>
                    }

                </div>

                <div className='flex pb-5'>

                    <div className='flex-1 flex gap-3 justify-center items-center text-xl'>
                        <FaFacebook className='text-[#007ca2]' />
                        <FaInstagram className='text-[tomato]' />
                        <FaTwitter className='text-[#007ca2]' />
                        <FaLinkedin className='text-[tomato]' />
                    </div>

                    <div className='flex-1 flex gap-2 justify-center items-center text-xl'>
                        <span className=''> <ImLocation2 className='text-[#007ca2]' /> </span>
                        <span className='text-[gray]'>California, USA</span>
                    </div>

                    <div className='flex-1 flex gap-3 justify-center items-center text-xl'>
                        <AiOutlineMail className='text-[tomato]' />
                        <BsThreeDots className='text-[#007ca2]' />
                    </div>

                </div>
            </div>

        </div>
    )
}

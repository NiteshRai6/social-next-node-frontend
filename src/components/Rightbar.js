import Image from 'next/image'
import React from 'react';

export default function Rightbar() {

    return (

        <div className='sticky top-16'>

            <div className='hidden lg:flex flex-col pb-3'>

                <h1 className='font-[700] pt-2 pl-2'>Suggestions for you</h1>

                <div className='flex lg:flex-col xl:flex-row lg:gap-3 xl:gap-10 p-2'>

                    <div className='flex gap-2 ml-3'>
                        <span>
                            <Image
                                className='w-5 h-5 rounded-full'
                                src='/elon.jpg'
                                width='20'
                                height='20'
                                alt='socialImage'
                            />
                        </span>

                        <h5 className='font-[600]'>Elon Musk</h5>

                    </div>

                    <div className='flex gap-3'>
                        <button className='bg-[#007ca2] text-white w-16'>Add</button>

                        <button className='bg-[tomato] text-white w-16'>Remove</button>
                    </div>

                </div>

                <div className='flex lg:flex-col xl:flex-row lg:gap-3 xl:gap-10 p-2'>

                    <div className='flex gap-2 ml-3'>
                        <span>
                            <Image
                                className='w-5 h-5 rounded-full'
                                src='/jef.jpg'
                                width='20'
                                height='20'
                                alt='socialImage'
                            />
                        </span>

                        <h5 className='font-[600]'>Jeff Bezos</h5>

                    </div>

                    <div className='flex gap-3 ml-[0.2rem]'>
                        <button className='bg-[#007ca2] text-white w-16'>Add</button>

                        <button className='bg-[tomato] text-white w-16'>Remove</button>
                    </div>

                </div>
            </div>

            <hr className='h-[1px] border-none bg-[#e5e7eb] dark:bg-[#323944]' />

            <div className='hidden lg:flex flex-col mt-3 pb-5 gap-3'>

                <h1 className='font-[700] pt-2 pl-2'>Latest Activities</h1>

                <div className='flex gap-2'>
                    <span className='flex-[1] flex justify-center mt-1'>
                        <Image
                            className='w-5 h-5 rounded-full'
                            src='/ariana.png'
                            width='20'
                            height='20'
                            alt='socialImage'
                        />
                    </span>

                    <span className='flex-[4] font-[600]'>Ariana Grande changed her profile picture.</span>

                    <span className='flex-[2]'>3 min ago</span>
                </div>

                <div className='flex gap-2'>
                    <span className='flex-[1] flex justify-center mt-1'>
                        <Image
                            className='w-5 h-5 rounded-full'
                            src='/angelina.jpg'
                            width='20'
                            height='20'
                            alt='socialImage'
                        />
                    </span>

                    <span className='flex-[4] font-[600]'>Angelina Jolie commented on your post.</span>

                    <span className='flex-[2]'>18 min ago</span>
                </div>

                <div className='flex gap-2'>
                    <span className='flex-[1] flex justify-center mt-1'>
                        <Image
                            className='w-5 h-5 rounded-full'
                            src='/selena.jpg'
                            width='20'
                            height='20'
                            alt='socialImage'
                        />
                    </span>

                    <span className='flex-[4] font-[600]'>Selena Gomez likes your photo.</span>

                    <span className='flex-[2]'>24 min ago</span>
                </div>

            </div>

            <hr className='h-[1px] border-none bg-[#e5e7eb] dark:bg-[#323944]' />

            <div className='hidden lg:flex flex-col mt-3 pb-5 gap-3'>

                <h1 className='font-[700] pt-2 pl-2'>Online Friends</h1>

                <div className='flex gap-3'>
                    <span className='mt-1 ml-5'>
                        <Image
                            className='w-5 h-5 rounded-full'
                            src='/ariana.png'
                            width='20'
                            height='20'
                            alt='socialImage'
                        />
                    </span>

                    <span className='font-[600]'>Ariana Grande</span>
                </div>

                <div className='flex gap-3'>
                    <span className='mt-1 ml-5'>
                        <Image
                            className='w-5 h-5 rounded-full'
                            src='/angelina.jpg'
                            width='20'
                            height='20'
                            alt='socialImage'
                        />
                    </span>

                    <span className='font-[600]'>Angelina Jolie</span>
                </div>

                <div className='flex gap-3'>
                    <span className='mt-1 ml-5'>
                        <Image
                            className='w-5 h-5 rounded-full'
                            src='/elon.jpg'
                            width='20'
                            height='20'
                            alt='socialImage'
                        />
                    </span>

                    <span className='font-[600]'>Elon Musk</span>
                </div>

                <div className='flex gap-3'>
                    <span className='mt-1 ml-5'>
                        <Image
                            className='w-5 h-5 rounded-full'
                            src='/selena.jpg'
                            width='20'
                            height='20'
                            alt='socialImage'
                        />
                    </span>

                    <span className='font-[600]'>Selena Gomez</span>
                </div>

                <div className='flex gap-3'>
                    <span className='mt-1 ml-5'>
                        <Image
                            className='w-5 h-5 rounded-full'
                            src='/tom.jpg'
                            width='20'
                            height='20'
                            alt='socialImage'
                        />
                    </span>

                    <span className='font-[600]'>Tom Cruise</span>
                </div>

            </div>

        </div>
    )
}

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AiOutlineLike } from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { BiShareAlt } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';
import { MdOutlineDeleteForever } from 'react-icons/md';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Post({ getPost, setPost }) {

    const [edit, setEdit] = useState(false);

    const [user, setUser] = useState();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')));
    }, []);

    const navigate = useRouter();

    const date = (_date) => new Date(_date).toLocaleString('en', {
        year: "numeric",
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
    });

    const deletePost = async (post_id) => {
        try {
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_URL}/api/post/${post_id}`,
                { withCredentials: true }
            );

            navigate.replace(navigate.asPath);
            console.log('Post deleted Successfully');

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <div className='' id={`post${getPost.post_id}`}>
            <div className='flex-1 flex px-5 gap-2 items-center'>

                {getPost?.user_img && <img
                    src={`http://localhost:4000/users/${getPost?.user_img}`}
                    alt=''
                    className='w-8 h-8 rounded-full mt-2'
                    width=''
                    height=''
                />}

                <div className='flex-1'>
                    <span className='text-lg font-[600]'> {getPost.name} </span>
                    <br /> <span className='flex leading-[0.5rem]'> {date(getPost.post_date)} </span>
                </div>

                {(user?.user_id == getPost?.user_id) ?
                    <div className='relative flex-1 flex justify-end'>
                        <BsThreeDots className='text-[#007ca2]'
                            onClick={() => {
                                setEdit(prev => !prev)
                            }}
                        />

                        {edit ?
                            <div className='absolute top-5 z-20 bg-[lightGray] dark:bg-[#333a44]'
                                onClick={() => {
                                    setEdit(false);
                                }}
                            >
                                <ul className='p-2 flex flex-col items-center gap-1'>
                                    <li className='flex items-center gap-5 cursor-pointer'>
                                        <span className='mt-1 font-bold hover:text-[magenta] select-none'
                                            onClick={() =>
                                                setPost(() => (
                                                    { ...getPost, shouldEdit: true, post_img: '' }
                                                ))
                                            }
                                        >
                                            Edit
                                        </span>
                                        <span className='text-xl text-[#007ca2] mt-1'><AiFillEdit /></span>
                                    </li>

                                    <li className='flex items-center gap-1 font-bold hover:text-[magenta] cursor-pointer'>
                                        <span className='font-bold hover:text-[magenta] select-none'
                                            onClick={(e) => deletePost(getPost.post_id)}
                                        >Delete
                                        </span>
                                        <span className='text-xl text-[tomato]'><MdOutlineDeleteForever /></span>
                                    </li>
                                </ul>
                            </div>
                            :
                            ''
                        }
                    </div>
                    : ''
                }

            </div>

            <div className='flex flex-col px-5 pb-3 select-none'>

                <div className='max-h-20 overflow-auto hide-scrollbar'>
                    <p className='font-[600] mt-3'>
                        {getPost.post_des}
                    </p>
                </div>

                <div className='w-auto h-auto mt-2 rounded-lg'>
                    {
                        getPost.post_img && <Image
                            src={`http://localhost:4000/posts/${getPost.post_img}`}
                            alt=''
                            width={900}
                            height={300}
                            priority
                        />
                    }
                </div>

                <div className='flex gap-5 items-center mt-3'>

                    <div className='flex gap-2'>
                        <span>  <AiOutlineLike className='text-2xl text-[#007ca2]' /> </span>
                        <span className='font-[600]'>27 Likes</span>
                    </div>

                    <div className='flex gap-2'>
                        <span>  <BiCommentDetail className='text-2xl text-[tomato]' /> </span>
                        <span className='font-[600]'>14 Comments</span>
                    </div>

                    <div className='flex gap-2'>
                        <span>  <BiShareAlt className='text-2xl text-[#007ca2]' /> </span>
                        <span className='font-[600]'>Share</span>
                    </div>

                </div>

            </div>

            <hr className='my-2 h-[1px] border-none bg-[#e5e7eb] dark:bg-[#323944]' />

        </div>
    )
}

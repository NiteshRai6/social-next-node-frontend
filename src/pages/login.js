import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {

    const navigate = useRouter();

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setUserInfo((pre) => (
            { ...pre, [e.target.name]: e.target.value }
        ))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(`http://localhost:4000/api/auth/login`, userInfo,
                { withCredentials: true }
            );

            const user = JSON.stringify(res.data);
            localStorage.setItem("user", user);
            navigate.replace('/');
            console.log('Login Successful');

        } catch (error) {
            setError(error?.response?.data);
        }
    }

    return (

        <div className='flex justify-center items-center h-[100vh] bg-[teal] dark:bg-[#333a44]'>

            <div className='flex bg-white dark:bg-[#23272f] h-[70vh]'>

                <div className="hidden lg:flex-1 lg:flex flex-col justify-center items-center gap-5 bg-[url('/dark_nature.jpg')] bg-cover bg-center">

                    <h1 className='text-white text-3xl font-bold'>Social Media</h1>

                    <p className='px-5 text-center text-white font-bold'>This Social-App developed using React.js, Node.js & Next.js</p>

                    <p className='text-white font-bold p-2 text-center'>Do not You have an Account ?
                        <Link href='/register'>
                            <span className='pl-2 text-[#007ca2] hover:text-[yellow] hover:font-bold'>Register</span>
                        </Link>
                    </p>
                </div>

                <div className='flex-1 flex justify-center items-center flex-col gap-5 p-10'>

                    <h1 className='text-3xl font-bold'>Login</h1>

                    {error && <h2 className='text-[#720f0f] text-lg font-bold'>{error}</h2>}

                    <form className='flex justify-center items-center flex-col gap-5'>


                        <input className='outline-none border-b p-1 dark:border-[#333a44]' type='email' name='email' placeholder='Email' onChange={handleChange} />

                        <input className='outline-none border-b p-1 dark:border-[#333a44]' type='password' name='password' placeholder='Password' onChange={handleChange} />

                        <button className='bg-[#007ca2] text-white font-[500] py-1 px-3' onClick={handleSubmit}>Login</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

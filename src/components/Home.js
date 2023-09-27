import React from 'react'
import Slide from 'react-reveal/Flip';
import MainPhoto from '../assests/akr.jpg'

const Home = () => {
    return (
        <div name='home' className='h-[100%] bg-[#171717] px-4 w-[100%] lg:h-screen items-center flex justify-center '>
            <div className='flex w-[100%] items-center flex-col lg:flex-row justify-between md:w-[90%] lg:w-[70%] mt-[130px] md:mt-[180px] mb-[80px]'>

                <div className='md:h-[200px] md:w-[700px] mb-11 lg:mr-44 '>
                    <Slide top>
                        <h1 className='text-[25px] lg:text-5xl font-bold mb-5 text-white '>Hello 👋 I'm <span className='text-[#1e90ff]'>Aaryaveer Rajput</span></h1>
                        <h2 className='text-xl mt-10 md:text-2xl font-[600] text-[#1e90ff] '>a <span className='text-white'>Software Developer | Open Source Contributor </span></h2>
                    </Slide>
                    <Slide top>
                        <div className='flex mt-10'>
                            <a href='s' target='_blank' rel="noreferrer" className='font-[500] mr-3 w-[50%] bg-gray-800 text-white px-3 py-2 rounded-sm hover:cursor-pointer text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' >Resume</a>
                            <a href='s' target='_blank' rel="noreferrer" className='font-[500] ml-3 w-[50%] bg-gray-800 text-white px-3 py-2 rounded-sm hover:cursor-pointer text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ' >Github</a>
                        </div>
                    </Slide>
                </div>
                <div className='box_shadow rounded-full'>
                    <img className='rounded-full w-[300px]' src={MainPhoto} alt='AKR' />
                </div>
            </div>
        </div>
    )
}

export default Home

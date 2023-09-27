import React from 'react'

const AboutMe = () => {
    return (
        <div name='about' className='h-[100%] px-6 flex flex-col items-center bg-[#171717] text-white '>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-3 divide-y mt-[80px] md:mt-[120px]'>About Me</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[120px] sm:w-[150px] mb-[50px]' />
                <div className='m-0 box_shadow'>
                    <p className='text-xl mb-5 mt-[20px] '>I am Aaryaveer Rajput.</p>
                    <p className='text-xl mb-5'></p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe

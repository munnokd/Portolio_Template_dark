import React from 'react'

const Experience = () => {
    return (
        <div name='experience' className='h-[100%] flex flex-col items-center '>
            <div className='md:w-[90%] lg:w-[70%] flex flex-col items-center'>
                <h1 className=' text-4xl sm:text-5xl font-bold mb-5 mt-[80px] md:mt-[120px]'>Experience</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[130px] sm:w-[170px] mb-[50px]' />
                <div className='mt-[10px] grid grid-cols-1 px-6'>
                    <div className='mb-[30px] text-[24px] sm:text-[30px] font-bold'>Education Qualification :</div>
                    <div className='box_shadow rounded-[10px] mx-0 sm:mx-5 mb-[30px] p-[30px]'>
                        <h1 className='text-[20px] sm:text-[25px] font-bold mb-[10px]'>B.Tech- Computer Science and Engineering</h1>
                            <div className='flex justify-between'>
                            <p className='text-[15px] sm:text-[18px]'>Institute of Technology, Nirma University, Ahmedabad</p>
                            <p className='text-[15px] sm:text-[18px]'>2019 - 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience

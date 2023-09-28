import React from 'react'
import { SiGithub } from 'react-icons/si'
import Insta from '../assests/insta.png'
import Twiter from '../assests/twitter.png'
import Linkdin from '../assests/linkdin.png'

const BottomBar = () => {
    return (
        <div className='pb-[20px] sm:pb-[40px] w-[100%] flex flex-col items-center justify-between lg:px-[250px] lg:flex-row bg-[#171717] text-white pt-[20px] '>
            <div>
                <h1 className='font-[600] mx-5'> All rights reserved © Aaryaveer Rajput | {new Date().getFullYear()}</h1>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-4 m-[30px] lg:m-0'>
                <a className='box_shadow rounded-[50px] p-[15px] hover:cursor-pointer' href='https://www.linkedin.com/in/aaryaveer-rajput-0362b91b3/' alt="" target='_blank' rel="noreferrer">
                    <img src={Linkdin} alt="Insta" className='min-w-[20px] min-h-[20px] w-[20px] h-[20px]' style={{background:'white'}}  />
                </a>
                <a className='box_shadow rounded-[50px] p-[15px] hover:cursor-pointer' href='https://github.com/AKR-2803' alt="" target='_blank' rel="noreferrer">
                    <SiGithub size={20}/>
                </a>
            </div>
        </div>
    )
}

export default BottomBar

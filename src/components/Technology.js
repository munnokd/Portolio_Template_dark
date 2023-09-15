import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiJava, SiMysql, SiReact, SiBootstrap, SiTailwindcss, SiGithub, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiSequelize, SiDocker, SiTypescript } from 'react-icons/si'
import rest from '../assests/rest.png'
import mui from '../assests/mui.png'
import fire from '../assests/firebase.png'
import Zoom from 'react-reveal/Zoom';

const Technology = () => {
    return (
        <div name='technology' className='h-[100%] flex flex-col items-center mb-[35px] '>
            <div className='md:w-[90%] lg:w-[80%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-4 mt-[80px] md:mt-[120px]'>Technology</h1>
                <hr className='border-t-[#fd7014] border-t-[3px] w-[140px] sm:w-[180px] mb-[50px]' />
                <div className='flex flex-col'>
                    <div className=' mt-[10px] grid grid-cols-2 gap-2 gap-y-14 sm:grid-cols-3 lg:grid-cols-5'>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiJavascript color='#FFD600' style={{ background: 'black' }} />
                                <p>JavaScript</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiHtml5 color='#E44D26' style={{ background: 'white' }} />
                                <p>HTML</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiCss3 color='#0170BA' style={{ background: 'white' }} />
                                <p>CSS</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiJava color='#0170BA' style={{ background: 'white' }} />
                                <p>Java</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiReact color='#61dafb' style={{ background: 'white' }} />
                                <p>React Js</p>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology

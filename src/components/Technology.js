import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiJava, SiMysql, SiReact, SiBootstrap, SiTailwindcss, SiGithub, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiSequelize, SiDocker, SiTypescript, SiDart, SiFirebase, SiPhp } from 'react-icons/si'
import rest from '../assests/rest.png'
import mui from '../assests/mui.png'
import fire from '../assests/firebase.png'
import Zoom from 'react-reveal/Zoom';
import Flutter from '../assests/flutter.png' 
import Dart from '../assests/dart.png' 
import C from '../assests/c.png' 

const Technology = () => {
    return (
        <div name='technology' className='h-[100%] flex flex-col items-center pb-[35px] bg-[#171717] text-white  '>
            <div className='md:w-[90%] lg:w-[80%] flex flex-col items-center'>
                <h1 className='text-4xl sm:text-5xl font-bold mb-4 mt-[80px] md:mt-[120px]'>Technology</h1>
                <hr className='border-t-[#178bff] border-t-[3px] w-[140px] sm:w-[180px] mb-[50px]' />
                <div className='flex flex-col'>
                    <div className=' mt-[10px] grid grid-cols-2 gap-2 gap-y-14 sm:grid-cols-3 lg:grid-cols-5'>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <img src={Flutter} alt='' style={{ background: 'white', width:'18px', height:'18px' }} />
                                <p>Flutter</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <img src={Dart} alt='' style={{ background: 'white', width:'18px', height:'18px' }}  />
                                <p>Dart</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiJavascript color='#FFD600' style={{ background: 'white' }} />
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
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiPhp color='#7377ad' style={{ background: 'white' }} />
                                <p>PHP</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiMysql color='#61dafb' style={{ background: 'white' }} />
                                <p>SQL</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                            <img src={C} alt='' style={{ background: 'white', width:'18px', height:'18px' }}  />
                                <p>C</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiFirebase color='#f7a213' style={{ background: 'white' }} />
                                <p>Firebase</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiNodedotjs color='green' style={{ background: 'white' }} />
                                <p>Node.js</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiMongodb color='green' style={{ background: 'white' }} />
                                <p>MongoDB</p>
                            </div>
                        </Zoom>
                        <Zoom top>
                            <div className='flex items-center box_shadow'>
                                <SiGithub color='black' style={{ background: 'white' }} />
                                <p>Github</p>
                            </div>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology

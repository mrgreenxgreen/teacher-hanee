import React from 'react'
import './Experience.css'
import Pen from '../../assets/pen.png'
import Feature from './Feature'
import { TEAnimation } from "tw-elements-react";

const Experience = () => {
    return (
        <div className='xs:w-4/5 md:w-full h-screen flex justify-center  xs:h-screen   md:h-screen' id='ExperienceContainer' >
            <div id="MarginLine" className='xs:w-1 md:w-1/12 xs:ml-0 md:ml-5'>

            </div>

            <div className=' flex  flex-col items-center absolute h-screen' style={{ overflow: 'scroll' }} id='Exp'>
                <div className='w-1/2 xs:w-full md:w-3/4 lg:w-3/4 flex flex-col ' id='FeaturedExperience' >
                    <div className='flex '  >
                        <TEAnimation
                            animation="[fade-in_1s_ease-in-out]"
                            start="onScroll"
                            repeatOnScroll
                            className="[&>svg]:w-11"
                        >
                            <p className='mt-10 ml-20 xs:text-5xl sm:text-5xl md:text-4xl lg:text-7xl lg:mt-8 font-bold '
                                style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive', fontStyle: 'italic' }}>
                                Teaching Experience
                            </p>
                        </TEAnimation>
                        <div className=' xs:w-5/12 lg:w-2/12 xs:mr-20 lg:mr-0  '  >
                            <TEAnimation
                                animation="[slide-in-left_1s_ease-in-out]"
                                start="onScroll"
                                repeatOnScroll
                                className="[&>svg]:w-11"
                            >
                                <img src={Pen} alt='pen' />
                            </TEAnimation>
                        </div>
                    </div>
                    <div className='ml-20'>
                        <Feature />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
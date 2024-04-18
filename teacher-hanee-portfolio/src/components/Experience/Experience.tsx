import React from 'react'
import './Experience.css'
import Pen from '../../assets/pen.png'
import Feature from './Feature'
const Experience = () => {
    return (
        <div className=' h-screen  xs:h-screen   md:h-screen'  id='ExperienceContainer' style={{padding:"5px"}}>
            <div id="MarginLine">

            </div>

            <div className=' flex  flex-col items-center absolute h-screen' style={{overflow:'scroll'}} id='Exp'>
              
       
                <div className='w-1/2 xs:w-full md:w-3/4 lg:w-3/4 flex flex-col '  >
               
                <div className='flex justify-center ' >
                    <p className='mt-10 s xs:text-2xl sm:text-2xl md:text-4xl lg:text-7xl lg:mt-8 font-bold ' style={{fontFamily:'"Comic Sans MS", "Comic Sans", cursive',fontStyle:'italic'}}> Teaching Experience</p>
                    <div className=' w-2/12 z-2 '  >
                        <img src={Pen} alt='pen' />
                    </div>
                </div>
                        <Feature />
                        
                </div>
                </div>
           


        </div>
    )
}

export default Experience
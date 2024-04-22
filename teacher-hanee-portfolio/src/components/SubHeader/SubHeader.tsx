import React from 'react'
import Years from './Years'
import Features from './Features'
import { TEAnimation } from "tw-elements-react";
const SubHeader = () => {
    return (
        <div id='SubHeaderContainer' className='flex justify-between w-full xs:flex-col sm:flex-col md:flex-col lg:flex-row ' style={{ gap: "25px" }}>
            <TEAnimation
                animation="[slide-in-left_1s_ease-in-out]"
                start="onLoad"
                repeatOnScroll
                className="[&>svg]:w-11"
            >
                <div id='Sub1' className="bg-pink-500/10 shadow-md rounded-lg border border-white/20  justify-center items-center flex sx:w-full "
                    style={{ width: "", padding: "25px", height: "fit-content", backdropFilter: 'blur( 2.5px )', filter: 'drop-shadow(1px 1px 1px #5116a9)' }}>
                    <div>
                        <Years />
                 </div>
                </div>
            </TEAnimation>
            <TEAnimation
                animation="[slide-in-up_1s_ease-in-out]"
                start="onLoad"
                repeatOnScroll
                className="[&>svg]:w-11"
            >
                <div id='Sub2' className="bg-pink-500/10 shadow-md rounded-lg border border-white/20 sx:w-full sm:w-full justify-center items-center flex"
                    style={{ padding: "25px", width: "", height: "fit-content", backdropFilter: 'blur( 2.5px )', filter: 'drop-shadow(1px 1px 1px #5116a9)' }}>
                    <Features />
                </div>
            </TEAnimation>
        </div >
    )
}

export default SubHeader


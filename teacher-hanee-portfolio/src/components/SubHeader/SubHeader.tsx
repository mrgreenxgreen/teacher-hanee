import React from 'react'

const SubHeader = () => {
    return (
        <div id='SubHeaderContainer' className='flex justify-between w-full' style={{gap:"25px"}}>
            <div id='Sub1' className="bg-pink-500/10 shadow-md rounded-lg border border-white/20  justify-center items-center flex sx:w-full " style={{ width: "375px",height:"315px", backdropFilter: 'blur( 2.5px )', filter: 'drop-shadow(1px 1px 1px #5116a9)' }}>
                <div>
                    <div>with more than</div>
                    <div className='flex gap-3'><p>6</p> <p>years</p></div>
                    <div>experience</div>
                </div>
            </div>
            <div id='Sub2' className="bg-pink-500/10 shadow-md rounded-lg border border-white/20 sx:w-full sm:w-full justify-center items-center flex" style={{ width: "1000px", height:"315px", backdropFilter: 'blur( 2.5px )', filter: 'drop-shadow(1px 1px 1px #5116a9)' }}>
                images
            </div>
        </div>
    )
}

export default SubHeader


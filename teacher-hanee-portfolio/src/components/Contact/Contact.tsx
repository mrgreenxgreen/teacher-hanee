import React from 'react'
import './Contact.css'
import D3me from '../../assets/3dteacher.png'

const Contact = () => {
    return (
        <div id='ContactContainer' className='h-screen  xs:p-0 md:p-10 w-full flex'>

            <div id='ContactContent' className='w-full bg-red-800  flex flex-col items-center'>

                <div className='w-full flex flex-col items-center xs:m-0 md:m-10'>

                    <p className='text-5xl font-bold'>Contact me</p>

                    <p className='xs:w-11/12 md:w-1/2 text-left'>
                        It is best to contact me for specific details.  Different rates may apply depending on several factors.
                        You may contact me on the following:
                    </p>
                    <div className='text-left xs:w-full md:w-1/2  xs:px-3 md:px-10 lg:px-20'>
                        <div>
                            F: <u className='text-blue-800'>https://www.facebook.com/auffs</u>
                        </div>

                        <div>
                            G: haneegerona@gmail.com
                        </div>
                        <div>
                            P: 09073157297
                        </div>
                        <div>
                            A: Taguig City, Philippines
                        </div>
                    </div>
                </div>
                <div>
                    <img src={D3me} alt="3d me" style={{ width: '300px',height:'500px',margin:'auto' }} />

                </div>
            </div>

        </div>
    )
}

export default Contact
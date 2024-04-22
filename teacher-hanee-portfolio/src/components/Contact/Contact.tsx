import React from 'react'
import './Contact.css'
import D3me from '../../assets/3dteacher.png'
import { TEAnimation } from "tw-elements-react";

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
                        <div className='flex'>
                            {/* <!-- Facebook --> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                style={{ color: "#1877f2" }}
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg> :  <u className='text-blue-800'> https://www.facebook.com/auffs</u>
                        </div>

                        <div className='flex'>
                            {/* <!-- Google --> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                style={{ color: "#ea4335" }}
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg> : haneegerona@gmail.com
                        </div>
                        <div className='flex'>

                            {/* <!-- Whatsapp --> */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="currentColor"
                                style={{ color: "#128c7e" }}
                                viewBox="0 0 24 24"
                            >
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>: 09073157297
                        </div>
                        <div>
                            Location : Taguig City, Philippines
                        </div>
                    </div>
                </div>
                <div>
                    <TEAnimation
                        animation="[slide-in-left_1s_ease-in-out]"
                        start="onScroll"
                        repeatOnScroll
                        className="[&>svg]:w-11"
                    >
                        <img src={D3me} alt="3d me" style={{ width: '300px', height: '500px', margin: 'auto' }} />
                    </TEAnimation>
                </div>
            </div>

        </div>
    )
}

export default Contact
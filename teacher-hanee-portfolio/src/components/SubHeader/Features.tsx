import React from 'react'
import './Features.css'
import F1 from '../../assets/hanee1.jpg'
import F2 from '../../assets/hanee2.jpg'
import F3 from '../../assets/hanee3.jpg'
import F4 from '../../assets/hanee4.jpg'
import F5 from '../../assets/hanee5.jpg'
import F6 from '../../assets/tcher3.jpg'
import F7 from '../../assets/diploma.jpg'
import F8 from '../../assets/skills.jpg'
import F9 from '../../assets/contact.jpg'

const Features = () => {
    return (
        <>

            <div id='FeaturesContainer' className='flex flex-row gap-7'>
                <div className="container my-2 mx-auto md:px-6">

                    <div className="grid gap-2 lg:grid-cols-4">
                        <div
                            id='Feat'
                            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <img
                                src={F6}
                                className="w-full align-middle transition duration-300 ease-linear" />
                            <a href="#Experience">
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                                    <div className="flex h-full items-end justify-start">
                                        <div className="m-6 text-white">
                                            <h5 className="mb-3 text-lg font-bold">Teaching Experience</h5>
                                            <p>
                                                <small>Teaching kids as young as two years old </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                            </a>
                        </div>

                        <div
                            id='Feat'
                            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <img
                                src={F7}
                                className="w-full align-middle transition duration-300 ease-linear" />
                            <a href="#Experience">
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                                    <div className="flex h-full items-end justify-start">
                                        <div className="m-6 text-white">
                                            <h5 className="mb-3 text-lg font-bold">Education</h5>
                                            <p>
                                                <small>Bachelor of Elementary Education</small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                            </a>
                        </div>

               

                        <div
                            id='Feat'
                            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <img
                                src={F8}
                                className="w-full align-middle transition duration-300 ease-linear" />
                            <a href="#SkillsAndCertifications">
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                                    <div className="flex h-full items-end justify-start">
                                        <div className="m-6 text-white">
                                            <h5 className="mb-3 text-lg font-bold">Skills & Certifications</h5>
                                            <p>
                                                <small>Life-long learning in pursuit of excellence  </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                            </a>
                        </div>

                        <div
                            id='Feat'
                            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <img
                                src={F9}
                                className="w-full align-middle transition duration-300 ease-linear" />
                            <a href="#Education">
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                                    <div className="flex h-full items-end justify-start">
                                        <div className="m-6 text-white">
                                            <h5 className="mb-3 text-lg font-bold">
                                                Contact Details
                                            </h5>
                                            <p>
                                                <small>Bachelor of Elementary Education <u>April 2018</u> </small>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)]"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
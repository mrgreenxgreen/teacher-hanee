import React from 'react'
import Pen from '../../assets/pen.png'
import X1 from '../../assets/hanee2.jpg'
import X2 from '../../assets/tutor.png'
import X3 from '../../assets/snappys.jpg'
import X4 from '../../assets/hanee3.jpg'



import F1 from '../../assets/hanee1.jpg'
import F2 from '../../assets/hanee2.jpg'
import F3 from '../../assets/hanee3.jpg'
import F4 from '../../assets/hanee4.jpg'
import F5 from '../../assets/hanee5.jpg'
import F6 from '../../assets/tcher3.jpg'
import F7 from '../../assets/diploma.jpg'
import F8 from '../../assets/skills.jpg'
import F9 from '../../assets/contact.jpg'




const Feature = () => {
    return (

        <div className='flex flex-row gap-7'>
            <div className="container my-2 mx-auto md:px-6">

                <div className="grid gap-10 grid-cols-1 mb-20 py-20">
                    <div className='flex gap-5 xs:flex-col md:flex-row'>
                        <div
                            id='Feat'
                            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <img
                                src={X3}
                                className="w-full align-middle transition duration-300 ease-linear" />

                        </div>
                        <p className='text-black pr-6'>

                            <small>July 2022 - May 2023</small>
                            <p className='text-2xl font-bold'>Kindergarten/Nursery Adviser/Subject Teacher -<br /> English, Social Studies, Computer Values Teacher</p>

                            <p> Snappy's Kiddie School Inc.,</p>
                            <small>
                                • Source of knowledge and authority<br />
                                • Creating a classroom environment which is often more collaborative and less hierarchical <br />
                                • Emphasizes group work and discussion

                            </small>
                        </p>
                    </div>

                    <div className='flex gap-5 xs:flex-col md:flex-row'>
                        <div
                            id='Feat'
                            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <img
                                src={F5}
                                className="w-full align-middle transition duration-300 ease-linear" />
                        </div>
                        <p className='text-black pr-6'>
                            <small>January 2021 - June 2022</small>
                            <p className='text-2xl font-bold'>Homeschool Teacher</p>
                            <p>Nanay Bebot Child Care and Tutorial Center</p>
                            <small>
                                • Taught subjects: Math, Science, Social Studies, Reading, Writing, Language, Phonics, and Spelling.
                            </small>
                        </p>
                    </div>

                    <div className='flex gap-5 xs:flex-col md:flex-row'>
                        <div
                            id='Feat'
                            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <img
                                src={F1}
                                className="w-full align-middle transition duration-300 ease-linear" />

                        </div>
                        <p className='text-black pr-6'>
                            <small>June 2018 - May 2020</small>

                            <p className='text-2xl font-bold'>Nursery Teacher</p>
                            <p>Maria Jenneil Learning Center</p>
                            <small>
                                • Helped babies and children up to five years old to develop and learn in a safe and supportive setting
                            </small>

                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Feature
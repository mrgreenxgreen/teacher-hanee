import React from 'react'
import Pen from '../../assets/pen.png'
import X1 from '../../assets/hanee2.jpg'
import X2 from '../../assets/tutor.png'
import X3 from '../../assets/snappys.jpg'
import X4 from '../../assets/hanee3.jpg'
const Feature = () => {
    return (
        <div>
              
                
            <div className='p-4 flex flex-col m-auto xs:flex-col xs:m-auto md:flex-row md:m-0 lg:flex-row'>
                <div className='ml-8 xs:w-9/12  lg:w-1/6' style={{ border: '1px solid red' }}>
                    <img src={X1} alt='exp' />
                </div>
                <div className='ml-8'>
                <small>May 2018 - May 2023</small>
                    <p className='text-2xl font-bold'>Kindergarten/Nursery Adviser/Subject Teacher -<br/> English, Social Studies, Computer Values Teacher</p>
                 
                    <p> Snappy's Kiddie School Inc.,</p>
                    <small>
                    • Taught primary levels<br/>
                    • Source of knowledge and authority<br/>
                    • Creating a classroom environment which is often more collaborative and less hierarchical <br/>
                    • Emphasizes group work and discussion

                    </small>
                </div>
            </div>
            <div className='p-4 flex flex-col m-auto xs:flex-col xs:m-auto md:flex-row md:m-0 lg:flex-row'>
                <div className='ml-8 xs:w-9/12  lg:w-1/6' style={{ border: '1px solid red' }}>
                    <img src={X3} alt='exp' />
                </div>
                <div className='ml-8'>
                <small>May 2022 - October 2022</small>
                    <p className='text-2xl font-bold'>ESL Teacher</p>
              
                    <p>51 talk</p>
                    <small>
                    • Taught english as a second language to non-native speakers
                    </small>
                </div>
            </div>
            <div className='p-4 flex flex-col m-auto xs:flex-col xs:m-auto md:flex-row md:m-0 lg:flex-row'>
                <div className='ml-8 xs:w-9/12  lg:w-1/6' style={{ border: '1px solid red' }}>
                    <img src={X2} alt='exp' />
                </div>
                <div className='ml-8'>
                <small>January 2021 - June 2022</small>

                    <p className='text-2xl font-bold'>Homeschool Teacher</p>
                    <p>Nanay Bebot Child Care and Tutorial Center</p>
                    <small>
                    • Taught subjects: Math, Science, Social Studies, Reading, Writing, Language, Phonics, and Spelling. 
                    </small>
                </div>
            </div>
            <div className='p-4 flex flex-col m-auto xs:flex-col xs:m-auto md:flex-row md:m-0 lg:flex-row'>
                <div className='ml-8 xs:w-9/12  lg:w-1/6' style={{ border: '1px solid red' }}>
                    <img src={X4} alt='exp' />
                </div>
                <div className='ml-8'>
                <small>June 2018 - May 2020</small>

                    <p className='text-2xl font-bold'>Nursery Teacher</p>
                    <p>Maria Jenneil Learning Center</p>
                    <small>
                    • Helped babies and children up to five years old to develop and learn in a safe and supportive setting 
                    </small>
                </div>
            </div>
            
         
        
        </div>
    )
}

export default Feature
import React from 'react'
import Diploma from "../../assets/diplomacap.png"

const Education = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center flex-col'>
      <img src={Diploma} className='w-1/2' />
      <div className='text-center'>
        <p>Bachelor of Elementary Education <i>-  Specialization in Early Childhood Education</i></p>
        <p>June 2014 - April 2018</p>
        <p>Southen Bicol College</p>
        <p>Mabini St., Masbate City, Philippines</p>
      </div>
    </div>
  )
}

export default Education
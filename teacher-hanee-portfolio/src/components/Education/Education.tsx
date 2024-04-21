import React from 'react'
import Diploma from "../../assets/diplomacap.png"

const Education = () => {
  return (
    <div className='w-full h-screen flex items-center flex-col pt-20'>
      <img src={Diploma} className='w-1/2' />
      <div className='text-center'>
  

        <p className=' font-bold xs:text-xl sm:text-2xl md:text-3xl lg:5xl'>Bachelor of Elementary Education <i className='xs:text-base xs:font-normal md:font-bold lg:text-2xl '><br />  (Specialization in Early Childhood Education)</i></p>
        <p className='xs:text-base md:text-xl lg:text-2xl'>June 2014 - April 2018</p>
        <p className='xs:text-base x lg:text-3xl font-bold'>Southern Bicol College</p>
        <p className=' xs:text-sm md:text-base  '>Mabini St., Masbate City, Philippines</p>
        <button role="button" className="golden-button">
          <span className="golden-text">
            Download Résumé
          </span>
        </button>
      </div>
    </div>
  )
}

export default Education
import React from 'react'

const SkilsAndCertification = () => {
  return (
    <div className='w-full h-screen text-center flex items-center justify-center flex-wrap'>
      <div style={{height:"fit-content",width:"300px",textAlign:"left"}}>     
         <p>Hard Skils:</p>
        <p>
          Curriculum development<br />
          Classroom management<br />
          Early childhood education<br />
          Technology proficiency<br />
          Second language skills<br /><br />
        </p>
      </div>
      <div style={{height:"fit-content",width:"300px",textAlign:"left"}}>
        <p>
          Soft Skills:
          <br /><br />
          Communication<br />
          Patience<br />
          Empathy<br />
          Creativity<br />
          Problem-solving<br />
          Teamwork<br />
        </p>
      </div>
      <div style={{height:"fit-content",width:"300px",textAlign:"left",background:"red",wordBreak:"break-word"}}>
        <p>Certifications:</p>
        <div className=' w-96'>
          <p>
            •  Basic Computer Literacy<small>  January 2024</small>
          </p>
          <p >
            • Division Training of Kindergarten Teachers on Developmentally Appropriate and Contextually Appropriate Practices
            <small>    September 2018</small>
          </p>
          <p>
            •  National Theater Arts Seminar Workshops for Teachers & College Students
            <small>      August 2018
            </small>
          </p>
          <p>
            • Disaster Awareness Seminar "Save Lives be Aware and Ready for Disaster"
          </p>
          <p>
            •  Enhancing Communication Skills through Campus Journalism
          </p>
        </div>
      </div>
    </div>
  )
}

export default SkilsAndCertification
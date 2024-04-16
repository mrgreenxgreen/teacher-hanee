import { TERipple } from "tw-elements-react"
import ProfPic from "../../assets/dp3.png"
import Award from "../../assets/award.png"
import "./Header.css"
const Header = () => {
  return (

    <div id='Container' className='w-fit '>
      <div className='flex flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row'>
        <div style={{ background: "", color: "gray", height: "fit-content", padding: "25px" }}>

          <h1 className=" stroke-slate-700 text-7xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-l  from-purple-950 to-fuchsia-900">
            Hi, I'm
            Teacher Hanee
          </h1>
          <h5 style={{marginBottom:"35px",textAlign:"left",fontSize:"20px",color:"#333",fontWeight:"bold",}}>
             Licensed Professional Teacher with Specialization in Early Childhood Education.
          </h5>
          <div className="flex items-center  gap-5  xl:flex-row lg:flex-row  md:flex-col  sm:flex-col xs:flex-col">
            <button role="button" className="golden-button">
              <span className="golden-text">AVAIL TUTORIAL SERVICES</span>
            </button>
            {/* <button className="Btn">
            </button> */}
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Learn More</span>
            </button>
          </div>
        </div>
        <div style={{ display: "flex",justifyContent:"center",alignItems:"center", flexDirection: "column", gap: "25px" }}>


          <div style={{ height: "325px", width: "325px", background: "orchid",border:"4px solid rgb(46, 0, 77)", borderRadius: "50%", display: "flex", justifyContent: "center", overflow: 'hidden' }}>
            <img src={ProfPic} alt="teacher hanee" style={{ height: "450px", width: "375px",}} />
          </div>

        </div>

      </div>
      <div className='flex items-center justify-center gap-2'>

        {/* <!-- Google --> */}
        <TERipple rippleColor="light">
          <button
            type="button"
            className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style={{ backgroundColor: "#ea4335" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </TERipple>
        {/* <!-- Linkedin --> */}
        <TERipple rippleColor="light">
          <button
            type="button"
            className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style={{ backgroundColor: "#0077b5" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </button>
        </TERipple>
        {/* <!-- Messenger --> */}
        <TERipple rippleColor="light">
          <button
            type="button"
            className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style={{ backgroundColor: "#0084ff" }}
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M12 0c-6.627 0-12 4.975-12 11.111 0 3.497 1.745 6.616 4.472 8.652v4.237l4.086-2.242c1.09.301 2.246.464 3.442.464 6.627 0 12-4.974 12-11.111 0-6.136-5.373-11.111-12-11.111zm1.193 14.963l-3.056-3.259-5.963 3.259 6.559-6.963 3.13 3.259 5.889-3.259-6.559 6.963z" />
            </svg>
          </button>
        </TERipple>
        {/* <!-- Whatsapp --> */}
        <TERipple rippleColor="light">
          <button
            type="button"
            className="inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
            style={{ backgroundColor: "#128c7e" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4S w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </button>
        </TERipple>


      </div>
    </div>

  )
}

export default Header
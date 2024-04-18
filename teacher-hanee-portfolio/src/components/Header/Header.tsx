import { TERipple } from "tw-elements-react"
import ProfPic from "../../assets/dp3.png"
import Award from "../../assets/award.png"
import "./Header.css"
import SubHeader from "../SubHeader/SubHeader"
const Header = () => {
  return (

    <div id='Container' className='w-3/4 '>
      <div className='flex justify-evenly flex-col-reverse xs:flex-col-reverse sm:flex-col-reverse md:flex-row lg:flex-row xl:flex-row 2xl:flex-row'>
        <div style={{ background: "", color: "gray", height: "fit-content", padding: "25px" }}>

          <p className=" stroke-slate-700 text-purple-600 text-7xl text-left font-extrabold " style={{ filter: "drop-shadow(1px 1px 1px #5116a9)" }}>
            Hi, I'm
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r  from-yellow-500 via-amber-200 to-yellow-500 ml-5 xs:ml-1 md:ml-5">Teacher Hanee</span>

          </p>
          <h6 style={{ marginBottom: "35px", textAlign: "left", fontSize: "20px", color: "#333", fontWeight: "400", }}>
            Licensed Professional Teacher with Specialization in Early Childhood Education.
          </h6>
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
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "25px" }}>


          <div style={{ height: "325px", width: "325px", background: "linear-gradient(to right,darkorchid,pink,darkorchid) ", filter: "drop-shadow(1px 1px 1px #5116a9)", border: "8px solid rgb(46, 0, 77)", borderRadius: "50%", display: "flex", justifyContent: "center", overflow: 'hidden' }}>
            <img src={ProfPic} alt="teacher hanee" style={{ height: "450px", width: "375px", }} />
          </div>

        </div>

      </div>
      
    
    </div>

  )
}

export default Header
import Contact from "../components/Contact/Contact"
import Education from "../components/Education/Education"
import Experience from "../components/Experience/Experience"
import Header from "../components/Header/Header"
import SkilsAndCertifications from "../components/SkillsAndCertification/SkilsAndCertification"
import SubHeader from "../components/SubHeader/SubHeader"
// import "../index.css"

const Home = () => {
  return (

    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "25px"}}>
      <section style={{display:'flex',justifyContent:'center',flexDirection:'column',gap:'25px'}} >
        <Header />
        <SubHeader />
      </section>
      <section id='Experience' className=" h-screen w-3/4 flex flex-col " >
        <Experience />
      </section>
      <section id='Education'className="w-3/4 h-screen text-center "  >
        <Education />
      </section>
      {/* <section id='SkillsAndCertifications' className="w-3/4 h-screen">
        <SkilsAndCertifications />
      </section> */}
      <section id='Contact' className="w-3/4 h-screen text-center">
        <Contact/>
      </section> 
    </div>

  )
}

export default Home
import "./styles.css";
import { LoremIpsum } from "./components/LoremIpsum";
import { motion, useScroll, useSpring } from "framer-motion";
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu/Menu";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="MainContainer">


      <div id="Navbar" >
        <a href="#" >
        <div className="flex items-center text-xl italic" style={{fontFamily:'"Comic Sans MS", "Comic Sans", cursive',cursor:"pointer",paddingLeft:"5px",paddingRight:"5px",borderRadius:"10px"}}>


          <div style={{filter: " drop-shadow(1px 1px 1px #5116a9)"}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" baseProfile="basic"><linearGradient id="FgxNATYU59QhYwFJ_C6Qta" x1="24" x2="24" y1="21.217" y2="46.652" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#c99fff" /><stop offset=".219" stop-color="#be85ff" /><stop offset="1" stop-color="#962aff" /></linearGradient><path fill="url(#FgxNATYU59QhYwFJ_C6Qta)" d="M40,23H8c-0.552,0-1,0.448-1,1v20c0,0.552,0.448,1,1,1h11c0.552,0,1-0.448,1-1V34	c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1v10c0,0.552,0.448,1,1,1h11c0.552,0,1-0.448,1-1V24C41,23.448,40.552,23,40,23z" /><path fill="#ad5eff" d="M4.805,26h38.284c0.342,0,0.646-0.083,0.911-0.218v-1.855C44,21.761,42.206,20,40,20H8 c-2.206,0-4,1.761-4,3.927v1.907C4.24,25.938,4.509,26,4.805,26z" opacity=".1" /><path fill="#ad5eff" d="M4.805,26h38.284c0.056,0,0.107-0.009,0.161-0.013v-2.059 c0-1.76-1.457-3.191-3.25-3.191H8c-1.793,0-3.25,1.431-3.25,3.191v2.067C4.769,25.995,4.786,26,4.805,26z" opacity=".2" /><path fill="#ad5eff" d="M42.5,26v-2.073c0-1.354-1.121-2.455-2.5-2.455H8c-1.379,0-2.5,1.1-2.5,2.455V26H42.5z" opacity=".3" /><path fill="#ad5eff" d="M41.75,26v-2.073c0-0.948-0.784-1.718-1.75-1.718H8c-0.966,0-1.75,0.77-1.75,1.718V26 H41.75z" opacity=".4" /><path fill="#ad5eff" d="M41,26v-2.073c0-0.542-0.448-0.982-1-0.982H8c-0.552,0-1,0.44-1,0.982V26H41z" opacity=".5" /><path fill="#a64eff" d="M41,28v-4c0-0.552-0.448-1-1-1H8c-0.552,0-1,0.448-1,1v4H41z" opacity=".1" /><path fill="#a64eff" d="M41,27.6V24c0-0.552-0.448-1-1-1H8c-0.552,0-1,0.448-1,1v3.6H41z" opacity=".15" /><path fill="#a64eff" d="M41,27.2V24c0-0.552-0.448-1-1-1H8c-0.552,0-1,0.448-1,1v3.2H41z" opacity=".2" /><path fill="#a64eff" d="M41,26.8V24c0-0.552-0.448-1-1-1H8c-0.552,0-1,0.448-1,1v2.8H41z" opacity=".25" /><path fill="#a64eff" d="M41,26.4V24c0-0.552-0.448-1-1-1H8c-0.552,0-1,0.448-1,1v2.4H41z" opacity=".3" /><path fill="#a64eff" d="M41,26v-2c0-0.552-0.448-1-1-1H8c-0.552,0-1,0.448-1,1v2H41z" opacity=".3" /><linearGradient id="FgxNATYU59QhYwFJ_C6Qtb" x1="23.947" x2="23.947" y1="25.198" y2="-10.968" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4eaefe" stop-opacity=".2" /><stop offset="1" stop-color="#41a2fe" stop-opacity=".4" /></linearGradient><path fill="url(#FgxNATYU59QhYwFJ_C6Qtb)" d="M44.508,22.607L37,15.083V5.985	c0-0.55-0.448-0.995-1-0.995h-3c-0.552,0-1,0.446-1,0.995v4.088l-6.634-6.647c-0.782-0.784-2.056-0.784-2.838,0L3.386,22.607	C2.133,23.863,3.027,26,4.805,26h38.284C44.868,26,45.762,23.863,44.508,22.607z" /><linearGradient id="FgxNATYU59QhYwFJ_C6Qtc" x1="23.947" x2="23.947" y1="28.341" y2="16.176" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".2" /><stop offset="1" stop-color="#71b5ff" stop-opacity=".4" /></linearGradient><path fill="url(#FgxNATYU59QhYwFJ_C6Qtc)" d="M23.947,3.336	c0.403,0,0.781,0.157,1.064,0.441l6.634,6.647L32.5,11.28v-1.207V5.985c0-0.274,0.224-0.498,0.5-0.498h3	c0.276,0,0.5,0.223,0.5,0.498v9.098v0.205l0.145,0.146l7.508,7.524c0.52,0.521,0.506,1.181,0.321,1.626	c-0.186,0.444-0.647,0.919-1.385,0.919H4.805c-0.738,0-1.199-0.475-1.385-0.919c-0.186-0.444-0.199-1.105,0.321-1.626L22.883,3.777	C23.167,3.492,23.545,3.336,23.947,3.336L23.947,3.336 M23.947,2.838c-0.514,0-1.028,0.196-1.419,0.588L3.386,22.607	C2.133,23.863,3.027,26,4.805,26h38.284c1.779,0,2.672-2.137,1.419-3.393L37,15.083V5.985c0-0.55-0.448-0.995-1-0.995h-3	c-0.552,0-1,0.446-1,0.995v4.088l-6.634-6.647C24.975,3.034,24.461,2.838,23.947,2.838L23.947,2.838z" /></svg>
          </div>
          Hanee's <br/> Tutorial
        </div>
        </a>
        <div style={{position:"absolute",right:"20px",top:"10px",}}>
          <Menu/>
        </div>
      </div>

      <div style={{ marginTop: "100px", }}>
        <Outlet />
      </div>
      </div>

    </>
  );
}


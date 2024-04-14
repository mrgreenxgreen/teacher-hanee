import "./styles.css";
import { LoremIpsum } from "./components/LoremIpsum";
import { motion, useScroll, useSpring } from "framer-motion";
import { Outlet } from "react-router-dom";

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
        <div style={{marginTop:"15px",paddingLeft:"15px",paddingRight:"15px",display:"flex",justifyContent:"space-between"}}>
          <div>Hanee</div>
          <div>Settings</div>
        </div>
   

      <Outlet/>
    </>
  );
}


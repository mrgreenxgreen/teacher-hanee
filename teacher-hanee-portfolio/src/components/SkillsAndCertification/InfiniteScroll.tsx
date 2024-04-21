import "./styles.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import { wrap } from "@motionone/utils";
import Me from "../../assets/hanee3.jpg"

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) 
{
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
     
      </motion.div>
    </div>
  );
}

export default function InfiniteScroll() {
  return (
    <section style={{display:'flex',gap:"100px",flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100vh'}}
    className="xs:w-full md:w-3/4"
 
    >
      <ParallaxText baseVelocity={-6}>
        • Understanding of child development milestones • Curriculum development and implementation • Play-based learning 
      
      </ParallaxText>
      
      <div style={{width:"fit-content",height:"300px", padding:'0px',borderRadius:"20px",   background: 'rgb(255, 153, 255,0.1)',
    filter:'drop-shadow(1px 1px 1px #5116a9)',   border: '1px solid rgba( 255, 255, 255, 0.18 )'

      }}>
     <img src={Me} alt="me" style={{height:"100%"}}/>
      </div>
            <ParallaxText baseVelocity={6}> 
            • Classroom management Daily routine development and implementation • Behavior management • Collaboration with parents and caregivers
       
            </ParallaxText>
    </section>
  );
}

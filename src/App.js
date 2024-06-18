import { useRef } from 'react';
import './App.css';
import { useScroll, useTransform, motion } from 'framer-motion';

function App() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })

  return (
    <main ref={container} className="relative h-[500vh] custom-gradient">
      <Section1 scrollYProgress={scrollYProgress}/>
      <Section2 scrollYProgress={scrollYProgress}/>
      <Section3 scrollYProgress={scrollYProgress}/>
      <Section4 scrollYProgress={scrollYProgress}/>
      <Section5 scrollYProgress={scrollYProgress}/>
    </main>
  );
}

const Section1 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 0.2], [0, -3])

  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen bg-red-500 text-white 
    flex flex-col items-center justify-center pb-[10vh] text-4xl'>
      Fotos
    </motion.div>
  )
}

const Section2 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.2, 0.4], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0.2, 0.4], [0, 3])
  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen bg-blue-500 text-white 
    flex flex-col items-center justify-center pb-[10vh] text-4xl'>
      Cartas
    </motion.div>
  )
}

const Section3 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.4, 0.6], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0.4, 0.6], [0, -4])

  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen bg-green-500 text-white 
    flex flex-col items-center justify-center pb-[10vh] text-4xl'>
      Textos
    </motion.div>
  )

}
const Section4 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.6, 0.8], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0.6, 0.8], [0, 4])

  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen bg-yellow-500 text-white 
    flex flex-col items-center justify-center pb-[10vh] text-4xl'>
      Conversas
    </motion.div>
  )
}

const Section5 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0.8, 1], [-10, 0])

  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen bg-purple-500 text-white 
    flex flex-col items-center justify-center pb-[10vh] text-4xl'>
      Provas
    </motion.div>
  )
}

export default App;

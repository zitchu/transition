/* import { useRef } from 'react';
import './App.css';
import { useScroll, useTransform, motion } from 'framer-motion';

function App() {

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  })

  return (
    <main ref={container} className="relative h-[1000vh] bg-[darkgoldenrod]">
      <Section1 scrollYProgress={scrollYProgress}/>
      <Section2 scrollYProgress={scrollYProgress}/>
      <Section3 scrollYProgress={scrollYProgress}/>
      <Section4 scrollYProgress={scrollYProgress}/>
      <Section5 scrollYProgress={scrollYProgress}/>
      <Section6 scrollYProgress={scrollYProgress}/>
      <Section7 scrollYProgress={scrollYProgress}/>
      <Section8 scrollYProgress={scrollYProgress}/>
      <Section9 scrollYProgress={scrollYProgress}/>
      <Section10 scrollYProgress={scrollYProgress}/>
    </main>
  );
}

const Section1 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 0.1], [0, -3])

  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen  text-blue-800 
    flex flex-col items-center justify-center pb-[10vh] notebook shadow-lg text-4xl'>
      NFe
    </motion.div>
  )
}

const Section2 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.1, 0.2], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0.1, 0.2], [0, 3])
  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen  text-blue-800 
    flex flex-col items-center justify-center pb-[10vh] notebook shadow-lg text-4xl'>
      NFSe
    </motion.div>
  )
}

const Section3 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.2, 0.3], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0.2, 0.3], [0, -4])

  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen  text-blue-800 
    flex flex-col items-center justify-center pb-[10vh] notebook shadow-lg text-4xl'>
      CTe
    </motion.div>
  )

}
const Section4 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.3, 0.4], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0.3, 0.4], [0, 4])

  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen  text-blue-800 
    flex flex-col items-center justify-center pb-[10vh] notebook shadow-lg text-4xl'>
      CFe SAT
    </motion.div>
  )
}

const Section5 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.4, 0.5], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0.4, 0.5], [-10, 0])

  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen  text-blue-800 
    flex flex-col items-center justify-center pb-[10vh] notebook shadow-lg text-4xl'>
      NFCe
    </motion.div>
  )
}

const Section6 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.5, 0.6], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0.5, 0.6], [0, -3])

  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen  text-blue-800 
    flex flex-col items-center justify-center pb-[10vh] notebook shadow-lg text-4xl'>
      MDFe
    </motion.div>
  )
}

const Section7 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.6, 0.7], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0.6, 0.7], [0, 3])
  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen  text-blue-800 
    flex flex-col items-center justify-center pb-[10vh] notebook shadow-lg text-4xl'>
      Boleto
    </motion.div>
  )
}

const Section8 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.7, 0.8], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0.7, 0.8], [0, -4])

  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen  text-blue-800 
    flex flex-col items-center justify-center pb-[10vh] notebook shadow-lg text-4xl'>
      Invoice
    </motion.div>
  )

}
const Section9 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0.8, 0.9], [0, 4])

  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen  text-blue-800 
    flex flex-col items-center justify-center pb-[10vh] notebook shadow-lg text-4xl'>
      NTe
    </motion.div>
  )
}

const Section10 = ({scrollYProgress}) => {

  const scale = useTransform(scrollYProgress, [0.9, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0.9, 1], [-10, 0])

  return (
    <motion.div style={{scale, rotate}} className='sticky top-0 h-screen  text-blue-800 
    flex flex-col items-center justify-center pb-[10vh] notebook shadow-lg text-4xl'>
      Contestação
    </motion.div>
  )
}

export default App;
 */
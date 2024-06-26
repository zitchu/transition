import { useRef } from 'react';
import './App.css';
import { useScroll, useTransform, motion } from 'framer-motion';

const sections = [
  { id: 1, title: "NFe", rotateFrom: 0, rotateTo: -3 },
  { id: 2, title: "NFSe", rotateFrom: 0, rotateTo: 3 },
  { id: 3, title: "CTe", rotateFrom: 0, rotateTo: -4 },
  { id: 4, title: "MDFe", rotateFrom: 0, rotateTo: 4 },
  { id: 5, title: "SAT", rotateFrom: -10, rotateTo: 0 },
  { id: 6, title: "Cupom", rotateFrom: 0, rotateTo: 1 },
  { id: 7, title: "eSocial", rotateFrom: 0, rotateTo: -1 },
  { id: 8, title: "Reinf", rotateFrom: 0, rotateTo: 3 },
  { id: 9, title: "GFIP", rotateFrom: 0, rotateTo: -3 },
  { id: 10, title: "SEFIP", rotateFrom: -4, rotateTo: 0 }
];


function App() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={container} className="relative h-[1000vh] bg-[darkgoldenrod]">
      {sections.map((section, index) => (
        <Section
          key={section.id}
          scrollYProgress={scrollYProgress}
          index={index}
          section={section}
        />
      ))}
    </main>
  );
}

const Section = ({ scrollYProgress, index, section }) => {
  const start = index * 0.1;
  const end = start + 0.1;

  const scale = useTransform(scrollYProgress, [start, end], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [start, end], [section.rotateFrom, section.rotateTo]);

  return (
    <motion.div style={{ scale, rotate }} className='sticky top-0 h-screen text-blue-800 flex flex-col items-center justify-center pb-[10vh] notebook shadow-lg text-4xl'>
      {section.title}
    </motion.div>
  );
};

export default App;

import { useRef } from 'react';
import './App.css';
import { useScroll, useTransform, motion } from 'framer-motion';
import oni from './oni.jfif'
import ernesto from './ernesto.jfif'
import kozo from './kozo.jfif'
import pyxis from './pyxis.jfif'
import remy from './remy.jfif'
import darcell from './darcell.jfif'
import pirata from './pirata.jpg'

const sections = [
  { id: 1,  img:pyxis, title: "Pyxis", rotateFrom: 0, rotateTo: -3, forca: "Inventivo; curioso; máquinas perigosas", fraq: "texto fraq", destino:"destino", hist: "historico", equip: "equip" },
  { id: 2,  img:kozo, title: "Kozo", rotateFrom: 0, rotateTo: 3, forca: "Texto para Kozo", fraq: "texto fraq", destino:"destino", hist: "historico", equip: "equip" },
  { id: 3,  img:"", title: "Schneider", rotateFrom: 0, rotateTo: -4, forca: "Texto para Schneider", fraq: "texto fraq", destino:"destino", hist: "historico", equip: "equip" },
  { id: 4,  img:"", title: "Runara", rotateFrom: 0, rotateTo: 1, forca: "Texto para Cupom", fraq: "texto fraq", destino:"destino", hist: "historico", equip: "equip" },
  { id: 5,  img:remy, title: "Remy", rotateFrom: 0, rotateTo: 4, forca: "Texto para Remy", fraq: "texto fraq", destino:"destino", hist: "historico", equip: "equip" },
  { id: 6,  img:darcell, title: "Darcell", rotateFrom: -10, rotateTo: 0, forca: "Texto para Darcell", fraq: "texto fraq", destino:"destino", hist: "historico", equip: "equip" },
  { id: 7,  img:ernesto, title: "Ernesto", rotateFrom: 0, rotateTo: -1, forca: "Texto para Ernesto", fraq: "texto fraq", destino:"destino", hist: "historico", equip: "equip" },
  { id: 8,  img:oni, title: "Oni", rotateFrom: 0, rotateTo: 3, forca: "Texto para Oni", fraq: "texto fraq", destino:"destino", hist: "historico", equip: "equip" },
  { id: 9,  img:"", title: "Silverhand", rotateFrom: 0, rotateTo: -6, forca: "Texto para Silverhand", fraq: "texto fraq", destino:"destino", hist: "historico", equip: "equip" },
  { id: 10, img:"", title: "Nighthill", rotateFrom: -4, rotateTo: 0, forca: "Texto para Nighthill", fraq: "texto fraq", destino:"destino", hist: "historico", equip: "equip" }
];



function App() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={container} className="relative h-[1000vh] bg-[#3b301b] ">
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
    <motion.div style={{ scale, rotate }} className='sticky top-0 h-screen text-orange-950 flex flex-col items-center justify-center pb-[10vh] notebook shadow-lg text-4xl'>
      <div className='flex flex-row gap-1 w-full h-full p-2'>
        <div className='flex-1 flex justify-center items-center text-center'>
          <img src={section.img} className='w-full h-full object-cover rounded' />
        </div>

        <div className='flex flex-col flex-1 pt-40'>
          <div className=' flex-1'>
            {section.title}
          </div>

          <div className=' flex-1'>
            {section.forca}
          </div>

          <div className=' flex-1'>
            {section.fraq}
          </div>

          <div className=' flex-1'>
            {section.destino}
          </div>

          <div className=' flex-1'>
            {section.hist}
          </div>
          <div className=' flex-1'>
            {section.equip}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default App;


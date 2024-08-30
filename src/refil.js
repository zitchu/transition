import { useRef } from "react";
import "./App.css";
import { useScroll, useTransform, motion } from "framer-motion";
import oni from "./oni.jfif";
import ernesto from "./ernesto.jfif";
import kozo from "./kozo.jfif";
import pyxis from "./pyxis.jfif";
import remy from "./remy.jfif";
import darcell from "./darcell.jfif";
import pirata from "./pirata.jpg";
import rosiel from "./rosiel.jpg";
import night from "./nighthill.jpg";
import silver from "./silverhand.jpg";
import runara from "./runara.jpg";
import clipp from "./clipp.png";
import finger from "./finger.png";

const sections = [
  {
    id: 1,
    img: pyxis,
    title: "Pyxis",
    rotateFrom: 0,
    rotateTo: -3,
    forca: "inventivo, curioso, máquinas perigosas",
    fraq: "apegado demais aos companheiros",
    feitos: "curou a vila de miconídeos",
    observado: "deve estar se tremendo para explodir alguém",
    equip: "bombas caseiras e um constructo",
  },
  {
    id: 2,
    img: kozo,
    title: "Kozo",
    rotateFrom: 0,
    rotateTo: 3,
    forca: "Voador, forte, resistente",
    fraq: "simplório, bruto",
    feitos: "derrotou uma horda de zumbis quase sozinho",
    observado: "tenta bater e sair de perto",
    equip: "espada e força bruta",
  },
  {
    id: 3,
    img: pirata,
    title: "Melasquez",
    rotateFrom: 0,
    rotateTo: -4,
    forca: "bem relacionado, contatos poderosos",
    fraq: "-fraquezas-",
    feitos: "inúmeras histórias de sua comunidade",
    observado: "parece esconder algum objeto",
    equip: "não anda armado",
  },
  {
    id: 4,
    img: runara,
    title: "Runara",
    rotateFrom: 0,
    rotateTo: 1,
    forca: "dragão azul",
    fraq: "dragões não tem fraqueza conhecida",
    feitos: "pacifista em Stormwreck Isle",
    observado: "parece ter derrotado alguns dragões no passado",
    equip: "dragão",
  },
  {
    id: 5,
    img: remy,
    title: "Remy",
    rotateFrom: 0,
    rotateTo: 4,
    forca: "estudioso, mago, furtivo",
    fraq: "alguma questão com suas cartas",
    feitos: "parece ter se dedicado extra ao estudo de dragões",
    observado: "se ausenta na dificuldade",
    equip: "cartas explosivas",
  },
  {
    id: 6,
    img: darcell,
    title: "Darcell",
    rotateFrom: -10,
    rotateTo: 0,
    forca: "devotado, observador, poder divino ",
    fraq: "nobreza e orfãos",
    feitos: "orfão, teve uma visão",
    observado: "observador, apoio",
    equip: "espada divino",
  },
  {
    id: 7,
    img: ernesto,
    title: "Ernesto",
    rotateFrom: 0,
    rotateTo: -1,
    forca: "experiente, sagaz, negociador",
    fraq: "não confia em ninguem",
    feitos: "pequenos e grandes furtos",
    observado: "cleptomaniaco",
    equip: "sempre de chapéu",
  },
  {
    id: 8,
    img: oni,
    title: "Oni Carbon",
    rotateFrom: 0,
    rotateTo: 3,
    forca: "experiência, poder divino, forja",
    fraq: "temperamento anão",
    feitos: "resistente como um anão, mas armadurado",
    observado: "obstinado",
    equip: "martelo divino",
  },
  {
    id: 9,
    img: silver,
    title: "Silverhand",
    rotateFrom: 0,
    rotateTo: -6,
    forca: "misteriosa, ocupada, desconfiada",
    fraq: "confia num grupo fraco",
    feitos: "inúmeros feitos",
    observado: "tem se ausentado menos de Waterdeep",
    equip: "muitos itens mágicos",
  },
  {
    id: 10,
    img: night,
    title: "Nighthill",
    rotateFrom: -4,
    rotateTo: 0,
    forca: "prefeito de greenest",
    fraq: "politica é sua fraqueza",
    feitos: "parece ter escondido quem é até hoje",
    observado: "controla toda a cidade na palma da mão",
    equip: "Guarda de Greenest",
  },
  {
    id: 11,
    img: rosiel,
    title: "Rosiel",
    rotateFrom: -1,
    rotateTo: 0,
    forca: "bardo, rico, viúvo",
    fraq: "-fraquezas-",
    feitos: "não tinha nada ha 3 anos e tem um império agora",
    observado: "ganancioso mas com pouco é desapegado",
    equip: "um baronato",
  },
];

function App() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className="relative h-[1200vh] bg-[#3b301b] ">
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
  const start = index * (1 / 11);
  const end = start + 1 / 11;

  const scale = useTransform(scrollYProgress, [start, end], [1, 0.8]);
  const rotate = useTransform(
    scrollYProgress,
    [start, end],
    [section.rotateFrom, section.rotateTo]
  );

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-full w-[94%] text-orange-950 flex flex-col items-center justify-center pb-[10vh] notebook shadow-lg text-4xl "
    >
      <div className="flex flex-row gap-1 w-full h-full p-2">
        <div className="flex-1 flex justify-center items-center text-center">
          <img
            src={clipp}
            className="absolute -top-[30px] left-0 w-32 opacity-95"
          />

          <img
            src={section.img}
            className="w-full h-full object-cover object-top rounded"
          />
        </div>

        <div className="flex flex-col flex-1 pt-40 pl-2">
          <div className="uppercase flex-1">{section.title}</div>

          <div className=" flex-1">{section.forca}</div>

          <div className=" flex-1">{section.fraq}</div>

          <div className=" flex-1">{section.feitos}</div>

          <div className=" flex-1">{section.observado}</div>
          <div className=" flex-1">{section.equip}</div>
        </div>
        <img
          src={finger}
          className="absolute bottom-0 right-0 w-32 opacity-35"
        />
      </div>
    </motion.div>
  );
};

export default App;

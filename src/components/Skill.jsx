import React from 'react'

/** Components */
import SkillCard from './Skillcard';


const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Herramienta de diseño'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'Interfaz de usuario'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interacción'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Servidor Web'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Marco de nodos'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Base de datos'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'Interfaz de usuario'
    },
  ];

const Skill = () => {
  return (
    <section className='section'>
        <div className="container">
            <h2 className="headline-2 reveal-up">
            Herramientas esenciales que utilizo
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
            Descubra las poderosas herramientas y tecnologías que utilizo para crear sitios web y aplicaciones excepcionales y de alto rendimiento.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc}, Key) =>(
                        <SkillCard
                        key={Key} 
                        imgSrc={imgSrc}
                        label={label}
                        desc={desc}
                        classes='reveal-up'
                        />
                    ))
                }
            </div> 
        </div>
    </section>
  )
}

export default Skill
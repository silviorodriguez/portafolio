import React from 'react'

/** Components */
import ProjectCard from './ProjectCard'

const works = [
    {
      imgSrc: '/images/project-1.jpg',
      title: 'Aplicación de películas',
      tags: ['API', 'MVC', 'Development'],
      projectLink: 'https://movie-red-fronted.vercel.app/'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Aplicación Backend películas',
      tags: ['API', 'SPA'],
      projectLink: 'https://movie-red-backend.vercel.app/'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Juego de memoria',
      tags: ['Development', 'API'],
      projectLink: 'https://game-memory-github-io.vercel.app/'
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Portafolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://portfolio-tawny-tau-76.vercel.app/'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'Sitio web de comercio electrónico',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/silviorodriguez/Pokedex.gitpage.io'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: ' portafolio Personal',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/silviorodriguez/Pinterest'
    },
  ];

const Work = () => {
  return (
    <section
    id='work'
    className='section'
    >
        <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
        Lo más destacado de mi portafolio
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                <ProjectCard 
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                classes='reveal-up'
                />
            ))}
        </div>

        </div>
    </section>
  )
}

export default Work
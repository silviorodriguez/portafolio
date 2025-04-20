/** Node modules */
import React from 'react';
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

/** Register GSAP plugins */
gsap.registerPlugin(useGSAP, ScrollTrigger) 

/** Components */
import ReviewCard from './ReviewCard'

const reviews = [
    {
      content: '¡Desarrollo web excepcional! Entrega sitio fluido y receptivo con código limpio y excelente experiencia de usuario.',
      name: 'Sofia Ramirez',
      imgSrc: '/images/people-1.jpg',
      company: 'PixelForge'
    },
    {
      content: '¡Impresionante trabajo! Tiempos de carga rápidos, diseño intuitivo e integración de backend impecable. Muy recomendable.',
      name: 'Danilo Sanchez',
      imgSrc: '/images/people-2.jpg',
      company: 'NexaWave'
    },
    {
      content: '¡Desarrollador excepcional! Construyó un sitio robusto con una funcionalidad perfecta. Eficiente y detallista.',
      name: 'Alex Arevalo',
      imgSrc: '/images/people-3.jpg',
      company: 'CodeCraft'
    },
    {
      content: '¡Creativo y habilidoso! Produjo un sitio moderno y fácil de usar que superó las expectativas. Gran comunicación.',
      name: 'Camilo Torres',
      imgSrc: '/images/people-4.jpg',
      company: 'BrightWeb'
    },
    {
      content: '¡Trabajo profesional! Entregado a tiempo, con un diseño pulido y una experiencia de usuario fluida. Desarrollador de primer nivel.',
      name: 'Lorena Suarez',
      imgSrc: '/images/people-5.jpg',
      company: 'TechMosaic'
    },
    {
      content: '¡Excelente ejecución del proyecto! Código de alta calidad, diseño responsivo y habilidades excepcionales para resolver problemas.',
      name: 'Sebastian Castro',
      imgSrc: '/images/people-6.jpg',
      company: 'Skyline Digital'
    }
  ];

const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger:{
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000'
    })
  })
  return (
    <section
    id="reviews"
    className="section overflow-hidden"
    >
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
            Lo que dicen nuestros clientes
            </h2>
            <div className="scrub-slide flex items-stretch gap-3 w-fit">
                {reviews.map(({content, name, imgSrc, company}, key) => (
                    <ReviewCard
                    key={key}
                    name={name}
                    imgSrc={imgSrc}
                    company={company}
                    content={content}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Review
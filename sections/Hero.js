import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='quality' caption='iss' className='logobg' />
          <h1 className='hero-title'>ISS AUTOMOTIVE  SERVICES </h1>

          <div className='sub-heading'>
            <TitleSm title='CONTRÔLE QUALITÉ' /> <span>.</span>
            <TitleSm title='CONSULTING' /> <span>.</span>
            <TitleSm title='ERP & DIGITALISATION' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='ISS AUTOMOTIVE ENGINEERING SERVICES & CONSULTING' />
            <p>Une Enterprise Sarl installée au Maroc depuis 2020, ISS propose un confinement tiers pour fournir de meilleures solutions, résoudre vos problèmes et vous assurer que ne fournissez que la meilleure qualité à vos clients.
            Lorsque vous appelez ISS, vous êtes immédiatement mis en relation avec un membre de l’équipe dédié qui adopte une approche de propriété pratique pour répondre et dépasser vos besoins et attentes.

Dès le début, vous verrez que l’ISS fonctionne avec précision et efficacité.
            </p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero

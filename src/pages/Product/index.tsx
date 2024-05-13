import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import residentEvil from '../../assets/images/resident.png'
import { useEffect, useState } from 'react'
import { Clothing } from '../Home'
import { useGetClothingQuery } from '../../services/api'

const Product = () => {
  const { id } = useParams()
  const { data: clothing } = useGetClothingQuery(id!)

  if (!clothing) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero clothing={clothing} />
      <Section title="Sobre a roupa" background="gray">
        <p>{clothing.description}</p>
      </Section>
      <Section title="Mais detalhes" background="white">
        <p>
          {clothing.details.system}
          <br />
          {clothing.details.developer}
          {clothing.details.publisher}
          {clothing.details.languages.join(', ')}
        </p>
      </Section>
      <Gallery
        name={clothing.name}
        defaultCover={clothing.media.cover}
        items={clothing.media.gallery}
      />
    </>
  )
}

export default Product

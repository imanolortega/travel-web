import { InlineCode } from '@/once-ui/components'

const person = {
  firstName: 'Imanol',
  lastName: 'Ortega Carabajal',
  get name() {
    return `${this.firstName} ${this.lastName}`
  },
  role: 'Viajando',
  avatar: '/images/avatar.jpg',
}

const newsletter = {
  display: true,
  title: <>Suscribite</>,
  description: (
    <>
      Escribo sobre destinos destacados de mi viaje.
      <br />
      <br />
      Si te interesa, dejame tu email. No hago spam.
    </>
  ),
}

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'Instagram',
    icon: 'instagram',
    link: 'https://www.instagram.com/imanol.oc/',
  },
  {
    name: 'Spotify',
    icon: 'spotify',
    link: 'https://open.spotify.com/user/8x5neqbvq1rcy3qzth38bvpnk?si=5db8c31323ea4791',
  },
  {
    name: 'Twitter',
    icon: 'x',
    link: 'https://x.com/ioc_argentina',
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:imanolrtega@gmail.com',
  },
]

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Design engineer and builder</>,
  subline: (
    <>
      I'm Selene, a design engineer at <InlineCode>FLY</InlineCode>, where I
      craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
}

const about = {
  label: 'Inicio',
  title: 'Inicio',
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: 'Introducción',
    description: (
      <><p>
        Viajando y escribiendo sobre Argentina.
      </p>
        <p>Actualmente en Gonnet, La Plata, Buenos
          Aires.</p></>
    ),
  },
}

const blog = {
  label: 'Blog',
  title: 'Un lugar adonde ir',
  description: 'Un lugar adonde ir es un conjunto de relatos de viaje.',
  posts: [
    {
      title: 'Diario de viaje II: Trevelin',
      description: (
        <>
          Un poblado en el Valle de Punilla, un cerro sagrado, antiguas
          tradiciones, leyendas y relatos de seres extraterrestres.
        </>
      ),
      image: '/images/trevelin/dragon-rojo.jpg',
      slug: 'https://imanolortega.substack.com/p/diario-de-viaje-capilla-del-monte',
    },
    {
      title: 'Diario de viaje: Capilla del Monte',
      description: (
        <>
          Un poblado en el Valle de Punilla, un cerro sagrado, antiguas
          tradiciones, leyendas y relatos de seres extraterrestres.
        </>
      ),
      image: '/images/capilla/uritorco.jpg',
      slug: 'https://imanolortega.substack.com/p/diario-de-viaje-capilla-del-monte',
    },
  ],
}

const work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`,
}

const gallery = {
  label: 'Fotos',
  title: 'Fotos',
  description: `Fotos de mi viaje por el país`,
  images: [
    {
      src: '/images/gallery/img-01.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-02.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-03.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-04.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-05.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-06.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-07.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-08.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-09.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-10.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-11.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-12.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-13.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-14.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
  ],
}

export { person, social, newsletter, home, about, blog, work, gallery }

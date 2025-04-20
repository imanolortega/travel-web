const person = {
  firstName: 'Imanol',
  lastName: 'Ortega Carabajal',
  get name() {
    return `${this.firstName} ${this.lastName}`
  },
  role: 'Viajando',
  avatar: '/images/avatar.jpg',
}

const home = {
  title: 'Imanol Ortega Carabajal',
  description: 'Viajando y escribiendo sobre Argentina.',
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
      <>
        Viajando y escribiendo sobre Argentina. Actualmente en Gonnet, La Plata, Buenos Aires.
      </>
    ),
  },
}

const blog = {
  label: 'Blog',
  title: 'Un lugar adonde ir',
  description: 'Crónicas de mi viaje por el país.',
  posts: [
    {
      title: 'Diario de viaje II: Trevelin',
      description: (
        <>
          El Pueblo del Molino, la Conquista del Desierto y la Colonia Galesa de
          Chubut.
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

const gallery = {
  label: 'Fotos',
  title: 'Fotos',
  description: `Fotos de mi viaje por el país`,
  images: [
    {
      id: 1,
      src: '/images/gallery/caballo-trevelin-1.jpg',
      alt: 'Caballo en Trevelin',
      orientation: 'vertical',
    },
    {
      id: 2,
      src: '/images/gallery/floki-magagna.jpg',
      alt: 'Floki en Magagna',
      orientation: 'horizontal',
    },
    {
      id: 3,
      src: '/images/gallery/tres-arroyos-1.jpg',
      alt: 'Vicente de Tres Arroyos',
      orientation: 'vertical',
    },
    {
      id: 4,
      src: '/images/gallery/floki-magagna-1.jpg',
      alt: 'Floki en Magagna',
      orientation: 'horizontal',
    },
    {
      id: 5,
      src: '/images/gallery/maira-magagna.jpg',
      alt: 'Maira en Magagna',
      orientation: 'vertical',
    },
    {
      id: 6,
      src: '/images/gallery/magagna.jpg',
      alt: 'Formaciones rocosas en Magagna',
      orientation: 'vertical',
    },
    {
      id: 7,
      src: '/images/gallery/nant-fach-mill-trevelin-3.jpg',
      alt: 'El Nant Fach Mill en Trevelin',
      orientation: 'horizontal',
    },
    {
      id: 8,
      src: '/images/gallery/madryn.jpg',
      alt: 'Ailin en Puerto Madryn',
      orientation: 'vertical',
    },
    {
      id: 9,
      src: '/images/gallery/lago-rosario.jpg',
      alt: 'Lago Rosario',
      orientation: 'horizontal',
    },
    {
      id: 10,
      src: '/images/gallery/zamba-lago-puelo-1.jpg',
      alt: 'Zamba el gato naranja en Lago Puelo',
      orientation: 'vertical',
    },
    {
      id: 11,
      src: '/images/gallery/lago-rosario-1.jpg',
      alt: 'Lago Rosario',
      orientation: 'horizontal',
    },
    {
      id: 12,
      src: '/images/gallery/caba.jpg',
      alt: 'Una calle de Palermo',
      orientation: 'vertical',
    },
    {
      id: 13,
      src: '/images/gallery/puerto-rawson.jpg',
      alt: 'Puerto Rawson',
      orientation: 'vertical',
    },
    {
      id: 14,
      src: '/images/gallery/maira-gaiman.jpg',
      alt: 'Maira en Gaiman',
      orientation: 'horizontal',
    },
    {
      id: 15,
      src: '/images/gallery/maira-magagna-1.jpg',
      alt: 'Maira en Magagna',
      orientation: 'horizontal',
    },
    {
      id: 16,
      src: '/images/gallery/nant-fach-mill-trevelin-6.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      id: 17,
      src: '/images/gallery/nant-fach-mill-trevelin.jpg',
      alt: 'Patos y gansos en el Nant Fach Mill',
      orientation: 'vertical',
    },
    {
      id: 18,
      src: '/images/gallery/primos-madryn.jpg',
      alt: 'Mis primos en Puerto Madryn',
      orientation: 'horizontal',
    },
    {
      id: 19,
      src: '/images/gallery/magagna-1.jpg',
      alt: 'Formaciones rocosas en Magagna',
      orientation: 'vertical',
    },
    {
      id: 20,
      src: '/images/gallery/lago-puelo-3.jpg',
      alt: 'El Lago Puelo',
      orientation: 'horizontal',
    },
    {
      id: 21,
      src: '/images/gallery/floki-lago-puelo.jpg',
      alt: 'Floki en Lago Puelo',
      orientation: 'vertical',
    },
    {
      id: 22,
      src: '/images/gallery/familia-tres-arroyos.jpg',
      alt: 'Con mi familia en Tres Arroyos',
      orientation: 'horizontal',
    },
    {
      id: 23,
      src: '/images/gallery/la-plata-1.jpg',
      alt: 'República de los Niños',
      orientation: 'vertical',
    },
    {
      id: 24,
      src: '/images/gallery/la-plata.jpg',
      alt: 'La Plata',
      orientation: 'vertical',
    },
    {
      id: 25,
      src: '/images/gallery/lago-puelo-4.jpg',
      alt: 'Con Estela en Lago Puelo',
      orientation: 'horizontal',
    },
    {
      id: 26,
      src: '/images/gallery/cerro-radal.jpg',
      alt: 'Ovejas en el Cerro Radal',
      orientation: 'vertical',
    },
    {
      id: 27,
      src: '/images/gallery/tres-arroyos-5.jpg',
      alt: 'Tío Gustavo en Tres Arroyos',
      orientation: 'horizontal',
    },
    {
      id: 28,
      src: '/images/gallery/tres-arroyos-4.jpg',
      alt: 'Bianca, Contu y Delfi en Tres Arroyos',
      orientation: 'vertical',
    },
    {
      id: 29,
      src: '/images/gallery/yy-draig-goch-trevelin.jpg',
      alt: 'El Dragon Rojo de Trevelin',
      orientation: 'horizontal',
    },
    {
      id: 30,
      src: '/images/gallery/epuyen.jpg',
      alt: 'Lago Epuyén',
      orientation: 'vertical',
    },
    {
      id: 31,
      src: '/images/gallery/magagna-1-2.jpg',
      alt: 'Magagna',
      orientation: 'vertical',
    },
    {
      id: 32,
      src: '/images/gallery/lago-puelo-1-2.jpg',
      alt: 'Estela y Sergio en Lago Puelo',
      orientation: 'horizontal',
    },
    {
      id: 33,
      src: '/images/gallery/caballo-trevelin.jpg',
      alt: 'El caballo de Trevelin',
      orientation: 'vertical',
    },
    {
      id: 34,
      src: '/images/gallery/nant-fach-mill-trevelin-5.jpg',
      alt: 'Nant Fach Mill en Trevelin',
      orientation: 'horizontal',
    },
    {
      id: 35,
      src: '/images/gallery/marcha-24-de-marzo.jpg',
      alt: 'Marcha del 24 de marzo',
      orientation: 'vertical',
    },
    {
      id: 36,
      src: '/images/gallery/tres-arroyos.jpg',
      alt: 'Carlos, Pato, Osvaldo y Gustavo en Tres Arroyos',
      orientation: 'horizontal',
    },
    {
      id: 37,
      src: '/images/gallery/chubut-querencia.jpg',
      alt: 'Chubut Querencia',
      orientation: 'vertical',
    },
    {
      id: 38,
      src: '/images/gallery/floki-playa-union.jpg',
      alt: 'Floki en Playa Unión',
      orientation: 'horizontal',
    },
    {
      id: 39,
      src: '/images/gallery/lago-puelo.jpg',
      alt: 'Lago Puelo',
      orientation: 'vertical',
    },
    {
      id: 40,
      src: '/images/gallery/tres-arroyos-2.jpg',
      alt: 'Delfi, Sandra y Bianca en Tres Arroyos',
      orientation: 'horizontal',
    },
    {
      id: 41,
      src: '/images/gallery/lago-puelo-1.jpg',
      alt: 'Lago Puelo',
      orientation: 'vertical',
    },
    {
      id: 42,
      src: '/images/gallery/lago-puelo-2.jpg',
      alt: 'Lago Puelo',
      orientation: 'vertical',
    },
    {
      id: 43,
      src: '/images/gallery/nant-fach-mill-trevelin-1.jpg',
      alt: 'Nant Fach Mill en Trevelin',
      orientation: 'horizontal',
    },
    {
      id: 44,
      src: '/images/gallery/feli-bianca.jpg',
      alt: 'Felipe y Bianca',
      orientation: 'vertical',
    },
    {
      id: 45,
      src: '/images/gallery/san-martin-gonnet.jpg',
      alt: 'San Martín de la República de los Niños',
      orientation: 'horizontal',
    },
  ],
}

export { about, blog, gallery, home, newsletter, person, social }

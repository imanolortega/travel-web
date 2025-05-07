const description =
  'Viajando, escribiendo y fotografiando pueblos y ciudades argentinas.'

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
    id: 1,
    name: 'Instagram',
    icon: 'instagram',
    link: 'https://www.instagram.com/imanol.oc/',
  },
  {
    id: 2,
    name: 'Spotify',
    icon: 'spotify',
    link: 'https://open.spotify.com/user/8x5neqbvq1rcy3qzth38bvpnk?si=5db8c31323ea4791',
  },
  {
    id: 3,
    name: 'Twitter',
    icon: 'x',
    link: 'https://x.com/ioc_argentina',
  },
  {
    id: 4,
    name: 'Email',
    icon: 'email',
    link: 'mailto:imanolrtega@gmail.com',
  },
]

const about = {
  label: 'Inicio',
  title: 'Inicio | Imanol Ortega Carabajal',
  avatar: {
    display: true,
  },
  description: description,
  path: '/',
  intro: {
    display: true,
    title: 'Introducción',
    description: (
      <>
        Viajando y escribiendo sobre Argentina. Actualmente en Lago Puelo, Chubut.
      </>
    ),
  },
}

const blog = {
  label: 'Blog',
  title: 'Un lugar adonde ir',
  description: 'Crónicas del viaje a través de pueblos y ciudades argentinas.',
  path: '/blog',
  posts: [
    {
      title: 'Diario de viaje II: Trevelin',
      description: (
        <>
          El Pueblo del Molino en la cordillera, la Colonia Galesa del Chubut y
          las campañas militares del Estado argentino en la Patagonia.
        </>
      ),
      image: '/images/trevelin/dragon-rojo.jpg',
      slug: 'https://imanolortega.substack.com/p/diario-de-viaje-ii-trevelin',
      id: 0,
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
      id: 1,
    },
  ],
}

const gallery = {
  label: 'Fotos',
  title: 'Fotos del camino',
  path: '/gallery',
  description_og: 'Galería de fotos. Fotografías de mi viaje por Argentina.',
  description: (
    <>
      Todas las fotografías fueron tomadas durante los últimos meses con una
      Sony Alpha 7 III.
      <br />
      Son de mi autoría a excepción de las mencionadas.
    </>
  ),
  images: [
    {
      id: 1,
      src: '/images/gallery/caballo-trevelin-1.jpg',
      alt: 'Un caballo solitario en la Ruta Nacional 71 en Trevelin.',
      orientation: 'vertical',
    },
    {
      id: 2,
      src: '/images/gallery/floki-magagna.jpg',
      alt: 'Floki en Playa Magagna.',
      orientation: 'horizontal',
    },
    {
      id: 3,
      src: '/images/gallery/tres-arroyos-1.jpg',
      alt: 'Vicente de Tres Arroyos. Fotografía de Bianca Rizzi.',
      orientation: 'vertical',
    },
    {
      id: 4,
      src: '/images/gallery/floki-magagna-1.jpg',
      alt: 'Floki en Playa Magagna.',
      orientation: 'horizontal',
    },
    {
      id: 5,
      src: '/images/gallery/maira-magagna.jpg',
      alt: 'Maira Konz en Playa Magagna.',
      orientation: 'vertical',
    },
    {
      id: 6,
      src: '/images/gallery/magagna.jpg',
      alt: 'Formaciones rocosas cuando desciende la marea en Magagna.',
      orientation: 'vertical',
    },
    {
      id: 7,
      src: '/images/gallery/nant-fach-mill-trevelin-3.jpg',
      alt: 'Paseo a carreta dentro del Nant Fach Mill en Trevelin.',
      orientation: 'horizontal',
    },
    {
      id: 8,
      src: '/images/gallery/madryn.jpg',
      alt: 'Ailin Maliqueo en Puerto Madryn.',
      orientation: 'vertical',
    },
    {
      id: 9,
      src: '/images/gallery/lago-rosario.jpg',
      alt: 'Lago Rosario, Chubut.',
      orientation: 'horizontal',
    },
    {
      id: 10,
      src: '/images/gallery/zamba-lago-puelo-1.jpg',
      alt: 'Zamba el gato naranja de Sofi Vedovaldi, en Puelo.',
      orientation: 'vertical',
    },
    {
      id: 11,
      src: '/images/gallery/lago-rosario-1.jpg',
      alt: 'Lago Rosario, Chubut.',
      orientation: 'horizontal',
    },
    {
      id: 12,
      src: '/images/gallery/caba.jpg',
      alt: 'Palermo, CABA.',
      orientation: 'vertical',
    },
    {
      id: 13,
      src: '/images/gallery/puerto-rawson.jpg',
      alt: 'Amanecer en Puerto Rawson.',
      orientation: 'vertical',
    },
    {
      id: 14,
      src: '/images/gallery/maira-gaiman.jpg',
      alt: 'Maira Konz en Gaiman.',
      orientation: 'horizontal',
    },
    {
      id: 15,
      src: '/images/gallery/maira-magagna-1.jpg',
      alt: 'Maira Konz en Magagna.',
      orientation: 'horizontal',
    },
    {
      id: 18,
      src: '/images/gallery/primos-madryn.jpg',
      alt: 'Mis primos queridos, Lichi e Ivo, en Playa Paraná, Puerto Madryn.',
      orientation: 'horizontal',
    },
    {
      id: 17,
      src: '/images/gallery/nant-fach-mill-trevelin.jpg',
      alt: 'Gansos en el Nant Fach Mill.',
      orientation: 'vertical',
    },
    {
      id: 16,
      src: '/images/gallery/nant-fach-mill-trevelin-6.jpg',
      alt: 'La casa de los Evans en el Nant Fach Mill.',
      orientation: 'horizontal',
    },
    {
      id: 19,
      src: '/images/gallery/magagna-1.jpg',
      alt: 'Formaciones rocosas en Magagna.',
      orientation: 'vertical',
    },
    {
      id: 20,
      src: '/images/gallery/lago-puelo-3.jpg',
      alt: 'El Lago Puelo.',
      orientation: 'horizontal',
    },
    {
      id: 21,
      src: '/images/gallery/el-oso.jpg',
      alt: 'Floki en Lago Puelo.',
      orientation: 'vertical',
    },
    {
      id: 22,
      src: '/images/gallery/familia-tres-arroyos.jpg',
      alt: 'Con mi familia querida en Tres Arroyos. Fotografía de Constanza Rizzi.',
      orientation: 'horizontal',
    },
    {
      id: 23,
      src: '/images/gallery/republica-gonnet.jpg',
      alt: 'República de los Niños en Gonnet.',
      orientation: 'vertical',
    },
    {
      id: 24,
      src: '/images/gallery/altos-san-lorenzo.jpg',
      alt: 'Aniversario de La Patulo Rave en Altos de San Lorenzo, La Plata. Fotografía de Bianca Rizzi.',
      orientation: 'vertical',
    },
    {
      id: 25,
      src: '/images/gallery/lago-puelo-4.jpg',
      alt: 'Con mi reina, Estela, en Lago Puelo. Fotografía de Sofía Vedovaldi.',
      orientation: 'horizontal',
    },
    {
      id: 26,
      src: '/images/gallery/cerro-radal.jpg',
      alt: 'En el Cerro Radal de Lago Puelo.',
      orientation: 'vertical',
    },
    {
      id: 27,
      src: '/images/gallery/tres-arroyos-5.jpg',
      alt: 'El Tío Gustavo en Tres Arroyos. Fotografía de Bianca Rizzi.',
      orientation: 'horizontal',
    },
    {
      id: 28,
      src: '/images/gallery/tres-arroyos-4.jpg',
      alt: 'Bianca, Contu y Delfi en Tres Arroyos.',
      orientation: 'vertical',
    },
    {
      id: 29,
      src: '/images/gallery/yy-draig-goch-trevelin.jpg',
      alt: 'El Dragon Rojo Galés en Trevelin.',
      orientation: 'horizontal',
    },
    {
      id: 30,
      src: '/images/gallery/epuyen.jpg',
      alt: 'Lago Epuyén.',
      orientation: 'vertical',
    },
    {
      id: 35,
      src: '/images/gallery/marcha-24-de-marzo.jpg',
      alt: 'Marcha del 24 de marzo en Capital Federal.',
      orientation: 'vertical',
    },
    {
      id: 32,
      src: '/images/gallery/tuli-y-sergio.jpg',
      alt: 'Estela y Sergio en Lago Puelo.',
      orientation: 'horizontal',
    },
    {
      id: 33,
      src: '/images/gallery/caballo-trevelin.jpg',
      alt: 'El caballo solitario de Trevelin.',
      orientation: 'vertical',
    },
    {
      id: 34,
      src: '/images/gallery/nant-fach-mill-trevelin-5.jpg',
      alt: 'Museo Nant Fach Mill en Trevelin.',
      orientation: 'horizontal',
    },
    {
      id: 31,
      src: '/images/gallery/magagna-1-2.jpg',
      alt: 'Playa Magagna.',
      orientation: 'vertical',
    },
    {
      id: 36,
      src: '/images/gallery/tres-arroyos.jpg',
      alt: 'Carlos, Pato, Osvaldo y Gustavo en Tres Arroyos.',
      orientation: 'horizontal',
    },
    {
      id: 37,
      src: '/images/gallery/chubut-querencia.jpg',
      alt: 'Chubut, querencia.',
      orientation: 'vertical',
    },
    {
      id: 38,
      src: '/images/gallery/floki-playa-union.jpg',
      alt: 'Floki en Playa Unión.',
      orientation: 'horizontal',
    },
    {
      id: 39,
      src: '/images/gallery/lago-puelo.jpg',
      alt: 'Lago Puelo.',
      orientation: 'vertical',
    },
    {
      id: 40,
      src: '/images/gallery/maraton-en-trevelin.jpg',
      alt: 'Maratón en Trevelin.',
      orientation: 'horizontal',
    },
    {
      id: 41,
      src: '/images/gallery/lago-puelo-1.jpg',
      alt: 'Lago Puelo.',
      orientation: 'vertical',
    },
    {
      id: 42,
      src: '/images/gallery/lago-puelo-2.jpg',
      alt: 'Lago Puelo.',
      orientation: 'vertical',
    },
    {
      id: 43,
      src: '/images/gallery/nant-fach-mill-trevelin-1.jpg',
      alt: 'Molino Nant Fach Mill en Trevelin.',
      orientation: 'horizontal',
    },
    {
      id: 44,
      src: '/images/gallery/nacho-en-baires.jpg',
      alt: 'Con Nacho en Baires.',
      orientation: 'vertical',
    },
    {
      id: 45,
      src: '/images/gallery/san-martin-gonnet.jpg',
      alt: 'San Martín de la República de los Niños.',
      orientation: 'horizontal',
    },
    {
      id: 47,
      src: '/images/gallery/tio-marcelo.jpg',
      alt: 'Con mi tío Marcelo en la Feria del Libro de Buenos Aires. Fotografía de Lisandro López.',
      orientation: 'vertical',
    },
    {
      id: 49,
      src: '/images/gallery/juli-y-marian.jpg',
      alt: 'Juli y Mariano en Tres Arroyos. Fotografía de Bianca Rizzi.',
      orientation: 'vertical',
    },
    {
      id: 46,
      src: '/images/gallery/sofi-en-rio-azul.jpg',
      alt: 'Sofi en Río Azul, Lago Puelo.',
      orientation: 'horizontal',
    },
    {
      id: 48,
      src: '/images/gallery/zarita.jpg',
      alt: 'Zara, la salchicha de Delfi.',
      orientation: 'vertical',
    },
    {
      id: 49,
      src: '/images/gallery/lago-puelo-nuboso.jpg',
      alt: 'Domingo puelense.',
      orientation: 'horizontal',
    },
    {
      id: 50,
      src: '/images/cover.jpg',
      alt: 'Sobre la Ruta Nacional 71 cerca del Parque Nacional Los Alerces.',
      orientation: 'horizontal',
    },
  ],
}

export { about, blog, gallery, newsletter, person, social }

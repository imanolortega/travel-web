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
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
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
  calendar: {
    display: true,
    link: 'https://cal.com',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Viajando por el país. Actualmente en Manuel B. Gonnet, La Plata, Buenos
        Aires.
      </>
    ),
  },
  work: {
    display: false,
    title: 'Work Experience',
    experiences: [
      {
        company: 'FLY',
        timeframe: '2022 - Present',
        role: 'Senior Design Engineer',
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20%
            increase in user engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows,
            enabling designers to iterate 50% faster.
          </>,
        ],
        images: [
          {
            src: '/images/projects/project-01/cover-01.jpg',
            alt: 'Once UI Project',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: 'Creativ3',
        timeframe: '2018 - 2022',
        role: 'Lead Designer',
        achievements: [
          <>
            Developed a design system that unified the brand across multiple
            platforms, improving design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line,
            contributing to a 15% increase in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: 'Studies',
    institutions: [
      {
        name: 'University of Jakarta',
        description: <>Studied software engineering.</>,
      },
      {
        name: 'Build the Future',
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: 'Un lugar adonde ir',
    skills: [
      {
        title: 'Diario de viaje II: Trevelin',
        description: (
          <>
            Un poblado en el Valle de Punilla, un cerro sagrado, antiguas
            tradiciones, leyendas y relatos de seres extraterrestres.
          </>
        ),
        images: [
          {
            src: '/images/projects/project-01/cover-02.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: 'Diario de viaje: Capilla del Monte',
        description: (
          <>
            Un poblado en el Valle de Punilla, un cerro sagrado, antiguas
            tradiciones, leyendas y relatos de seres extraterrestres.
          </>
        ),
        images: [
          {
            src: '/images/projects/project-01/cover-04.jpg',
            alt: 'Project image',
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
}

const blog = {
  label: 'Blog',
  title: 'Diarios de viaje',
  description: `Read what ${person.name} has been up to recently`,
}

const work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`,
}

const gallery = {
  label: 'Fotos',
  title: 'My photo gallery',
  description: `A photo collection by ${person.name}`,
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

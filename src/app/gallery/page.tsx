import { baseURL } from '@/app/resources'
import { Column, Heading } from '@/once-ui/components'
import { gallery, person } from '@/app/resources/content'
import MasonryGrid from '@/components/gallery/MasonryGrid'

import { Meta, Schema } from '@/once-ui/modules'

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  })
}

export default function Gallery() {
  return (
    <Column maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description_og}
        path={gallery.path}
        image={`${baseURL}/og?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s" align="center">
        {gallery.title}
      </Heading>
      <Column
        textVariant="body-default-l"
        align="center"
        fillWidth
        paddingX="l"
        gap="m"
        marginBottom="80"
      >
        {gallery.description}
      </Column>
      <MasonryGrid />
    </Column>
  )
}

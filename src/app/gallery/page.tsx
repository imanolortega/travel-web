import { baseURL } from '@/app/resources'
import { Column, Heading } from '@/once-ui/components'
import { gallery, person } from '@/app/resources/content'
import MasonryGrid from '@/components/gallery/MasonryGrid'

// export async function generateMetadata() {
//   const title = `${gallery.title} | Imanol Ortega Carabajal`
//   const description = gallery.description_og
//   const ogImage = `https://${baseURL}/images/cover.jpg`

//   return {
//     openGraph: {
//       title,
//       description,
//       locale: 'en_US',
//       siteName: title,
//       type: 'website',
//       url: `https://${baseURL}`,
//       images: [
//         {
//           url: ogImage,
//           width: 1920,
//           height: 1280,
//           alt: title,
//         },
//       ],
//     },
//     title,
//     description,
//     twitter: {
//       card: 'summary_large_image',
//       title,
//       description,
//       images: [ogImage],
//     },
//   }
// }

export default function Gallery() {
  return (
    <Column maxWidth="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: gallery.title,
            description: gallery.description,
            url: `https://${baseURL}/gallery`,
            image: gallery.images.map((image) => ({
              '@type': 'ImageObject',
              url: `${baseURL}${image.src}`,
              description: image.alt,
            })),
            author: {
              '@type': 'Person',
              name: person.name,
              image: {
                '@type': 'ImageObject',
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
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

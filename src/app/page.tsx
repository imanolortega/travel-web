import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  IconButton,
} from '@/once-ui/components'
import { baseURL } from '@/app/resources'
import { person, about, social, blog } from '@/app/resources/content'
import { Posts } from '@/components/blog/Posts'
import styles from '@/components/about/about.module.scss'

export async function generateMetadata() {
  const title = about.title
  const description = about.description
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://${baseURL}/`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default function Home() {
  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/`,
            image: `${baseURL}/images/${person.avatar}`,
            sameAs: social
              .filter((item) => item.link && !item.link.startsWith('mailto:'))
              .map((item) => item.link),
          }),
        }}
      />
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <Heading className={styles.textAlign} variant="display-strong-m">
              {person.name}
            </Heading>
            {social.length > 0 && (
              <Flex
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
              >
                {social.map(
                  (item) =>
                    item.link && (
                      <>
                        <Button
                          className="s-flex-hide"
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          variant="secondary"
                        />
                        <IconButton
                          className="s-flex-show"
                          size="l"
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </>
                    )
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column
              textVariant="body-default-l"
              fillWidth
              gap="m"
              marginBottom="xl"
            >
              {about.intro.description}
            </Column>
          )}

          <>
            <Heading
              as="h2"
              id={blog.title}
              variant="display-strong-s"
              marginBottom="40"
              className={styles.textAlign}
            >
              {blog.title}
            </Heading>
            <Column fillWidth gap="l">
              <Posts />
            </Column>
          </>
        </Column>
      </Flex>
    </Column>
  )
}

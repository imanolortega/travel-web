import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  IconButton,
} from '@/once-ui/components'
import { baseURL } from '@/app/resources'
import { Meta, Schema } from '@/once-ui/modules'
import { person, about, social, blog } from '@/app/resources/content'
import { Posts } from '@/components/blog/Posts'
import React from 'react'
import styles from '@/components/about/about.module.scss'

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    path: about.path,
  })
}

export default function Home() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={about.path}
        title={about.title}
        description={about.description}
        image={`${baseURL}/og?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
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
            <Heading
              className={styles.textAlign}
              variant="display-strong-m"
              marginBottom="m"
            >
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
                      <React.Fragment key={item.id}>
                        <Button
                          className="s-flex-hide"
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          variant="secondary"
                        />
                        <IconButton
                          className="s-flex-show"
                          size="l"
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </React.Fragment>
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
              marginBottom="80"
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
              Crónicas de viaje
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

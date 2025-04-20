'use client'

import {
  Column,
  Flex,
  Heading,
  SmartImage,
  SmartLink,
  Text,
} from '@/once-ui/components'
import styles from './Posts.module.scss'
interface PostProps {
  post: any
  thumbnail: boolean
}

export default function Post({ post, thumbnail }: PostProps) {
  return (
    <SmartLink
      fillWidth
      className={styles.hover}
      unstyled
      key={post.slug}
      href={post.slug}
    >
      <Flex
        position="relative"
        mobileDirection="column"
        fillWidth
        paddingY="8"
        paddingX="8"
        gap="32"
      >
        {post.image && thumbnail && (
          <SmartImage
            priority
            //maxWidth={20}
            className={styles.image}
            sizes="640px"
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="m"
            src={post.image}
            alt={'Thumbnail of ' + post.title}
            aspectRatio="16 / 9"
          />
        )}
        <Column position="relative" fillWidth gap="8" vertical="center">
          <Heading as="h2" variant="heading-strong-xl" wrap="balance">
            {post.title}
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            {post.description}
          </Text>
        </Column>
      </Flex>
    </SmartLink>
  )
}

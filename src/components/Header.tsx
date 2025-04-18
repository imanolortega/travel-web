'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Fade, Flex, ToggleButton } from '@/once-ui/components'
import styles from '@/components/Header.module.scss'

import { routes } from '@/app/resources'
import { about, blog, work, gallery } from '@/app/resources/content'

type TimeDisplayProps = {
  timeZone: string
  locale?: string
}

const TimeDisplay: React.FC<TimeDisplayProps> = ({
  timeZone = 'America/Argentina/Buenos_Aires',
  locale = 'es-AR',
}) => {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }
      const timeString = new Intl.DateTimeFormat(locale, options).format(now)
      setCurrentTime(timeString)
    }

    updateTime()
    const intervalId = setInterval(updateTime, 1000)

    return () => clearInterval(intervalId)
  }, [timeZone, locale])

  return <>{currentTime}</>
}

export default TimeDisplay

export const Header = () => {
  const pathname = usePathname() ?? ''

  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        show="s"
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
      >
        <Flex
          paddingLeft="12"
          fillWidth
          vertical="center"
          textVariant="body-default-s"
        ></Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes['/'] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/"
                    label={about.label}
                    selected={pathname === '/'}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/"
                    selected={pathname === '/'}
                  />
                </>
              )}
              {routes['/blog'] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/blog"
                    label={blog.label}
                    selected={pathname.startsWith('/blog')}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/blog"
                    selected={pathname.startsWith('/blog')}
                  />
                </>
              )}
              {routes['/gallery'] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="gallery"
                    href="/gallery"
                    label={gallery.label}
                    selected={pathname.startsWith('/gallery')}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="gallery"
                    href="/gallery"
                    selected={pathname.startsWith('/gallery')}
                  />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center"></Flex>
      </Flex>
    </>
  )
}

import '@/once-ui/styles/index.scss';
import '@/once-ui/tokens/index.scss';
import { Analytics } from '@vercel/analytics/react';
import { Background, Column, Flex } from '@/once-ui/components';
import { baseURL, effects, style } from '@/app/resources';
import { Footer, Header, RouteGuard } from '@/components';
import { GeistSans } from 'geist/font/sans';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { meta } from './resources/config';
import { Meta } from '@/once-ui/modules';
import { SpeedInsights } from '@vercel/speed-insights/next';
import classNames from 'classnames';

export async function generateMetadata() {
  return Meta.generate({
    title: meta.home.title,
    description: meta.home.description,
    baseURL: baseURL,
    path: meta.home.path,
    canonical: meta.home.canonical,
    image: meta.home.image,
    robots: meta.home.robots,
    alternates: meta.home.alternates,
  });
}

const primary = Inter({
  variable: '--font-primary',
  subsets: ['latin'],
  display: 'swap',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <Flex
      as="html"
      lang="en"
      background="page"
      data-neutral={style.neutral}
      data-brand={style.brand}
      data-accent={style.accent}
      data-solid={style.solid}
      data-solid-style={style.solidStyle}
      data-theme={style.theme}
      data-border={style.border}
      data-surface={style.surface}
      data-transition={style.transition}
      className={classNames(primary.variable, GeistSans.variable)}
    >
      <head>
        <title>{meta.home.title}</title>
        <meta name="description" content={meta.home.description} />
        <meta name="canonical" content={`${baseURL}${meta.home.path}`} />
        <meta name="image" property="og:image" content="/images/og/cover-imanol-ortega.jpg" />
        <meta name="og:title" content={meta.home.description} />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content={meta.home.title} />
        <meta name="og:description" content={meta.home.description} />
        <meta name="og:image" content={`${baseURL}${meta.home.image}`} />
        <meta name="og:image:alt" content={`${meta.home.name}'s portfolio.`} />
        <meta name="og:url" content={`${baseURL}${meta.home.path}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.home.description} />
        <meta name="twitter:description" content={meta.home.description} />
        <meta name="twitter:image" content={`${baseURL}${meta.home.image}`} />
      </head>
      <Analytics />
      <SpeedInsights />
      <GoogleAnalytics gaId="G-SZLNLGY5NV" />
      <Column style={{ minHeight: '100vh' }} as="body" fillWidth margin="0" padding="0">
        <Background
          mask={{
            cursor: effects.mask.cursor,
            x: effects.mask.x,
            y: effects.mask.y,
            radius: effects.mask.radius,
          }}
          gradient={{
            display: effects.gradient.display,
            x: effects.gradient.x,
            y: effects.gradient.y,
            width: effects.gradient.width,
            height: effects.gradient.height,
            tilt: effects.gradient.tilt,
            colorStart: effects.gradient.colorStart,
            colorEnd: effects.gradient.colorEnd,
            opacity: effects.gradient.opacity as
              | 0
              | 10
              | 20
              | 30
              | 40
              | 50
              | 60
              | 70
              | 80
              | 90
              | 100,
          }}
          dots={{
            display: effects.dots.display,
            color: effects.dots.color,
            size: effects.dots.size as any,
            opacity: effects.dots.opacity as any,
          }}
          grid={{
            display: effects.grid.display,
            color: effects.grid.color,
            width: effects.grid.width as any,
            height: effects.grid.height as any,
            opacity: effects.grid.opacity as any,
          }}
          lines={{
            display: effects.lines.display,
            opacity: effects.lines.opacity as any,
          }}
        />
        <Flex fillWidth minHeight="16"></Flex>
        <Header />
        <Flex
          position="relative"
          zIndex={0}
          fillWidth
          paddingY="l"
          paddingX="l"
          horizontal="center"
          flex={1}
        >
          <Flex horizontal="center" fillWidth minHeight="0">
            <RouteGuard>{children}</RouteGuard>
          </Flex>
        </Flex>
        <Footer />
      </Column>
    </Flex>
  );
}

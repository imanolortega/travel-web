'use client'

import 'photoswipe/style.css'
import { useEffect } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import { SmartImage } from '@/once-ui/components'
import styles from './Gallery.module.scss'
import { gallery } from '@/app/resources/content'

export default function MasonryGrid() {
  const images = gallery?.images || []

  const getSizeByOrientation = (orientation: string) => {
    return orientation === 'horizontal'
      ? { width: 1600, height: 1067 }
      : { width: 900, height: 1350 }
  }

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '.gallery-masonry',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    })

    lightbox.init()
    return () => lightbox.destroy()
  }, [])

  return (
    <div className={`${styles.masonryGrid} gallery-masonry`}>
      {images.map((image, index) => {
        const { width, height } = getSizeByOrientation(image.orientation)
        return (
          <a
            key={index}
            href={image.src}
            data-pswp-width={width}
            data-pswp-height={height}
            target="_blank"
            rel="noreferrer"
          >
            <SmartImage
              priority={index < 10}
              sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
              radius="m"
              aspectRatio={
                image.orientation === 'horizontal' ? '16 / 9' : '9 / 16'
              }
              src={image.src}
              alt={image.alt}
              className={styles.gridItem}
            />
          </a>
        )
      })}
    </div>
  )
}

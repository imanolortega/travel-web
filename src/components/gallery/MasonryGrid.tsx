'use client';

import 'photoswipe/style.css';
import { gallery } from '@/app/resources/content';
import { SmartImage } from '@/once-ui/components';
import { useEffect } from 'react';
import { useLoadingDelay } from '@/app/utils/useLoadingDelay';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import styles from './Gallery.module.scss';

export default function MasonryGrid() {
  const loading = useLoadingDelay(1500);
  const images = gallery?.images || [];

  const getSizeByOrientation = (orientation: string) => {
    return orientation === 'horizontal'
      ? { width: 1600, height: 1067 }
      : { width: 900, height: 1350 };
  };

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '.gallery-masonry',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });

    lightbox.on('uiRegister', () => {
      lightbox?.pswp?.ui?.registerElement({
        name: 'custom-caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        html: '',
        onInit: (el, pswp) => {
          pswp.on('change', () => {
            const currSlideEl = pswp?.currSlide?.data.element;
            const img = currSlideEl?.querySelector('img');
            const caption = img?.alt || '';
            el.innerHTML = caption;
          });
        },
      });
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  return (
    <div className={`${styles.masonryGrid} gallery-masonry`}>
      {images.map((image, index) => {
        const { width, height } = getSizeByOrientation(image.orientation);
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
                image.orientation === 'horizontal' ? '3 / 2' : '2 / 3'
              }
              src={image.src}
              alt={image.alt}
              className={styles.gridItem}
              isLoading={loading}
            />
          </a>
        );
      })}
    </div>
  );
}

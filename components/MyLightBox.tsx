'use client'

import React from 'react'
import Lightbox, { SlideImage } from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import NextJsImage from './NextJsImage'
import Image from './Image'

export interface MyLightBoxProps {
  slides: SlideImage[]
  thumbWidth: number
  thumbHeight: number
}

export function MyLightBox({ slides, thumbWidth, thumbHeight }: MyLightBoxProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      {/* Clickable parent div */}
      <button onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>
        {/* Assuming you want to show the first image or any other representation */}
        {slides.length > 0 && (
          <Image src={slides[0].src} width={thumbWidth} height={thumbHeight} alt={''} />
        )}
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        render={{ slide: NextJsImage }}
      />
    </div>
  )
}

export default MyLightBox

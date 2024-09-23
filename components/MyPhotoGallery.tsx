'use client'

import React from 'react'
import Lightbox from 'yet-another-react-lightbox'
import { Photo } from 'react-photo-album'
import 'yet-another-react-lightbox/styles.css'
import { RowsPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/rows.css'
import NextJsImage from './NextJsImage'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/plugins/captions.css'

export interface MyPhotoGalleryProps {
  slides: Photo[]
}

export function MyPhotoGallery({ slides }: MyPhotoGalleryProps) {
  const [index, setIndex] = React.useState(-1)
  const [showToggle, setShowToggle] = React.useState(false)
  const [descriptionMaxLines, setDescriptionMaxLines] = React.useState(3)
  const [descriptionTextAlign, setDescriptionTextAlign] = React.useState<
    'start' | 'end' | 'center'
  >('start')

  console.log(slides)

  return (
    <>
      <RowsPhotoAlbum
        photos={slides}
        targetRowHeight={150}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
        render={{ slide: NextJsImage }}
        plugins={[Captions]}
        captions={{ showToggle, descriptionTextAlign, descriptionMaxLines }}
      />
    </>
  )
}

export default MyPhotoGallery

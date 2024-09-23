import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import MyLightBox from './MyLightBox'
import MyPhotoGallery from './MyPhotoGallery'
import TableWrapper from './TableWrapper'

export const components: MDXComponents = {
  Image,
  MyLightBox,
  MyPhotoGallery,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
}

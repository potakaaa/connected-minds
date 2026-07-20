import { cn } from '#/lib/utils'

export function EditorialImage({
  src,
  srcSet,
  sizes,
  alt,
  className,
  imgClassName,
  loading = 'lazy',
}: {
  src: string
  srcSet?: string
  sizes?: string
  alt: string
  className?: string
  imgClassName?: string
  loading?: 'eager' | 'lazy'
}) {
  return (
    <figure className={cn('relative overflow-hidden bg-brown/8', className)}>
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={loading}
        decoding="async"
        className={cn('size-full object-cover', imgClassName)}
      />
    </figure>
  )
}

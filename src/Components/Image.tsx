import React from 'react'

export default function ImageComp(props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  return (
    <img loading="lazy" alt="img" {...props} />
  )
}

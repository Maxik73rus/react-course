import React from 'react'
import Wysiwyg from '../../components/Wysiwyg/Wysiwyg'
import Image from '../../components/Wysiwyg/Image'
import data from './assets/data'

function PageDetail () {
  const {text, title,date, image} = data
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <Image image={image} />
      <Wysiwyg text={text} />
    </div>
  )
}
export default PageDetail
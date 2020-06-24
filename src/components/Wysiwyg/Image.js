import React from 'react'
import PropTypes from 'prop-types'
import './Images.scss'
function Image ({ image }) {
  return (
    <div className='images' dangerouslySetInnerHTML={{ __html: image}} />
  )
}

Image.propTypes = {
  image: PropTypes.string
}
export default Image
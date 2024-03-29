import React from 'react'
import { string } from 'prop-types'

const Image = (props) => {
  const { imageName, source, classNames, ...styles } = props

  return (
    <>
      <img
        src={source}
        alt={imageName}
        style={{...styles}}
        className={classNames}
      />
    </>
  )
}
Image.propTypes = {
  styles: string,
  classNames: string,
  source: string.isRequired,
  imageName: string,
}
export default Image
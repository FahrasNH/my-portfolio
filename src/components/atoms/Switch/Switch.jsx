import React, { useState } from 'react'
import { string } from 'prop-types'
import {
  Switch as SwitchMode,
} from '@material-ui/core';

const Switch = (props) => {
  const { classNames, name, state, setState, ...styles } = props
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

  return (
    <SwitchMode
      checked={state.switchMode}
      onChange={handleChange}
      name={name}
      style={{...styles}}
      className={classNames}
    />
  )
}

Switch.propTypes = {
  styles: string,
  classNames: string,
}

export default Switch
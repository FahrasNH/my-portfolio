import React, { useState } from 'react'
import { View } from '../atoms'
import {
  Navbar
} from '../molecules'

const Header = () => {
  const [state, setState] = useState({
    switchMode: false,
	})

  return (
    <View
      backgroundImage="linear-gradient(#321D51, #1C1E26)"
      height="100vh"
    >
      <Navbar state={state} setState={setState} />
    </View>
  )
}

export default  Header

import React, { useState } from 'react'
import { View } from '../atoms'
import {
  Navbar, TitleDesc, ImageBanner
} from '../molecules'
import {
  Grid
} from '@material-ui/core'

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
      <Grid container style={{ padding: '0 105px', alignItems: 'center', height: '70%' }}>
        <TitleDesc />
        <ImageBanner />
      </Grid>
    </View>
  )
}

export default  Header

import React from 'react'
import { Text, Button, Image, View } from '../../atoms'
import {
  Grid
} from '@material-ui/core'

const ImageBanner = ({ state, setState }) => (
  <Grid item xs={6}>
    <View
      position="relative"
      overflow="hidden"
    >
      <Image
        right="0"
        bottom="80px"
        position="absolute"
        source={require('../../../assets/illustrations/Dot-2.svg')}
      />
      <Image
        top="-80px"
        position="relative"
        source={require('../../../assets/images/my-picture.svg')}
      />
      <View
        right="0"
        width="550px"
        height="200px"
        bottom="80px"
        position="absolute"
        backgroundImage="linear-gradient(rgba(38, 30, 60, .0) 10%, rgb(34, 30, 48) 90%)"
      />
    </View>
  </Grid>
)

export default ImageBanner

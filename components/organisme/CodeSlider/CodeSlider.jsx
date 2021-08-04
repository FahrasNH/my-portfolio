import React from 'react'
import { View, Text } from '../../atoms'
import { Carousel } from '../../molecules'

const CodeSlider = () => {
  return (
    <>
      <View
        margin="200px 0 0 0"
        padding="0 105px"
        display="block"
        textAlign="center"
      >
        <Text
          fontSize="32px"
          color="#1C1E26"
          fontWeight="600"
          marginBottom="20px"
        >
          Code Laboratory
        </Text>
        <Text
          fontSize="20px"
          color="#1C1E26"
          fontWeight="100"
          marginBottom="70px"
        >
          I like to code things from scratch, and enjoy bringing ideas <br/>to life in the browser.
        </Text>
      </View>
      <View
        margin="0 0 200px 0"
      >
        <Carousel />
      </View>
    </>
  )
}

export default CodeSlider

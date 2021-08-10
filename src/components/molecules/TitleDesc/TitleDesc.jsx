import React from 'react'
import { Text, Button, Image } from '../../atoms'
import {
  Grid
} from '@material-ui/core'

const TitleDesc = ({ state, setState }) => (
  <Grid item xs={6}>
    <Text
      color="#EBEBEB"
      fontSize="36px"
      fontWeight="100"
      lineHeight="60px"
    >
      Hello, I am <span style={{ color: '#ECC920', fontWeight: '600' }}>Fahras Nur Hidayat</span>.
      <br />
      I am a web developer.
    </Text>
    <Text
      color="#EBEBEB"
      fontSize="14px"
      fontWeight="100"
      marginTop="10px"
      letterSpacing="3px"
    >
      Web Designer / Front-end Developer / Freelance
    </Text>
    <Button
      width="185px"
      height="55px"
      fontSize="20px"
      color="#EBEBEB"
      marginTop="30px"
      cursor="pointer"
      fontWeight="100"
      borderRadius="4px"
      fontFamily="Overpass"
      border="2px solid #ECC920"
      backgroundColor="transparent"
      className="work-btn"
    >
      View <span style={{ color: '#ECC920' }}>my work</span>
      <Image
        source={require('../../../assets/icons/arrow-right.svg')}
        imageName="ic-arr"
        width="70px"
        position="absolute"
        padding="8px 15px"
      />
    </Button>
  </Grid>
)

export default TitleDesc

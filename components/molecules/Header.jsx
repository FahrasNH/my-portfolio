import React, { useState } from 'react'
import { View, Image } from '../atoms'
import {
  Grid, List, ListItem,
  ListItemText, ListItemIcon, Switch,
} from '@material-ui/core';
import { capitalize } from 'lodash'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = () => {
  const [state, setState] = useState({
    checkedMode: false,
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  }

  return (
    <View
      backgroundImage="linear-gradient(#321D51, #1C1E26)"
      height="100vh"
    >
      <Grid container>
        <Grid item xs={6}>
          <View
            backgroundImage="linear-gradient(to bottom right, #321D51, #5D3D8C)"
            height="80px"
            width="205px"
            borderRadius="0 0 4px 0"
          >
            <Image
              source={require('../../assets/illustrations/Dot.svg')}
              imageName="ic-dot"
              position="absolute"
              top="20px"
              left="105px"
            />
          </View>
        </Grid>
        <Grid item xs={6} style={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <List className="navbar-menu">
            {['/', '/portfolio', '/contact'].map((text, index) => {
              const router = useRouter()
              const active = router.pathname === text ? 'active' : ''

              return (
                <ListItem button key={text} className="navbar-item">
                  <Link href={text}>
                    <ListItemText primary={text !== '/' ? capitalize(text.slice(1)) : 'Menu'} className={`navbar-text ${active}`}/>
                  </Link>
                </ListItem>
              )
            })}

            <ListItem className="navbar-switch">
              <ListItemIcon>
                <Switch
                  checked={state.checkedMode}
                  onChange={handleChange}
                  name="checkedMode"
                  className="switch-mode"
                />
              </ListItemIcon>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </View>
  )
}

export default  Header

import React from 'react'
import { View, Image, Switch } from '../../atoms'
import {
  Grid, List, ListItem,
  ListItemText, ListItemIcon,
} from '@material-ui/core'
import { capitalize } from 'lodash'
import Link from 'next/link'

const Navbar = ({ state, setState, router }) => (
  <Grid container style={{ height: '10%' }}>
    <Grid item xs={6}>
      <View
        backgroundImage="linear-gradient(to bottom right, #321D51, #5D3D8C)"
        height="80px"
        width="205px"
        borderRadius="0 0 4px 0"
      >
        <Image
          source={require('../../../assets/illustrations/Dot.svg')}
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
          const active = router.pathname === text ? 'active' : ''

          return (
            <ListItem button key={text} className="navbar-item" style={{ marginRight: (router.pathname !== '/') && (text === '/contact') ? '0' : '50px', }}>
              <Link href={text}>
                <ListItemText primary={text !== '/' ? capitalize(text.slice(1)) : 'Menu'} className={`navbar-text ${active}`}/>
              </Link>
            </ListItem>
          )
        })}

        { router.pathname === '/' && (
          <ListItem className="navbar-switch">
            <ListItemIcon>
              <Switch
                name="switchMode"
                classNames="switch-mode"
                state={state}
                setState={setState}
              />
            </ListItemIcon>
          </ListItem>
        )}
      </List>
    </Grid>
  </Grid>
)

export default  Navbar

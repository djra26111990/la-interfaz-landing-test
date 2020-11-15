import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Logo from '../assets/img/googlelogo_color_272x92dp.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 160,
    alignItems: 'flex-end',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  primaryColor: {
    color: '#000',
    backgroundColor: '#fff',
  },
  logo: {
    maxHeight: '100%',
    maxWidth: '100%',
    width: '185px',
    height: '70px'
  }
}))

export default function ProminentAppBar() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar
        className={classes.primaryColor}
        position='static'
      >
        <Toolbar className={classes.toolbar}>
        <div>
            <img className={classes.logo} src={Logo} alt=''/>
        </div>
        <div>
          <Button className={classes.menuButton} color='inherit'>
            Inicio
          </Button>
          <Button className={classes.menuButton} color='inherit'>
            Quiénes Somos
          </Button>
          <Button className={classes.menuButton} color='inherit'>
            Servicios
          </Button>
          <Button className={classes.menuButton} color='inherit'>
            Contacto
          </Button>
        </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Logo from '../assets/img/googlelogo_color_272x92dp.png'


const useStyles = makeStyles((theme) => ({
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

const links = [ 'Inicio', 'Quiénes Somos', 'Servicios', 'Contacto']

export default function ProminentAppBar() {
  const classes = useStyles()

  return (
        <div className="navbar">
            
            <div className="container">
                
                <div className="logo">
                    <img src={Logo} alt='' />
                </div>
              
                <ul className="ul-list">
                {links.map(link => {
                  return <Button className={classes.primaryColor} key={link}>{link}</Button>
                })}
                </ul>
            </div>
        </div>
  )
}

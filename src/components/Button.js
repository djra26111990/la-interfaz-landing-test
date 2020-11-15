import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { blue } from '@material-ui/core/colors'

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(blue[900]),
    backgroundColor: blue[900],
    '&:hover': {
      backgroundColor: blue[900],
    },
  },
}))(Button)

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    borderRadius: '20px',
    paddingRight: '30px',
    paddingLeft: '30px',
    marginTop: '20px'
  },
}))

const CustomizedButtons = (props) => {
  const classes = useStyles()

  return (
    <div>
      <ColorButton
        variant='contained'
        color='primary'
        className={classes.margin}
      >
        {props.text}
      </ColorButton>
    </div>
  )
}

export default CustomizedButtons

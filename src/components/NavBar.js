import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, IconButton } from '@material-ui/core'
import  MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles(theme =>({
    menuButton:{
        marginRight: theme.spacing(2),
        },  
    title:{
        flexGrow: 1
    },
    appBar: {
        width: `calc(100% - ${0}px)`,
        marginLeft: 0,
    },

}))


const Navbar = (props) => {

    const classes = useStyles()
   
    return(
       
            <AppBar className={classes.appBar} color="primary">
                <Toolbar>
                    <Typography variant="h6">
                        Copenhagen App
                    </Typography>
              </Toolbar>
            </AppBar>
            

       

    )
}


export default Navbar

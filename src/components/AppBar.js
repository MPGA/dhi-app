import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles, IconButton } from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles'; 
import theme from '../themeConfig';
import  MenuIcon from '@material-ui/icons/Menu';





const useStyles = makeStyles(theme =>({
    menuButton:{
        marginRight: theme.spacing(4),
        
    },
}))


const Navbar = () => {

    const classes = useStyles()
   
    return(
        <ThemeProvider theme= {theme}>
            <AppBar position="static" color="primary">
                <Toolbar>
                <IconButton 
                color="secondary" 
                size="medium"
                aria-label="menu"
                className={classes.menuButton}
                >
                    <MenuIcon />
                        </IconButton>
                    <Typography variant="h6">
                  Copenhagen Historial Buildings
                </Typography>
              </Toolbar>
            </AppBar>
            

        </ThemeProvider>

    )
}


export default Navbar; 

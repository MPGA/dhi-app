import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core'


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
                    </Typography>
              </Toolbar>
            </AppBar>
    )}

    export default Navbar
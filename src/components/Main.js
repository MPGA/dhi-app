import React from 'react'
import { makeStyles, Hidden } from '@material-ui/core'
import Navbar from './NavBar'
import NavDrawer from './Drawer'
import { getThemeProps } from '@material-ui/styles'



const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content:{
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))

const Main = () => {
    const classes = styles()
    const [open, setOpen ] = React.useState(false)

    const openAction = ()=> {
        setOpen(!open)
    }

    return(
        <div className={classes.root}>
            <Navbar openAction={openAction}/>
             <Hidden xsDown>
               <NavDrawer
                variant="permanent"
                open={open}
                onClose={getThemeProps.onClose ? getThemeProps.onClose : null}
                />
            </Hidden>
            <Hidden smUp>
             <NavDrawer
                variant="temporary"
                open={open}
                onClose={openAction}
                />
             </Hidden>
             <div className={classes.content}>
                 <div className={classes.Toolbar} ></div>

            
             </div>

        </div>
    )
}

export default Main
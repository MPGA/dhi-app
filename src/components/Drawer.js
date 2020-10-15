import React  from 'react'
import { Drawer, makeStyles , Divider } from '@material-ui/core'
import List from './List'




const styles = makeStyles(theme =>({
    drawer: {
        width: 400,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 400,
    },
    toolbar:theme.mixins.toolbar
}))

const NavDrawer = () => {

    const classes = styles()
    return (
        <Drawer
            className={classes.drawer}
            
            classes={{
                paper:classes.drawerPaper,
            }}
            anchor="right"
            variant="permanent"
            
            >
                <div className={classes.toolbar}></div>
                <Divider/>
                <List/>
        </Drawer>
    )
}


export default NavDrawer
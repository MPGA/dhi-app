import React  from 'react'
import { Drawer, makeStyles , Divider } from '@material-ui/core'
import List from './List'




const styles = makeStyles(theme =>({
    drawer: {
        width: 300,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 300,
    },
    toolbar:theme.mixins.toolbar
}))

const NavDrawer = (props) => {

    const classes = styles()
    return (
        <Drawer
            className={classes.drawer}
            
            classes={{
                paper:classes.drawerPaper,
            }}
            anchor="left"
            variant="permanent"
            
            >
                <div className={classes.toolbar}></div>
                <Divider/>
                <List/>
        </Drawer>
    )
}


export default NavDrawer
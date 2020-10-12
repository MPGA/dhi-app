import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core'
import TimelineIcon from '@material-ui/icons/Timeline'
import BubbleChartIcon from '@material-ui/icons/BubbleChart'




const ListDrawer = () => {
    return (
        <div>
            <List component='nav'>


                <ListItem buttom>
                    <ListItemIcon>
                        <BubbleChartIcon/>
                    <ListItemText primary='Test'/>
                     </ListItemIcon>
                     </ListItem>

                <ListItem buttom>
                    <ListItemIcon>
                        <TimelineIcon/>
                    <ListItemText primary='Test'/>
                     </ListItemIcon>     
                </ListItem>
            <Divider/>
            </List>
        </div>
    )
}




export default ListDrawer
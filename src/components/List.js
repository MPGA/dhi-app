import React ,{TemperatureBox} from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import  { Icon } from '@iconify/react';
import thermometerIcon from '@iconify/icons-mdi/thermometer';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TemperatureChart from './Temperature';
// import TemperatureBox from "../Pages/Temperature"


const useStyles = makeStyles((theme)=>({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}))

  export default function ListSideBar() {
    const classes = useStyles();
    return (


  <Router>
    <div>
      <List>
        <nav>
        <Link to="/Temperature" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <Icon icon={thermometerIcon} width="30px" height="40px" />
            </ListItemIcon>
          <ListItemText primary={"Temperature"}/>
          </ListItem>
        </Link>
        </nav>
        </List>
      <Switch>
        <Link to="/Humidity" className={classes.link}> 
        <ListItem button>
            <ListItemIcon>
              <InvertColorsIcon/>
            </ListItemIcon>
          <ListItemText primary={"Humidity"}/>
          </ListItem>
        </Link>
      <Route path="/Temperature" element ={<TemperatureChart/>}/>
      <Route path="/Humidity"/>  
        </Switch>
    </div>    
    </Router>
    );

  }

  
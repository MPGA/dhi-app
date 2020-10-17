import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TemperatureChart from './Temperature';
import EcoIcon from '@material-ui/icons/Eco';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
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
        <Link to="/" onClick={()=>window.location.href="/"} className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <AccountBalanceIcon/>
            </ListItemIcon>
          <ListItemText primary={"Archeological Finds"}/>
          </ListItem>
        </Link>
        </nav>
        </List>
      <Switch>
        <Link to="/trees" onClick={()=>window.location.href="/trees"} className={classes.link}> 
        <ListItem button>
            <ListItemIcon>
              <EcoIcon/>
            </ListItemIcon>
          <ListItemText primary={"Trees"}/>
          </ListItem>
        </Link>
      <Route path="/" element ={<TemperatureChart/>}/>
      <Route path="/trees"/>  
        </Switch>
    </div>    
    </Router>
    );

  }

  
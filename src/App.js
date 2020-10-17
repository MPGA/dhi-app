import React from 'react';
import {Switch, Route } from "react-router-dom";
import  {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig';
import PersistentDrawerRight from './components/PersistentDrawerRight';
import Navbar from './components/NavBar';
import MapboxTrees from './components/Map_trees';
import TemperatureChart from './components/Temperature';
import TreeDistribution from './components/TreeDistribution';
import HumidityWind from './components/HumidityWind';
import MapboxMap from './components/Map';



function App(){
  return(
    
      <ThemeProvider theme ={theme}>
        <Navbar text = {navBarOp()}/>
        <PersistentDrawerRight chart1={MapOp()}/>
        <Switch>
          <Route exact path = {"/"} component={MapboxMap}/>
          <Route exact path = {"/trees"} component={MapboxTrees}/>  
        </Switch>
      </ThemeProvider>
  
  )
}


function MapOp(){

  if(String(window.location).includes("trees")){
    return TreeDistribution 
  }
  else {
    return [TemperatureChart,HumidityWind]
  }
}

function navBarOp() {
  if (String(window.location).includes("trees")){
    return "Copenhagen Trees"
  }
  else {
    return "Archaeological Footprint of Ancient Buildings"
  }
}

export default App;















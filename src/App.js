import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  {ThemeProvider} from '@material-ui/core/styles';
import theme from './themeConfig';
import PersistentDrawerRight from './components/PersistentDrawerRight';
import MapboxMap from './components/Map';
import TreeDistribution from './components/TreeDistribution'
import MapboxTrees from './components/Map_trees';



function App(){
  return(
    
      <ThemeProvider theme ={theme}>
        <Navbar text = {navBarOp()}/>
        <PersistentDrawerRight chart1={mapOp()}/>
        <Switch>
          <Route exact path = {"/"} component={MapboxMap}/>
          <Route exact path = {"/"} component={MapboxTrees}/>  
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















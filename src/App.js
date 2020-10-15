import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import MapboxMap from './components/Map'
import Main from './components/Main'
import  {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig';
import Navbar from './components/NavBar';
import MapboxTrees from './components/Map_trees';
import Drawer from './components/Drawer';

function App(){
  return(
    
      <ThemeProvider theme ={theme}>
        <Navbar></Navbar>
        <Drawer></Drawer>
        <MapboxTrees/>
      </ThemeProvider>
  
  )
}


export default App;














/*export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 55.690507,
    longitude:12.587300,
    width: "100vw",
    height: "100vw",
    zoom: 12
  });

  const [selectedBuilding, setSelectedBuilding] = useState(null);

  useEffect(()=> {
    const listener = e => {
      if (e.key==="Escape") {
        setSelectedBuilding(null);
      }
    };
    window.addEventListener("keydown",listener);
    return() => {
      window.removeEventListener("keydown",listener);
    };
  },[]);


  return ( 
  <div>
    <ReactMapGL 
    {...viewport} 
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    mapStyle="mapbox://styles/mpga/cjdrbn31f292v2ss3o55ssx2y"
    onViewportChange={viewport => {
      setViewport(viewport);
    }}
    > 
    {buildings.features.map(building => (
      <Marker 
      key={building.properties.ID}
      latitude={building.geometry.coordinates[1]}
      longitude={building.geometry.coordinates[0]}
      >  
      < button
        className="marker-btn"
        onClick={e =>{
          e.preventDefault();
          setSelectedBuilding(building);
        }}
        >
          <img src="/point.svg" alt="Blue dot"/>
        </button>
      </Marker>

    ))}

    {selectedBuilding ? (
      <Popup
      latitude={selectedBuilding.geometry.coordinates[1]}
      longitude={selectedBuilding.geometry.coordinates[0]}
      onClose={()=> {
        setSelectedBuilding(null);
    }}
    >
      <div>
        <h4>{selectedBuilding.properties.anlaegsbet}</h4>
        <h4>{selectedBuilding.properties.datering}</h4>
      </div>
      </Popup>
    ) : null}

    </ReactMapGL>
  </div>
  );
}*/


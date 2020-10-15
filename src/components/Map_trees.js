import React,{ useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup, } from "react-map-gl";
import * as trees from "../Data/cph_trees.json";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';



export default function MapboxTrees() {
  const [viewport, setViewport] = useState({
    latitude: 55.690507,
    longitude:12.587300,
    width: "100vw",
    height: "100vh",
    zoom: 12
  });

  const [selectedTrees, setSelectedTree] = useState(null);

  useEffect(()=> {
    const listener = e => {
      if (e.key==="Escape") {
        setSelectedTree(null);
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
    {trees.features.map(tree => (
      <Marker 
      key={tree.properties.id}
      latitude={tree.geometry.coordinates[1]}
      longitude={tree.geometry.coordinates[0]}
      >  
      < button class="marker-btn" onClick={e =>{
          e.preventDefault();
          setSelectedTree(tree);
        }}
        >
          <FiberManualRecordIcon/>
          
        </button>
      </Marker>   
    ))}

    {selectedTrees ? (
      <Popup 
      latitude={selectedTrees.geometry.coordinates[1]}
      longitude={selectedTrees.geometry.coordinates[0]}
      onClose={()=> {
        setSelectedTree(null);
      }}
    >
      <div>
        <h4>Kind of Tree:{selectedTrees.properties.traeart}</h4>
        <h4>Planted Date:{selectedTrees.properties.planteaar}</h4>
      </div>
      </Popup>
    ) : null}

    </ReactMapGL> 
    </div>
  );
}


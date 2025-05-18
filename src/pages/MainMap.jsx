// import { Link } from 'react-router-dom';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlLayerTile from 'ol/layer/Tile';
import OlSourceOsm from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';

import 'ol/ol.css';

// eslint-disable-next-line
import MapComponent from '@terrestris/react-geo/dist/Map/MapComponent/MapComponent';

const map = new OlMap({
  view: new OlView({
    center: fromLonLat([83.101889, 54.851941]),
    zoom: 16,
  }),
  layers: [
    new OlLayerTile({
      source: new OlSourceOsm()
    })
  ]
});

function MainMap() {
  return (
    <div>
      <MapComponent
        map={map}
        style={{
          height: 'calc(100vh - 46px)'
        }}
      />
    </div>
  );
}

export default MainMap;

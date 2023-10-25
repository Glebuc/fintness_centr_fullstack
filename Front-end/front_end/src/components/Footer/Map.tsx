import React from 'react';
import './../../index.css';

const Map = () => (
    <div className="mapouter">
      <iframe
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=Av.%20L%C3%BAcio%20Costa&t=&z=13&ie=UTF8&iwloc=&output=embed"
      ></iframe>
    </div>
  );




  export default Map;
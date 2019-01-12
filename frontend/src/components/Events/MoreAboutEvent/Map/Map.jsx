import React from 'react';
import PropTypes from 'prop-types';
import './Map.css';

class Map extends React.Component {

    componentDidMount() {
        let lat = 40.416775;
        let lng = -3.70379;

        if(this.props.venue) {
            lng = this.props.venue.lon;
            lat = this.props.venue.lat;
        }
        
        // I am aware that the token shouldn't be visible on the client side in a prd env
        mapboxgl.accessToken = 'pk.eyJ1IjoiemxhdGlhbmlsaWV2IiwiYSI6ImNqaDN0cmRraTBnaWszMnByODl2NXdheDUifQ.VmNMi2r4heqjPcT10PPkMw';
        const map = new mapboxgl.Map({
            container: 'event-details__map', // container id
            style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
            center: [lng, lat], // starting position [lng, lat]
            zoom: 14 // starting zoom
        });
    }

    render() {
        let style = {display: 'block'};
        if(this.props && !this.props.venue) {
            style = {display: 'none'}
        }

        return <div id="event-details__map" style={style}/>;
    }
}

Map.propTypes = {
    venue: PropTypes.object
}

export default Map;
import React, {useCallback, useState} from 'react';
import {GoogleMap, LoadScript, Marker, useJsApiLoader} from "@react-google-maps/api";


const Map = () => {

    const containerStyle = {
        heigth: "400px",
        width: "400px"
    }

    const defaultCenter = {
        lat: -3.745,
        lng: -38.523
    }

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBKvkZ_1Pes9FksGIGWKMcjfMmqRCXeL9g"
    })

    const [map, setMap] = useState(null);

    const onLoad = useCallback( (map)=>{
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    },[])

    const onUnmount = useCallback( map =>{
        setMap(null);
    }, [])

    return isLoaded ? (
            
        <GoogleMap
            mapContainerStyle={containerStyle}
            zoom={9}
            center={defaultCenter}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={defaultCenter} />
        </GoogleMap>
    ) : <></>
}

export default Map;
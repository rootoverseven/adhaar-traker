import React, { useState } from 'react'
import "./styles.css"
import pic from "../../images/images.jpg"
import ReactMapGL, { Marker } from 'react-map-gl';

export default function MapTracker() {

    let [viewport, setViewport] = useState({
        longitude: 76,
        latitude: 28.4,
        zoom: 7

    })
    let [agentLocation, setAgentLocation] = useState({

    })

    return (
        <div className='map-tracker'>
            <div className='map-tracker-top'>
                <div className='map-t-left d-flex'>
                    <div className='map-agent-pic' style={{ backgroundImage: `url(${pic})` }}>
                        {/* <img src={pic} alt="" />     */}
                    </div>
                    <div className='map-agent-details d-flex flex-column align-items-start justify-content-center'>
                        <div className='map-agent-name'>Kacha Badam</div>
                        <div className='map-agent-email'>kacha@badam.com</div>
                    </div>
                </div>
                <div className='map-t-right'>

                </div>
            </div>
            <div className='map-tracker-bottom'>
                <ReactMapGL initialViewState={viewport}
                    style={{ borderRadius: '2rem' }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken={'pk.eyJ1Ijoicm9vdG92ZXJzZXZlbiIsImEiOiJjbDBpOTZzenowMGU3M2RzM212eDJza3FxIn0.7SsOyN1sjod0Ao46COA7GA'}>
                    <Marker longitude={77} latitude={28} anchor="bottom" >
                        <div class="pin1">
                            <div class="agent-marker" style={{ backgroundImage: `url(${pic})`}}></div>
                        </div>

                    </Marker>
                    <Marker longitude={75} latitude={29} anchor="bottom" >
                        <div class="pin1">
                            <div class="agent-marker"></div>
                        </div>

                    </Marker>
                </ReactMapGL>
            </div>
        </div>
    )
}

import React, { useState } from 'react'
import "./styles.css"
import pic from "../../images/images.jpg"
import ReactMapGL, { Marker } from 'react-map-gl';

export default function MapTracker() {

    let [viewport, setViewport] = useState({
        longitude: 86.151115,
        latitude: 23.669296,
        zoom: 12

    })
    let [agentLocation, setAgentLocation] = useState({

    })

    return (
        <div className='map-tracker'>
            <h3>Your agent is on the way.</h3>

            <div className='map-tracker-top'>
                <div className='map-t-left d-flex'>
                    <div className='map-agent-pic' style={{ backgroundImage: `url(${pic})` }}>
                        {/* <img src={pic} alt="" />     */}
                    </div>
                    <div className='map-agent-details d-flex flex-column align-items-start justify-content-center'>
                        <div className='map-agent-name'>John Doe</div>
                        <div className='map-agent-email'>john@doe.com</div>
                    </div>
                </div>
                <div className='map-t-right'>
                    <button className='btn btn-success'>Call Agent</button>
                </div>
            </div>
            <div className='map-tracker-bottom'>
                <ReactMapGL initialViewState={viewport}
                    style={{ borderRadius: '2rem' }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken={'pk.eyJ1Ijoicm9vdG92ZXJzZXZlbiIsImEiOiJjbDBpOTZzenowMGU3M2RzM212eDJza3FxIn0.7SsOyN1sjod0Ao46COA7GA'}>
                    <Marker longitude={86.1185} latitude={23.62236} anchor="bottom" >
                        <div className="pin1">
                            <div className="agent-marker" style={{ backgroundImage: `url(${pic})`}}></div>
                        </div>

                    </Marker>
                    <Marker longitude={86.151115} latitude={23.669296} anchor="bottom" >
                        <div className="pin1">
                            <div className="agent-marker"></div>
                        </div>

                    </Marker>
                </ReactMapGL>
            </div>
        </div>
    )
}

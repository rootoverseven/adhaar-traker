import React, { useState } from 'react'
import pic from "../../images/images.jpg"
import ReactMapGL, { Marker } from 'react-map-gl';
import { useNavigate } from 'react-router-dom';

import "./slots.css"

export default function Slots() {
    const navigate = useNavigate();
    let [show, setShow] = useState(false);

    function checkHandle(){
        setShow(true);
    }

    let [viewport, setViewport] = useState({
        longitude: 86.151115,
        latitude: 23.669296,
        zoom: 12

    })
    let [agentLocation, setAgentLocation] = useState({

    })

    return (
        <div className='slots'>
            <h3>Please choose a slot to book.</h3>
            <div className='slots-top'>
                <div className='table-top'>
                    <div>9:00 AM to 10:00 AM</div>    
                    <div>9:00 AM to 10:00 AM</div>    
                    <div>9:00 AM to 10:00 AM</div>    
                    <div>9:00 AM to 10:00 AM</div>    
                    <div>9:00 AM to 10:00 AM</div>    
                    <div>9:00 AM to 10:00 AM</div>    
                    <div>9:00 AM to 10:00 AM</div>    
                    <div>9:00 AM to 10:00 AM</div>    
                </div>
                <div className='table-bottom'>
                <button className='btn btn-success' onClick={()=>{ checkHandle()}}>Check Now</button>
                <button className='btn btn-success' onClick={()=>{ checkHandle()}}>Check Now</button>
                <button className='btn btn-success' onClick={()=>{ checkHandle()}}>Check Now</button>
                <button className='btn btn-success' onClick={()=>{ checkHandle()}}>Check Now</button>
                <button className='btn btn-success' onClick={()=>{ checkHandle()}}>Check Now</button>
                <button className='btn btn-success' onClick={()=>{ checkHandle()}}>Check Now</button>
                <button className='btn btn-success' onClick={()=>{ checkHandle()}}>Check Now</button>
                <button className='btn btn-success' onClick={()=>{ checkHandle()}}>Check Now</button>
                       
                </div>
                {(show)?
                <>
                <h4>Cograts, Agent Available for you given time</h4>
                <button className='btn btn-success' onClick={()=>{ navigate("/track")}}>Book Now</button>
                </>
                :
                null
                }

            </div>
            <h3>Available agents in your area.</h3>
            <div className='map-tracker-bottom'>
                <ReactMapGL initialViewState={viewport}
                    style={{ borderRadius: '2rem' }}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                    mapboxAccessToken={'pk.eyJ1Ijoicm9vdG92ZXJzZXZlbiIsImEiOiJjbDBpOTZzenowMGU3M2RzM212eDJza3FxIn0.7SsOyN1sjod0Ao46COA7GA'}>
                    <Marker longitude={86.14135} latitude={23.664226} anchor="bottom" >
                        <div className="pin1">
                            <div className="agent-marker" style={{ backgroundImage: `url(${pic})` }}></div>
                        </div>

                    </Marker>
                    <Marker longitude={86.1165} latitude={23.69796} anchor="bottom" >
                        <div className="pin1">
                            <div className="agent-marker" style={{ backgroundImage: `url(${pic})` }}></div>
                        </div>

                    </Marker>
                    <Marker longitude={86.1115} latitude={23.6266} anchor="bottom" >
                        <div className="pin1">
                            <div className="agent-marker" style={{ backgroundImage: `url(${pic})` }}></div>
                        </div>

                    </Marker>
                    <Marker longitude={86.1185} latitude={23.62236} anchor="bottom" >
                        <div className="pin1">
                            <div className="agent-marker" style={{ backgroundImage: `url(${pic})` }}></div>
                        </div>

                    </Marker>
                    <Marker longitude={86.1625} latitude={23.64206} anchor="bottom" >
                        <div className="pin1">
                            <div className="agent-marker" style={{ backgroundImage: `url(${pic})` }}></div>
                        </div>

                    </Marker>
                    <Marker longitude={86.11175} latitude={23.66976} anchor="bottom" >
                        <div className="pin1">
                            <div className="agent-marker" style={{ backgroundImage: `url(${pic})` }}></div>
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

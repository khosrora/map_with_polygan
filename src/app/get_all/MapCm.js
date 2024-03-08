'use client'
import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Polygon, Circle, Marker } from 'react-leaflet'

import 'leaflet/dist/leaflet.css';


import { FlyForbidden } from '@/lib/data/FlyForbidden';
import { FlightWithPermission } from '@/lib/data/FlyWithPremision';
import { DangerAreaCirles } from '@/lib/data/DangerAreaCircles';
import { DangerAreas } from '@/lib/data/DangerArea';
import { CautionArea } from '@/lib/data/CautionArea';
import { useConfig } from '@/context/IndexContext';
import DroneModal from './DroneModal';
import { testData } from './data';

function CafesMapCm() {

    const { drone } = useConfig()
    const [coordinates, setCoordinates] = useState([]);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!!testData) {
            setCoordinates(testData.map((row) => [row[1], row[0]]));
        }
        setData('test')
        const socket = new WebSocket(`wss://api.cafesiran.ir/ws/pager/2/`);
        socket.onmessage = (message) => {
            console.log('object');
            console.log(message);
            setData([1212])
            // const payload = JSON.parse(message.data);
            // setPager(pager => [payload, ...pager])
        }
    }, [testData]);

    console.log(data);

    const handleMarkerClick = () => {
        document.getElementById('my_modal_2').showModal()
    }


    return (
        <>
            <DroneModal />
            <MapContainer bounds={coordinates} className='h-full' center={[35.7000, 51.4167]} zoom={4} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Polygon
                bounds={coordinates}
                color={"purple"}
                boundsOptions={{ padding: [1, 1] }}
                positions={coordinates} /> */}

                {drone.map((item) => (
                    <Marker
                        key={item[0]}
                        position={[item[0], item[1]]}
                        eventHandlers={{
                            click: () => {
                                handleMarkerClick(item);
                            },
                        }}
                        icon={L.icon({
                            iconUrl: '/drone_p.png',
                            iconSize: [50, 50],
                        })}
                    />
                ))}

                {FlyForbidden.map((circle, index) => (
                    <Circle
                        key={index}
                        center={circle.center}
                        radius={circle.radius}
                        pathOptions={circle.options}
                    />
                ))}

                {FlightWithPermission.map((circle, index) => (
                    <Circle
                        key={index}
                        center={circle.center}
                        radius={circle.radius}
                        pathOptions={circle.options}
                    />
                ))}

                {DangerAreaCirles.map((circle, index) => (
                    <Circle
                        key={index}
                        center={circle.center}
                        radius={circle.radius}
                        pathOptions={circle.options}
                    />
                ))}

                {DangerAreas.map((area, index) => (
                    <Polygon
                        key={index}
                        positions={area.polygon}
                        pathOptions={area.options}
                    />
                ))}

                {CautionArea.map((area, index) => (
                    <Polygon
                        key={index}
                        positions={area.polygon}
                        pathOptions={area.options}
                    />
                ))}


                <Polygon

                    positions={[
                        [
                            35.746512259918504,
                            51.3463966213927
                        ],
                        [
                            35.74595496991936,
                            51.46043146873007
                        ],
                        [
                            35.6726373539688,
                            51.459057554906714
                        ],
                        [
                            35.66789587237085,
                            51.34090096609935
                        ]
                    ]}
                    pathOptions={{ color: '#000', fillColor: 'black', fillOpacity: 0.35 }}
                />

            </MapContainer>
        </>
    )
}

export default CafesMapCm
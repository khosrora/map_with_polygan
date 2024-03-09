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
import { toast } from 'sonner';
import { getDataAPI } from '@/utils/fetchData';

function CafesMapCm() {

    const { listDrones, polyganDrones, load } = useConfig()
    const [coordinates, setCoordinates] = useState(polyganDrones);

    // useEffect(() => {
    //     if (!!testData) {
    //         setCoordinates(testData.map((row) => [row[1], row[0]]));
    //     }
    // }, [testData]);




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

                {
                    !!listDrones &&
                    <Marker
                        position={[listDrones.lat, listDrones.lng]}
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
                }

                <Marker
                    position={[35.7000, 51.4167]}
                    eventHandlers={{
                        click: () => {
                            handleMarkerClick({ id: 1 });
                        },
                    }}
                    icon={L.icon({
                        iconUrl: '/drone_p.png',
                        iconSize: [50, 50],
                    })}
                />


                {polyganDrones.map(item => {
                    if (item.is_circle && !!item.center_lat) {
                        return (
                            <Circle
                                key={item.id}
                                center={[item.center_lat, item.center_long]}
                                radius={item.radius}
                                {...item.options}
                            />
                        );
                    } else if (item.polygon) {
                        return (
                            <Polygon
                                key={item.id}
                                positions={item.polygon.coordinates[0].map(coordinate => [coordinate[1], coordinate[0]])}
                                {...item.options}
                            />
                        );
                    }
                })}


                {/* 
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
                ))} */}


            </MapContainer>
        </>
    )
}

export default CafesMapCm
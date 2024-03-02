'use client'
import React from 'react'
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css'

import { useConfig } from '@/context/IndexContext.js';
import { toast } from 'sonner'

function MapCm() {

    const { color } = useConfig()


    L.Icon.Default.mergeOptions({
        iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
        iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
        shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
    });


    const create = e => {
        console.log(e);
        console.log(e.layer._latlngs[0]);
        toast('آیا از ثبت روی نقشه مطمئن هستید ؟ ', {
            action: {
                label: 'بله',
                onClick: () => {
                    toast.success('منطقه مورد نظر با موفقیت روی نقشه ثبت شد .')
                }
            },
        })
    }

    return (

        <MapContainer className='h-full' center={[35.7000, 51.4167]} zoom={4} scrollWheelZoom={true}>
            <FeatureGroup>
                <EditControl
                    draw={{
                        circle: false, rectangle: false, marker: false, circlemarker: false, polygon: {
                            shapeOptions: {
                                fillColor: color,
                                clickable: false,
                                color: color,
                            },

                        }
                    }}
                    position='topright'
                    onCreated={create}
                />
            </FeatureGroup>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

        </MapContainer>

    )
}

export default MapCm
'use client'
import React from 'react'
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet'
import { EditControl } from 'react-leaflet-draw'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css'

import { useConfig } from '@/context/IndexContext.js';
import { toast } from 'sonner'
import { convertLatLngArray } from '@/utils/changeFormat'


function MapCm() {


    const { color, addPolygan } = useConfig()


    L.Icon.Default.mergeOptions({
        iconRetinaUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
        iconUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
        shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
    });


    const create = (e) => {

        const layerType = e.layerType;

        let data;
        let polygonList;
        let option;

        if (layerType === "polygon") {
            option = e.layer.options;
            polygonList = e.layer._latlngs[0];
            if (option.color === null) {
                toast.error('قبل از ایجاد نوع چندضلعی را مشخص کنید.')
                return
            }

            data = {
                polygon: {
                    type: "Polygon",
                    coordinates: [convertLatLngArray(polygonList)]
                },
                options: option,
                is_circle: false,
            }
        } else {
            option = e.layer.options;
            polygonList = e.layer._latlng;
            const radius = e.layer._mRadius;
            if (option.color === null) {
                toast.error('قبل از ایجاد نوع چندضلعی را مشخص کنید.')
                return
            }
            data = {
                polygon: null,
                options: option,
                is_circle: true,
                center_lat: polygonList.lat,
                center_long: polygonList.lng,
                radius
            }
        }

        toast('آیا از ثبت روی نقشه مطمئن هستید ؟ ', {
            action: {
                label: 'بله',
                onClick: () => {
                    addPolygan(data)
                }
            },
        })
    }

    return (
        <MapContainer className='h-full' center={[35.7000, 51.4167]} zoom={4} scrollWheelZoom={true}>
            <FeatureGroup>
                <EditControl
                    draw={{
                        circle: {
                            shapeOptions: {
                                fillColor: color,
                                clickable: false,
                                color: color,
                            }
                        }, rectangle: false, marker: false, circlemarker: false, polygon: {
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
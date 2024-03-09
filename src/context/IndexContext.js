import React, { createContext, useContext, useEffect, useState } from 'react';
import { flyer } from '@/lib/data/flyer';
import { getDataAPI, postDataAPI } from '@/utils/fetchData';
import { toast } from 'sonner';
// import { fakeDataCrones } from '@/lib/data/fakeData';

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {

    const [color, setColor] = useState(null);
    const [drone, setDrone] = useState([]);
    const [fakeData, setFakseData] = useState(null);
    const [listDrones, setListDrones] = useState([]);

    const [load, setLoad] = useState(false);
    const [polyganDrones, setPolyganDrones] = useState([]);

    const connectionSocket = () => {
        const socket = new WebSocket(`ws://drone.canso.ir/ws/drone2/`);
        socket.onmessage = (message) => {
            const payload = JSON.parse(message.data);
            setListDrones(listDrones => [...listDrones, payload])
        }
    }

    const getDataPolygan = async () => {
        try {
            const res = await getDataAPI('geographic/area/');
            if (res.status === 200) {
                setPolyganDrones(res.data)
            }
        } catch (error) {
            console.log(error);
            toast.error('دریافت مناطق با مشکل مواجه شد')
        }
    }


    useEffect(() => {
        setLoad(true)
        setDrone(flyer);
        connectionSocket();
        getDataPolygan();
        setLoad(false)
    }, [])

    const addFakedata = (num) => {
        setFakseData(num)
    }

    const addPolygan = async (data) => {
        const type = localStorage.getItem('type');
        data.type = Number(type);
        try {
            const res = await postDataAPI('geographic/area/', data);
            if (res.status === 201) {
                toast.success('چند ضلعی جدید ثبت شد')
            }
        } catch (error) {
            toast.error('دوباره امتحان کنید')
        }
    }

    return (
        <ConfigContext.Provider value={{ color, setColor, fakeData, setFakseData, addPolygan, addFakedata, drone, listDrones, polyganDrones, load }}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfig = () => {
    return useContext(ConfigContext);
};
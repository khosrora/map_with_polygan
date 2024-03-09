import React, { createContext, useContext, useEffect, useState } from 'react';
import { flyer } from '@/lib/data/flyer';
import { postDataAPI } from '@/utils/fetchData';
import { toast } from 'sonner';

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {

    const [color, setColor] = useState(null);
    const [drone, setDrone] = useState([]);
    const [fakeData, setFakseData] = useState(null);
    const [listDrones, setListDrones] = useState();


    useEffect(() => {
        setDrone(flyer);
        const socket = new WebSocket(`ws://drone.canso.ir/ws/drone2/`);
        socket.onmessage = (message) => {
            const payload = JSON.parse(message.data);
            console.log(payload);
            setListDrones(payload)
        }
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
        <ConfigContext.Provider value={{ color, setColor, fakeData, setFakseData, addPolygan, addFakedata, drone, listDrones }}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfig = () => {
    return useContext(ConfigContext);
};
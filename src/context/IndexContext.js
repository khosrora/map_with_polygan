import React, { createContext, useContext, useEffect, useState } from 'react';
import { flyer } from '@/lib/data/flyer';
import { postDataAPI } from '@/utils/fetchData';
import { toast } from 'sonner';

const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {

    const [color, setColor] = useState(null);
    const [drone, setDrone] = useState([]);
    const [fakeData, setFakseData] = useState(null)


    useEffect(() => {
        setDrone(flyer)
    }, [])

    const addFakedata = (num) => {
        setFakseData(num)
    }

    const addPolygan = async (data) => {
        const type = localStorage.getItem('type');
        data.type = Number(type);
        console.log(data);
        // const res = await postDataAPI('', data);
        // console.log(res);
        // if (res.status === 201) {
        toast.success('چند ضلعی ارسال ثبت شد')
        // }
    }

    return (
        <ConfigContext.Provider value={{ color, setColor, fakeData, setFakseData, addPolygan, addFakedata, drone  }}>
            {children}
        </ConfigContext.Provider>
    );
};

export const useConfig = () => {
    return useContext(ConfigContext);
};
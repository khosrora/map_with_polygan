import axios from 'axios'
import React, { useState, useRef } from 'react'
import { toast } from 'sonner'


const basePath = 'http://drone.canso.ir/api/client/custom_time_line'

function DroneModal({ droneData }) {

    const closeModal = useRef();
    const [load, setLoad] = useState(false)

    const handleReject = async (data) => {
        try {
            setLoad(true)
            const address = `${basePath}/'${data.address[0]}'/'${data.address[1]}'`;
            const res = await axios.get(address)
            if (res.status === 200) {
                toast.success('دستور سقوط با موفقیت صادر شد')
            }
            setLoad(false)
            closeModal.current.click();
        } catch (error) {
            closeModal.current.click();
            toast.error('دوباره امتحان کنید')
            setLoad(false)
        }
    }

    return (
        <dialog id="my_modal_2" className="modal" dir='rtl'>
            <div className="modal-box w-11/12 max-w-5xl">
                {
                    !!droneData &&
                    <div className="bg-zinc-100 p-4 rounded-md text-xs">
                        <div className="grid grid-cols-5 gap-4">
                            <div className="">
                                <p> شناسه پهپاد : <span>{droneData.id}</span> </p>
                            </div>
                            <div className="">
                                <p> مختصات عرض جغرافیایی : <span>{droneData.lat}</span> </p>
                            </div>
                            <div className="">
                                <p> مختصات طول جغرافیایی : <span>{droneData.lng}</span> </p>
                            </div>
                            <div className="">
                                <p> سرعت : <span>{droneData.speed}</span> </p>
                            </div>
                            <div className="">
                                <p> شارژ باتری : <span>{droneData.battery}</span> </p>
                            </div>
                            <div className="">
                                <p> سیگنال : <span>{droneData.signal}</span> </p>
                            </div>
                            <div className="">
                                <p> سیستم موقعیت یاب جهانی (gps) : <span>{droneData.gps}</span> </p>
                            </div>
                        </div>
                        <div className="" dir='ltr'>
                            <button disabled={load} onClick={() => handleReject(droneData)} className="btn btn-error text-xs text-white">ارسال دستور سقوط</button>
                        </div>
                    </div>
                }
            </div>
            <form method="dialog" className="modal-backdrop">
                <button ref={closeModal}>close</button>
            </form>
        </dialog>
    )
}

export default DroneModal
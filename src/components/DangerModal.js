import { getDataAPI } from '@/utils/fetchData';
import axios from 'axios';
import React, { useRef, useState } from 'react'
import { toast } from 'sonner';
import Alert from './Alert';

// http://drone.canso.ir/api/client/custom_time_line/<str:ip>/<str:port>
const basePath = 'http://drone.canso.ir/api/client/custom_time_line'

function DangerModal({ danger }) {

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
        <dialog id="my_modal_3" className="modal" dir='rtl'>
            <div className="modal-box w-10/12 max-w-7xl">
                <h3 className="">لیست پهپاد های در منطقه ممنوعه</h3>
                <div className="my-4">
                    {
                        danger.length === 0 ? <Alert message='پهپادی در منطقه ممنوعه وجود ندارد' /> :
                            <div className='grid grid-cols-1 gap-4'>
                                {
                                    danger.map((i, index) =>
                                        <div key={index} className="bg-zinc-100 p-4 rounded-md text-xs">
                                            <div className="grid grid-cols-5 gap-4">
                                                <div className="">
                                                    <p> شناسه پهپاد : <span>{i.id}</span> </p>
                                                </div>
                                                <div className="">
                                                    <p> مختصات عرض جغرافیایی : <span>{i.lat}</span> </p>
                                                </div>
                                                <div className="">
                                                    <p> مختصات طول جغرافیایی : <span>{i.lng}</span> </p>
                                                </div>
                                                <div className="">
                                                    <p> سرعت : <span>{i.speed}</span> </p>
                                                </div>
                                                <div className="">
                                                    <p> شارژ باتری : <span>{i.battery}</span> </p>
                                                </div>
                                                <div className="">
                                                    <p> سیگنال : <span>{i.signal}</span> </p>
                                                </div>
                                                <div className="">
                                                    <p> سیستم موقعیت یاب جهانی (gps) : <span>{i.gps}</span> </p>
                                                </div>
                                            </div>
                                            <div className="" dir='ltr'>
                                                <button disabled={load} onClick={() => handleReject(i)} className="btn btn-error text-xs text-white">ارسال دستور سقوط</button>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                    }
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button ref={closeModal}>close</button>
            </form>
        </dialog>
    )
}

export default DangerModal
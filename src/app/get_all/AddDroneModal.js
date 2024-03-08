import React from 'react'
import { useForm } from "react-hook-form"

function AddDroneModal() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    console.log(errors);

    return (
        <dialog id="my_modal_1" className="modal" dir='rtl'>
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg"> ایجاد پهباد </h3>
                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2  gap-4 mt-4'>

                    <div className="textarea-md">
                        <label htmlFor="">نام و نام خانوادگی</label>
                        <input type="text" placeholder="نام و نام خانوادگی مالک پهباد را وارد کنید" className="input input-bordered w-full" {...register("fullName", {
                            required: { value: true, message: 'وارد کردن این فیلد الزامی است' }
                        })} />
                        {errors.fullName && <span className='text-xs text-red-600'>{errors.fullName.message}</span>}
                    </div>
                    <div className="textarea-md">
                        <label htmlFor="">شماره سریال</label>
                        <input type="text" placeholder="شماره سریال را اینجا وارد کنید" className="input input-bordered w-full" {...register("serial", {
                            required: { value: true, message: 'وارد کردن این فیلد الزامی است' }
                        })} />
                        {errors.serial && <span className='text-xs text-red-600'>{errors.serial.message}</span>}
                    </div>
                    <div className="textarea-md">
                        <label htmlFor="">نوع پهباد</label>
                        <input type="text" placeholder="نوع پهباد را وارد کنید" className="input input-bordered w-full" {...register("type", {
                            required: { value: true, message: 'وارد کردن این فیلد الزامی است' }
                        })} />
                        {errors.type && <span className='text-xs text-red-600'>{errors.type.message}</span>}
                    </div>
                    <div className="textarea-md">
                        <label htmlFor="">کد مجوز</label>
                        <input type="text" placeholder="کد مجوز را اینجا وارد کنید" className="input input-bordered w-full" {...register("code", {
                            required: { value: true, message: 'وارد کردن این فیلد الزامی است' }
                        })} />
                        {errors.code && <span className='text-xs text-red-600'>{errors.code.message}</span>}
                    </div>


                    <button type='submit' className='w-1/4 btn btn-neutral'>ثبت پهباد</button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default AddDroneModal
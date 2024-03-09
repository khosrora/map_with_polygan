"use client";
import React, { useState } from "react";
import ZoneTabs from "@/components/ZoneTabs";
import { useConfig } from "@/context/IndexContext";
import Image from "next/image";

function GetListDrones() {
  const { listDrones } = useConfig();
  const [typeZone, setTypeZone] = useState(1);
  console.log(listDrones);
  

  return (
    <div>
      <ZoneTabs typeZone={typeZone} setTypeZone={setTypeZone} />
      <div className="grid gap-y-3 overflow-y-auto lg:h-[26rem] xl:h-[29rem] 2xl:h-[40rem] pl-3">
               
      <div className="card lg:card-side bg-base-200 p-1 2xl:p-4">
          <figure className="pr-2">
            <Image
              className="rounded-lg"
              src="/p.png"
              alt="Album"
              width={124}
              height={124}
            />
          </figure>
          <div className="card-body py-2 px-5">
            <h3 className="card-title">1234567890</h3>
            <p className="text-sm">سیرنگ پلاس</p>
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn btn-primary w-full">
              جزئیات
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box space-y-4">
                <h3 className="text-xl font-extrabold">1234567890</h3>
                <p className="font-semibold">سیرنگ پلاس</p>
                <p className=" text-xs leading-6">     
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                </p>
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
          </div>
        </div>
                

        <div className="card lg:card-side bg-base-200 p-1 2xl:p-4">
          <figure className="pr-2">
            <Image
              className="rounded-lg"
              src="/p.png"
              alt="Album"
              width={148}
              height={148}
            />
          </figure>
          <div className="card-body py-2 px-5">
            <h3 className="card-title">1234567890</h3>
            <p className="text-sm">سیرنگ پلاس</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary w-full">جزئیات</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-200 p-1 2xl:p-4">
          <figure className="pr-2">
            <Image
              className="rounded-lg"
              src="/p.png"
              alt="Album"
              width={148}
              height={148}
            />
          </figure>
          <div className="card-body py-2 px-5">
            <h3 className="card-title">1234567890</h3>
            <p className="text-sm">سیرنگ پلاس</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary w-full">جزئیات</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-200 p-1 2xl:p-4">
          <figure className="pr-2">
            <Image
              className="rounded-lg"
              src="/p.png"
              alt="Album"
              width={148}
              height={148}
            />
          </figure>
          <div className="card-body py-2 px-5">
            <h3 className="card-title">1234567890</h3>
            <p className="text-sm">سیرنگ پلاس</p>
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn btn-primary w-full">
              جزئیات
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box space-y-4">
                <h3 className="text-xl font-extrabold">1234567890</h3>
                <p className="font-semibold">سیرنگ پلاس</p>
                <p className=" text-xs leading-6">     
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                </p>
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetListDrones;

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";

import skylineSide from '../../../assets/images/skyline-side.jpeg';
import lexusFront from '../../../assets/images/lexus-front.jpeg';
import c2 from '../../../assets/images/chevelle interior.jpeg';

interface DetailingInfoProps {
  setSelected: Dispatch<SetStateAction<string>>;
};

const DetailingInfo = ({ setSelected }: DetailingInfoProps) => {
  return (
    <div className="mx-auto text-center">
      <div className="w-11/12 mx-auto my-20">
        <h2 className="font-semibold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl my-4 ">Carefully Curated Packages</h2>
        <h2 className="text-xl lg:text-2xl 2xl:text-3xl mt-4 mb-12">Designed to rejuvenate your vehicle and make it the envy of everyone on the road</h2>
        <Link href="/book" className="bg-blue-500 py-1.5 px-3.5 rounded-full hover:bg-blue-400">Book Now</Link>
      </div>
      <div className="grid grid-cols-1 ml:grid-cols-5 gap-6 w-11/12 mx-auto">
        <div className="ml:col-span-3 bg-black rounded-2xl sm:rounded-3xl my-auto h-full flex flex-col justify-evenly">
          <h2 className="text-center text-2xl sm:text-3xl ml:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold p-4 md:p-6 ml:p-8 bg-gradient-to-r from-slate-300 to-blue-300 bg-clip-text text-transparent">From The Essential Maintenance</h2>
          <div className=" font-semibold text-xl sm:text-2xl ml:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl w-3/5 mx-auto">
            <h3 className="hover:scale-105 ease-in duration-200 py-6 ml:py-8 border-t border-l border-r border-slate-300 rounded-2xl sm:rounded-3xl shadow-top-left-right shadow-slate-300 hover:text-slate-300 cursor-pointer"
              onClick={() => setSelected('maintenance')}
            >
              Maintenance
            </h3>
            <h3 className="hover:scale-105 ease-in duration-200  py-6 ml:py-8 border-t border-l border-r border-blue-300 rounded-2xl sm:rounded-3xl shadow-top-left-right shadow-blue-300 hover:text-blue-300 cursor-pointer"
              onClick={() => setSelected('upgraded')}
            >
              Upgraded
            </h3>
            <h3 className="hover:scale-105 ease-in duration-200 py-6 ml:py-8 border-t border-l border-r border-yellow-300 rounded-2xl sm:rounded-3xl shadow-top-left-right shadow-yellow-300 hover:text-yellow-300 cursor-pointer"
              onClick={() => setSelected('premium')}
            >
              Premium
            </h3>
          </div>
          <h2 className="text-center text-2xl sm:text-3xl ml:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl  font-semibold p-4 md:p-6 ml:p-8 bg-gradient-to-r from-blue-300 to-yellow-300 bg-clip-text text-transparent">To The Luxurious Premium</h2>
        </div>
        <div className="ml:col-span-2 space-y-6 flex flex-col">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image className="w-full h-full object-cover hover:scale-110 ease-in duration-200" src={lexusFront} width={1600} height={1248} alt="lexux front" />
          </div>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <Image className="w-full h-full object-cover hover:scale-110 ease-in duration-200" src={skylineSide} width={1600} height={1204} alt="skyline side" />
          </div>
        </div>
      </div>

      <div className="grid ml:grid-cols-2 gap-6 w-11/12 mx-auto my-20">
        <div className="ml:col-span-1 rounded-2xl sm:rounded-3xl bg-black max-h-96 xl:max-h-104 2xl:max-h-128 relative overflow-hidden">
          <Image className="w-full h-full object-cover hover:scale-110 ease-in duration-200" src={c2} width={2048} height={1366} alt="chevelle interior" />
        </div>
        <div className="ml:col-span-1 rounded-2xl sm:rounded-3xl bg-black my-auto h-full flex flex-col justify-center max-ml:order-first">
          <h3 className="capitalize text-center text-2xl sm:text-3xl ml:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold p-8 bg-gradient-to-r from-slate-300 via-blue-300 to-yellow-300 bg-clip-text text-transparent">
            revive your ride with a deep interior clean
          </h3>
          <p className="w-11/12 mx-auto">Experience the unparalleled freshness of a deep interior clean as our expert car detailing team revives your ride, making it feel like new. <br /> <Link href="/book" className="underline text-blue-400">Book your appointment now</Link> and elevate your driving experience.</p>
        </div>
      </div>
    </div>
  )
}

export default DetailingInfo;
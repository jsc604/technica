import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";

import ramBadge2 from '../../../assets/images/ram badge 2.jpeg';
import skylineSide from '../../../assets/images/skyline-side.jpeg';
import lexusFront from '../../../assets/images/lexus-front.jpeg';
const bmwWheel = 'https://images.unsplash.com/photo-1586102975984-128b3026b94f';
const infinitiInterior = 'https://images.unsplash.com/photo-1587350811436-9063f1c48ea4';
const mustang = 'https://images.unsplash.com/photo-1494905998402-395d579af36f';

interface DetailingInfoProps {
  setSelected: Dispatch<SetStateAction<string>>;
};

const DetailingInfo = ({ setSelected }: DetailingInfoProps) => {
  return (
    <section className="mx-auto text-center">
      <div className="w-5/6 mx-auto my-20">
        <h2 className="font-semibold text-4xl my-4 text-stone-300">Carefully Curated Packages</h2>
        <h2 className="text-xl mt-4 mb-12 text-stone-400">Designed to rejuvenate your vehicle and make it the envy of everyone on the road</h2>
        <Link href="/" className="bg-indigo-600 py-2.5 px-3.5 rounded-full hover:bg-indigo-500">Book Now</Link>
      </div>
      <div className="grid grid-cols-1 ml:grid-cols-5 gap-6 w-5/6 mx-auto">
        <div className="ml:col-span-3 bg-black rounded-2xl sm:rounded-3xl my-auto h-full flex flex-col justify-evenly">
          <h2 className="text-center text-2xl sm:text-3xl ml:text-4xl font-semibold p-4 md:p-6 ml:p-8 bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">From The Essential Maintenance</h2>
          <div className=" font-semibold text-xl sm:text-2xl ml:text-3xl w-3/5 mx-auto">
            <h3 className="hover:scale-105 py-6 ml:py-8 border-t border-l border-r border-sky-500 rounded-2xl sm:rounded-3xl shadow-top-left-right shadow-sky-500 hover:text-sky-500 cursor-pointer"
              onClick={() => setSelected('maintenance')}
            >
              Maintenance
            </h3>
            <h3 className="hover:scale-105 py-6 ml:py-8 border-t border-l border-r border-indigo-600 rounded-2xl sm:rounded-3xl shadow-top-left-right shadow-indigo-600 hover:text-indigo-600 cursor-pointer"
              onClick={() => setSelected('upgraded')}
            >
              Upgraded
            </h3>
            <h3 className="hover:scale-105 py-6 ml:py-8 border-t border-l border-r border-rose-600 rounded-2xl sm:rounded-3xl shadow-top-left-right shadow-rose-600 hover:text-rose-600 cursor-pointer"
              onClick={() => setSelected('premium')}
            >
              Premium
            </h3>
          </div>
          <h2 className="text-center text-2xl sm:text-3xl ml:text-4xl font-semibold p-4 md:p-6 ml:p-8 bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">To The Luxurious Premium</h2>
        </div>
        <div className="ml:col-span-2 space-y-6 flex flex-col">
          <Image className="w-full h-full rounded-2xl sm:rounded-3xl object-cover" src={lexusFront} width={1600} height={1248} alt="lexux front" />
          <Image className="w-full h-full rounded-2xl sm:rounded-3xl object-cover" src={infinitiInterior} width={1039} height={693} alt="infiniti interior" />
        </div>
      </div>

      <div className="grid ml:grid-cols-5 gap-6 w-5/6 mx-auto my-20">
        <div className="ml:col-span-3 rounded-2xl sm:rounded-3xl bg-black max-h-96">
          <Image className="w-full h-full rounded-2xl sm:rounded-3xl object-cover" src={skylineSide} width={1600} height={1204} alt="skyline side" />
        </div>
        <div className="ml:col-span-2 rounded-2xl sm:rounded-3xl bg-black my-auto h-full flex flex-col justify-center max-ml:order-first">
          <h3 className="capitalize text-center text-2xl sm:text-3xl ml:text-4xl font-semibold p-8 bg-gradient-to-r from-sky-500 via-indigo-600 to-rose-600 bg-clip-text text-transparent">
            revive your ride with a deep interior clean
          </h3>
        </div>
      </div>
    </section>
  )
}

export default DetailingInfo;
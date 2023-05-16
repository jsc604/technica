import Image from "next/image";
import Link from "next/link";

import lexus from '../../../assets/images/lexus-front2.jpeg';

const DetailingOutro = () => {
  return (
    <div className="mx-auto text-center my-16">
      <div className="w-11/12 mx-auto items-center">
        <h2 className="font-semibold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl my-4">Book Your Appointment Today</h2>
        <h2 className="text-xl lg:text-2xl 2xl:text-3xl mt-4 mb-12 capitalize">Leave the mess for us! Professional detailing services available</h2>
        <Link href="/book" className="bg-blue-500 py-1.5 px-3.5 rounded-full hover:bg-blue-400">Book Now</Link>
      </div>
      <div className="grid ml:grid-cols-2 gap-6 w-11/12 mx-auto my-20">
        <div className="ml:col-span-1 rounded-2xl sm:rounded-3xl bg-black my-auto h-full flex flex-col justify-center">
          <h3 className="capitalize text-center text-2xl sm:text-3xl ml:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold p-8 bg-gradient-to-r from-slate-300 via-blue-300 to-yellow-300 bg-clip-text text-transparent">
            from interior to exterior, we leave no detail overlooked
          </h3>
          <p className="w-11/12 mx-auto">Rediscover the beauty of your vehicle with our comprehensive detailing services, meticulously addressing every aspect from the interior to the exterior, and indulge in the satisfaction of driving a car that looks and feels brand new.</p>
        </div>
        <div className="ml:col-span-1 rounded-2xl sm:rounded-3xl bg-black max-h-96 xl:max-h-104 2xl:max-h-128 relative overflow-hidden">
          <Image className="w-full h-full object-cover hover:scale-110 ease-in duration-200" src={lexus} width={1600} height={1204} alt="lexus" />
        </div>
      </div>
    </div>
  )
};

export default DetailingOutro;
import Image from "next/image";
import Link from "next/link";

import lexus from '../../../assets/images/lexus-front2.jpeg';

const DetailingOutro = () => {
  return (
    <section className="mx-auto text-center my-16">
      <div className="w-11/12 mx-auto items-center">
        <h2 className="font-semibold text-4xl my-4 text-stone-300">Book Your Appointment Today</h2>
        <h2 className="text-xl mt-4 mb-12 text-stone-400 capitalize">Leave the mess for us! Professional detailing services available</h2>
        <Link href="/" className="bg-indigo-600 py-2.5 px-3.5 rounded-full hover:bg-indigo-500">Book Now</Link>
      </div>
      <div className="grid ml:grid-cols-5 gap-6 w-11/12 mx-auto my-20">
        <div className="ml:col-span-2 rounded-2xl sm:rounded-3xl bg-black my-auto h-full flex flex-col justify-center">
          <h3 className="capitalize text-center text-2xl sm:text-3xl ml:text-4xl font-semibold p-8 bg-gradient-to-r from-sky-500 via-indigo-600 to-rose-600 bg-clip-text text-transparent">
            from interior to exterior, we leave no detail overlooked
          </h3>
        </div>
        <div className="ml:col-span-3 rounded-2xl sm:rounded-3xl bg-black max-h-96">
          <Image className="w-full h-full rounded-2xl sm:rounded-3xl object-cover" src={lexus} width={1600} height={1204} alt="lexus" />
        </div>
      </div>
    </section>
  )
};

export default DetailingOutro;
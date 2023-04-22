import Image from "next/image";
import TitleBanner from "./TitleBanner";
import bentley from "../../assets/images/iyslen.photo-0077.png";

const DetailingInfo = () => {
  return (
    <div className="mx-auto text-center">
      <TitleBanner image={bentley} height={667} width={1000} alt="bentley" heading='Exceptional Detailing Services' />
      <div className="w-5/6 mx-auto my-20">
        <h2 className="font-semibold text-3xl my-4 text-stone-300">Carefully Curated Packages</h2>
        <h2 className="text-xl my-4 text-stone-400">Designed to rejuvenate your vehicle and make it the envy of everyone on the road</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 w-5/6 mx-auto">
        <div className="col-span-3 bg-black rounded-lg">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold p-8 bg-gradient-to-r from-sky-500 to-indigo-500 bg-clip-text text-transparent">From the Essential Maintenance</h2>
          <div className=" font-semibold text-xl sm:text-2xl md:text-3xl w-3/5 mx-auto">
            <h3 className="py-8 border-t border-l border-r border-sky-500 rounded-t-lg shadow-top-left-right shadow-sky-500">Maintenance</h3>
            <h3 className="py-8 border-t border-l border-r border-indigo-500 rounded-t-lg shadow-top-left-right shadow-indigo-500">Upgraded</h3>
            <h3 className="py-8 border-t border-l border-r border-rose-500 rounded-t-lg shadow-top-left-right shadow-rose-500">Premium</h3>
          </div>
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold p-8 bg-gradient-to-r from-indigo-500 to-rose-500 bg-clip-text text-transparent">To the Luxurious Premium</h2>

        </div>
      </div>
      {/* <p >
          Our carefully curated packages, ranging from the essential Maintenance
          to the luxurious Premium, cater to your unique needs and budget, ensuring a
          personalized experience that will exceed your expectations. With our expert touch
          and meticulous attention to detail, your car will not only look stunning but also
          enjoy lasting protection from the elements. Don&apos;t miss out on the opportunity to
          give your vehicle the VIP treatment it deserves. Book your appointment today and
          let us unlock your car&apos;s true potential, revealing a breathtaking finish that will
          leave you in awe.
        </p> */}
    </div>
  )
}

export default DetailingInfo;
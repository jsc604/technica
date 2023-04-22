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
          <h2 className="text-center text-3xl font-semibold p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">From the Essential Maintenance</h2>
          <div>
            <h3>Maintenance</h3>
            <h3>Upgraded</h3>
            <h3>Premium</h3>
          </div>
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
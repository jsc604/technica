import Link from "next/link";
import GalleryCarousel from "./GalleryCarousel";

const HomeInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-8 w-11/12 min-h-80 lg:min-h-96 xl:min-h-112 mx-auto gap-6 text-center">
      <div className="items-center flex flex-col justify-center">
        <h1 className="text-5xl font-bold">Technica Automotive</h1>
        <h2 className="text-2xl font-semibold">Detailing, Paint Correction, and Ceramic Coating</h2>
        <Link href="/book" className="bg-indigo-600 py-1.5 px-3.5 my-4 rounded-full hover:bg-indigo-500">Book Now</Link>       
        <h2 className="text-2xl font-semibold">What makes Technica Automotive a good choice?</h2>
        <ul className="text-xl mx-auto">
          <li>&#x2022; Certified in auto detailing since 2021</li>
          <li>&#x2022; Auto detailing saves time by handling car cleaning and maintenance, allowing you to focus on your daily routine</li>
          <li>&#x2022; Top of the line products to protect your vehicles paint and interior</li>
          <li>&#x2022; Professional detailing can boost your cars resale value by enhancing it&apos;s appearance and upkeep</li>
        </ul>
      </div>
      <GalleryCarousel />
    </div>
  );
};

export default HomeInfo;

import Link from "next/link";
import GalleryCarousel from "./GalleryCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faClock, faMoneyBillTrendUp, faTrophy } from "@fortawesome/free-solid-svg-icons";

const HomeInfo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-8 w-11/12 min-h-80 lg:min-h-96 xl:min-h-112 mx-auto gap-6">
      <div className="items-center flex flex-col justify-center text-center">
        
        <h1 className="text-5xl font-bold">Technica Automotive</h1>
        <h2 className="text-2xl font-semibold">Detailing, Paint Correction, and Ceramic Coating</h2>
        <Link href="/book" className="bg-blue-500 py-1.5 px-3.5 rounded-full hover:bg-blue-400 my-4">Book Now</Link>
        <h2 className="text-2xl font-semibold my-4">What makes Technica Automotive a good choice?</h2>

        <div className="text-xl mx-auto text-start">
          <div className="my-4 flex items-start">
            <FontAwesomeIcon icon={faAward} size='lg' className="mr-3 text-sky-400" />
            <span className="flex-1">Certified in auto detailing since 2021</span>
          </div>
          <div className="my-4 flex items-start">
            <FontAwesomeIcon icon={faClock} className="mr-3 mt-1.5" />
            <span className="flex-1">Auto detailing saves time by handling car cleaning and maintenance, allowing you to focus on your daily routine</span>
          </div>
          <div className="my-4 flex items-start">
            <FontAwesomeIcon icon={faTrophy} className="mr-3 mt-1.5 text-amber-300" />
            <span className="flex-1">Top of the line products to protect your vehicles paint and interior</span>
          </div>
          <div className="my-4 flex items-start">
            <FontAwesomeIcon icon={faMoneyBillTrendUp} className="mr-3 mt-1.5 text-green-500" />
            <span className="flex-1">Professional detailing can boost your cars resale value by enhancing its appearance and upkeep</span>
          </div>
        </div>

      </div>
      <GalleryCarousel />
    </div>
  );
};

export default HomeInfo;

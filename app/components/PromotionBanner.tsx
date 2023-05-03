import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PromotionBanner = () => {
  return (
    <section className="flex justify-center text-lg align-center p-2 text-center bg-black shadow-full shadow-white">
      <FontAwesomeIcon icon={faBullhorn} className="text-blue-400 my-auto"/>
      <h1 className="mx-4">First 100 Customers - Paint Correction and Polish with a Ceramic Coating (3 year) - $950</h1>
      <FontAwesomeIcon icon={faBullhorn} className="text-blue-400 my-auto"/>
    </section>
  )
};

export default PromotionBanner;
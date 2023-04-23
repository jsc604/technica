import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PromotionBanner = () => {
  return (
    <div className="flex justify-center text-lg align-center p-4 text-center bg-stone-900">
      <FontAwesomeIcon icon={faBullhorn} className="text-sky-500 my-auto"/>
      <h1 className="mx-4">First 100 Customers - Paint Correction and Polish with a Ceramic Coating (3 year) - $950</h1>
      <FontAwesomeIcon icon={faBullhorn} className="text-sky-500 my-auto"/>
    </div>
  )
};

export default PromotionBanner;
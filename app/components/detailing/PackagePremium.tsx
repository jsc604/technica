import { faChevronDown, faChevronUp, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

interface infoDropDownProps {
  infoDropDown: boolean;
  setinfoDropDown: Dispatch<SetStateAction<boolean>>;
}

const PackagePremium = ({ infoDropDown, setinfoDropDown }: infoDropDownProps) => {

  const handleClick = () => {
    setinfoDropDown(!infoDropDown);
  }

  return (
    <div className="w-4/5 mx-auto">
      <div className="mx-auto mb-12 text-center">
        <button className="mx-auto text-yellow-300 rounded-full hover:underline" onClick={handleClick}>
          Learn More{' '}
          {infoDropDown ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
        {infoDropDown && (
          <p>
            The Premium package is the pinnacle of luxury and performance for your
            vehicle&apos;s care. Building upon the services provided in the Maintenance and
            Upgraded packages, the Premium package offers an advanced level of protection
            and enhancement for your car&apos;s appearance. This comprehensive treatment
            includes a thorough interior and exterior detail and polish, addressing any
            minor imperfections and restoring the vehicle&apos;s original shine. Ideal
            for car enthusiasts and those who demand only the best for their vehicle,
            the Premium package delivers an unparalleled level of care and attention to detail.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-12 mx-auto mb-12 lg:grid-cols-3">
      <div className="bg-black rounded-2xl sm:rounded-3xl shadow-full shadow-yellow-300">
          <h2 className="p-4 text-xl font-semibold text-center text-black bg-yellow-300 rounded-t-2xl sm:rounded-t-3xl">Complete Premium Detail</h2>
          {/* <h2 className="mt-8 text-3xl text-center">$575</h2> */}
          <p className="mt-6 mb-4 text-sm font-light text-center"><FontAwesomeIcon icon={faClock} /> Approximately 6 hours</p>
          <div className="grid grid-cols-1 p-4 pb-8 mx-auto sm:max-lg:grid-cols-2 w-fit">
            <li>Exterior Wash</li>
            <li>Wheels Washed</li>
            <li>Tire Dressing</li>
            <li>Vehicle Towel dry</li>
            <li>Badge & Crevasses Hand Detailed</li>
            <li>Exterior Decontamination</li>
            <li>Exterior Sealant</li>
            <li>Wheels Hand Detailed</li>
            <li>Clay Bar Exterior</li>
            <li>Surface Polish</li>
            <li>Surfaces Wiped</li>
            <li>Windows Cleaned</li>
            <li>Door Jams Cleaned</li>
            <li>Dry Vacuum (Including Trunk)</li>
            <li>Thorough Clean</li>
            <li>Air Vents Addressed</li>
            <li>Crevasses Hand Detailed</li>
            <li>Rubber Mats Detailed</li>
            <li>Fabric Restoration</li>
            <li>Plastic, Trim and Seat Light Restoration</li>
          </div>
        </div>
      <div className="bg-black rounded-2xl sm:rounded-3xl shadow-full shadow-yellow-300">
          <h2 className="p-4 text-xl font-semibold text-center text-black bg-yellow-300 rounded-t-2xl sm:rounded-t-3xl">Premium Interior Detail</h2>
          {/* <h2 className="mt-8 text-3xl text-center">$325</h2> */}
          <p className="mt-6 mb-4 text-sm font-light text-center"><FontAwesomeIcon icon={faClock} /> Approximately 3.5 hours</p>
          <div className="grid grid-cols-1 p-4 pb-8 mx-auto sm:max-lg:grid-cols-2 w-fit">
            <li>Surfaces Wiped</li>
            <li>Windows Cleaned</li>
            <li>Door Jams Cleaned</li>
            <li>Dry Vacuum (Including Trunk)</li>
            <li>Thorough Clean</li>
            <li>Air Vents Addressed</li>
            <li>Crevasses Hand Detailed</li>
            <li>Rubber Mats Detailed</li>
            <li>Fabric Restoration</li>
            <li>Plastic, Trim and Seat Light Restoration</li>
          </div>
        </div>
        <div className="bg-black rounded-2xl sm:rounded-3xl shadow-full shadow-yellow-300">
          <h2 className="p-4 text-xl font-semibold text-center text-black bg-yellow-300 rounded-t-2xl sm:rounded-t-3xl">Premium Exterior Detail</h2>
          {/* <h2 className="mt-8 text-3xl text-center">$325</h2> */}
          <p className="mt-6 mb-4 text-sm font-light text-center"><FontAwesomeIcon icon={faClock} /> Approximately 3.5 hours</p>
          <div className="grid grid-cols-1 p-4 pb-8 mx-auto sm:max-lg:grid-cols-2 w-fit">
            <li>Exterior Wash</li>
            <li>Wheels Washed</li>
            <li>Tire Dressing</li>
            <li>Vehicle Towel dry</li>
            <li>Badge & Crevasses Hand Detailed</li>
            <li>Exterior Decontamination</li>
            <li>Exterior Sealant</li>
            <li>Wheels Hand Detailed</li>
            <li>Clay Bar Exterior</li>
            <li>Surface Polish</li>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PackagePremium;

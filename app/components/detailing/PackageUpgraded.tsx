import { faCaretDown, faChevronDown, faChevronUp, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

interface infoDropDownProps {
  infoDropDown: boolean;
  setinfoDropDown: Dispatch<SetStateAction<boolean>>;
}

const PackageUpgraded = ({ infoDropDown, setinfoDropDown }: infoDropDownProps) => {

  const handleClick = () => {
    setinfoDropDown(!infoDropDown);
  }

  return (
    <div className="w-4/5 mx-auto">
      <div className="mx-auto mb-12 text-center">
        <button className="text-blue-300 rounded-full mx-auto hover:underline" onClick={handleClick}>
          Learn More{' '}
          {infoDropDown ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
        {infoDropDown && (
          <p>
            Our Upgraded package takes vehicle care to the next level, combining the
            essential services of the Maintenance package with additional treatments for
            a more thorough and enhanced result. This package includes a complete
            detailing addressing minor scratches and imperfections while restoring the
            vehicle&apos;s original shine.  With our Upgraded package, your car
            will not only look clean but also feel revitalized, making it the perfect
            choice for those seeking a more comprehensive detailing experience.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mx-auto mb-12">
        <div className="rounded-2xl sm:rounded-3xl shadow-full shadow-blue-300 bg-black">
          <h2 className="font-semibold text-xl text-center p-4 rounded-t-2xl sm:rounded-t-3xl bg-blue-300 text-black">Complete Upgraded Detail</h2>
          <h2 className="text-center text-3xl mt-8">$350</h2>
          <p className="font-light text-sm text-center mb-4"><FontAwesomeIcon icon={faClock} /> Approximately 3.5 hours</p>
          <div className="p-4 pb-8 grid grid-cols-1 sm:max-lg:grid-cols-2 w-fit mx-auto">
            <li>Exterior Wash</li>
            <li>Wheels Washed</li>
            <li>Tire Dressing</li>
            <li>Vehicle Towel dry</li>
            <li>Badge & Crevasses Hand Detailed</li>
            <li>Exterior Decontamination</li>
            <li>Exterior Sealant</li>
            <li>Surfaces Wiped</li>
            <li>Windows Cleaned</li>
            <li>Door Jams Cleaned</li>
            <li>Dry Vacuum (Including Trunk)</li>
            <li>Thorough Clean</li>
            <li>Air Vents Addressed</li>
            <li>Crevasses Hand Detailed</li>
            <li>Rubber Mats Detailed</li>
          </div>
        </div>
        <div className="rounded-2xl sm:rounded-3xl shadow-full shadow-blue-300 bg-black">
          <h2 className="font-semibold text-xl text-center p-4 rounded-t-2xl sm:rounded-t-3xl bg-blue-300 text-black">Upgraded Interior Detail</h2>
          <h2 className="text-center text-3xl mt-8">$200</h2>
          <p className="font-light text-sm text-center mb-4"><FontAwesomeIcon icon={faClock} /> Approximately 2 hours</p>
          <div className="p-4 pb-8 grid grid-cols-1 sm:max-lg:grid-cols-2 w-fit mx-auto">
            <li>Surfaces Wiped</li>
            <li>Windows Cleaned</li>
            <li>Door Jams Cleaned</li>
            <li>Dry Vacuum (Including Trunk)</li>
            <li>Thorough Clean</li>
            <li>Air Vents Addressed</li>
            <li>Crevasses Hand Detailed</li>
            <li>Rubber Mats Detailed</li>
          </div>
        </div>
        <div className="rounded-2xl sm:rounded-3xl shadow-full shadow-blue-300 bg-black">
          <h2 className="font-semibold text-xl text-center p-4 rounded-t-2xl sm:rounded-t-3xl bg-blue-300 text-black">Upgraded Exterior Detail</h2>
          <h2 className="text-center text-3xl mt-8">$185</h2>
          <p className="font-light text-sm text-center mb-4"><FontAwesomeIcon icon={faClock} /> Approximately 2 hours</p>
          <div className="p-4 pb-8 grid grid-cols-1 sm:max-lg:grid-cols-2 w-fit mx-auto">
            <li>Exterior Wash</li>
            <li>Wheels Washed</li>
            <li>Tire Dressing</li>
            <li>Vehicle Towel dry</li>
            <li>Badge & Crevasses Hand Detailed</li>
            <li>Exterior Decontamination</li>
            <li>Exterior Sealant</li>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PackageUpgraded;

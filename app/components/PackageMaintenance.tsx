import { faCaretDown, faChevronDown, faChevronUp, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

interface dropDownProps {
  dropDown: boolean;
  setDropDown: Dispatch<SetStateAction<boolean>>;
}

const PackageMaintenance = ({ dropDown, setDropDown }: dropDownProps) => {

  const handleClick = () => {
    setDropDown(!dropDown);
  }

  return (
    <div>
      <div className="mx-auto w-5/6 mb-12 text-center">
        <button className="text-sky-400 rounded-full mx-auto" onClick={handleClick}>
          Learn More{' '}
          {dropDown ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
        {dropDown && (
          <p>
            The Maintenance package offers an essential level of care for your vehicle,
            ensuring it remains clean and well-maintained. This comprehensive service
            includes an exterior wash, wheel cleaning, tire dressing, and a thorough
            towel dry, giving your car the attention it deserves. Designed for those who
            want to keep their vehicle in great shape without breaking the bank, our
            Maintenance package is an affordable and effective option for regular upkeep.
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-5/6 mx-auto mb-12">
        <div className="rounded-2xl sm:rounded-3xl shadow-full shadow-sky-600 bg-black">
          <h2 className="font-semibold text-xl text-center p-4 rounded-t-2xl sm:rounded-t-3xl bg-sky-600">Maintenance Exterior Detail</h2>
          <h2 className="text-center text-3xl mt-8">$80</h2>
          <p className="font-light text-sm text-center mb-4"><FontAwesomeIcon icon={faClock} /> Approximately  1 hour</p>
          <div className="p-4 pb-8 grid grid-cols-1 sm:max-lg:grid-cols-2 w-fit mx-auto">
            <li>Exterior Wash</li>
            <li>Wheels Washed</li>
            <li>Tire Dressing</li>
            <li>Vehicle Towel dry</li>
          </div>
        </div>
        <div className="rounded-2xl sm:rounded-3xl shadow-full shadow-sky-600 bg-black">
          <h2 className="font-semibold text-xl text-center p-4 rounded-t-2xl sm:rounded-t-3xl bg-sky-600">Maintenance Interior Detail</h2>
          <h2 className="text-center text-3xl mt-8">$80</h2>
          <p className="font-light text-sm text-center mb-4"><FontAwesomeIcon icon={faClock} /> Approximately 1 hour</p>
          <div className="p-4 pb-8 grid grid-cols-1 sm:max-lg:grid-cols-2 w-fit mx-auto">
            <li>Surfaces Wiped</li>
            <li>Windows Cleaned</li>
            <li>Door Jams Cleaned</li>
            <li>Dry Vacuum (Including Trunk)</li>
          </div>
        </div>
        <div className="rounded-2xl sm:rounded-3xl shadow-full shadow-sky-600 bg-black">
          <h2 className="font-semibold text-xl text-center p-4 rounded-t-2xl sm:rounded-t-3xl bg-sky-600">Complete Maintenance Detail</h2>
          <h2 className="text-center text-3xl mt-8">$150</h2>
          <p className="font-light text-sm text-center mb-4"><FontAwesomeIcon icon={faClock} /> Approximately 1.5 hours</p>
          <div className="p-4 pb-8 grid grid-cols-1 sm:max-lg:grid-cols-2 w-fit mx-auto">
            <li>Exterior Wash</li>
            <li>Wheels Washed</li>
            <li>Tire Dressing</li>
            <li>Vehicle Towel dry</li>
            <li>Surfaces Wiped</li>
            <li>Windows Cleaned</li>
            <li>Door Jams Cleaned</li>
            <li>Dry Vacuum (Including Trunk)</li>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PackageMaintenance;

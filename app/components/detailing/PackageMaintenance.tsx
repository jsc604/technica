import { faChevronDown, faChevronUp, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

interface infoDropDownProps {
  infoDropDown: boolean;
  setinfoDropDown: Dispatch<SetStateAction<boolean>>;
}

const PackageMaintenance = ({ infoDropDown, setinfoDropDown }: infoDropDownProps) => {

  const handleClick = () => {
    setinfoDropDown(!infoDropDown);
  }

  return (
    <div className="w-4/5 mx-auto">
      <div className="mx-auto mb-12 text-center">
        <button className="mx-auto rounded-full text-slate-300 hover:underline" onClick={handleClick}>
          Learn More{' '}
          {infoDropDown ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
        {infoDropDown && (
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

      <div className="grid grid-cols-1 gap-12 mx-auto mb-12 lg:grid-cols-3">
        <div className="bg-black rounded-2xl sm:rounded-3xl shadow-full shadow-slate-300">
          <h2 className="p-4 text-xl font-semibold text-center text-black rounded-t-2xl sm:rounded-t-3xl bg-slate-300">Complete Maintenance Detail</h2>
          {/* <h2 className="mt-8 text-3xl text-center">$150</h2> */}
          <p className="mt-6 mb-4 text-sm font-light text-center"><FontAwesomeIcon icon={faClock} /> Approximately 1.5 hours</p>
          <div className="grid grid-cols-1 p-4 pb-8 mx-auto sm:max-lg:grid-cols-2 w-fit">
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
        <div className="bg-black rounded-2xl sm:rounded-3xl shadow-full shadow-slate-300">
          <h2 className="p-4 text-xl font-semibold text-center text-black rounded-t-2xl sm:rounded-t-3xl bg-slate-300">Maintenance Interior Detail</h2>
          {/* <h2 className="mt-8 text-3xl text-center">$80</h2> */}
          <p className="mt-6 mb-4 text-sm font-light text-center"><FontAwesomeIcon icon={faClock} /> Approximately 1 hour</p>
          <div className="grid grid-cols-1 p-4 pb-8 mx-auto sm:max-lg:grid-cols-2 w-fit">
            <li>Surfaces Wiped</li>
            <li>Windows Cleaned</li>
            <li>Door Jams Cleaned</li>
            <li>Dry Vacuum (Including Trunk)</li>
          </div>
        </div>
        <div className="bg-black rounded-2xl sm:rounded-3xl shadow-full shadow-slate-300">
          <h2 className="p-4 text-xl font-semibold text-center text-black rounded-t-2xl sm:rounded-t-3xl bg-slate-300">Maintenance Exterior Detail</h2>
          {/* <h2 className="mt-8 text-3xl text-center">$80</h2> */}
          <p className="mt-6 mb-4 text-sm font-light text-center"><FontAwesomeIcon icon={faClock} /> Approximately  1 hour</p>
          <div className="grid grid-cols-1 p-4 pb-8 mx-auto sm:max-lg:grid-cols-2 w-fit">
            <li>Exterior Wash</li>
            <li>Wheels Washed</li>
            <li>Tire Dressing</li>
            <li>Vehicle Towel dry</li>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PackageMaintenance;

import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PackagePremium = () => {
  return (
    <div>
      <p className="w-5/6 md:w-3/5 mx-auto mb-12 text-center">
      The Premium package is the pinnacle of luxury and performance for your 
      vehicle&apos;s care. Building upon the services provided in the Maintenance and 
      Upgraded packages, the Premium package offers an advanced level of protection 
      and enhancement for your car&apos;s appearance. This comprehensive treatment 
      includes a thorough interior and exterior detail and polish, addressing any 
      minor imperfections and restoring the vehicle&apos;s original shine. Ideal 
      for car enthusiasts and those who demand only the best for their vehicle, 
      the Premium package delivers an unparalleled level of care and attention to detail.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-5/6 mx-auto mb-12">
        <div className="rounded-lg shadow-full shadow-amber-500 bg-black">
          <h2 className="font-semibold text-xl text-center p-4 rounded-t-lg bg-slate-800">Premium Exterior Detail</h2>
          <h2 className="text-center text-3xl mt-8">$325</h2>
          <p className="font-light text-sm text-center mb-4"><FontAwesomeIcon icon={faClock} /> Approximately 3.5 hours</p>
          <div className="p-4 pb-8 grid grid-cols-1 sm:max-lg:grid-cols-2 w-fit mx-auto">
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
        <div className="rounded-lg shadow-full shadow-amber-500 bg-black">
          <h2 className="font-semibold text-xl text-center p-4 rounded-t-lg bg-slate-800">Premium Interior Detail</h2>
          <h2 className="text-center text-3xl mt-8">$325</h2>
          <p className="font-light text-sm text-center mb-4"><FontAwesomeIcon icon={faClock} /> Approximately 3.5 hours</p>
          <div className="p-4 pb-8 grid grid-cols-1 sm:max-lg:grid-cols-2 w-fit mx-auto">
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
        <div className="rounded-lg shadow-full shadow-amber-500 bg-black">
          <h2 className="font-semibold text-xl text-center p-4 rounded-t-lg bg-slate-800">Complete Premium Detail</h2>
          <h2 className="text-center text-3xl mt-8">$575</h2>
          <p className="font-light text-sm text-center mb-4"><FontAwesomeIcon icon={faClock} /> Approximately 6 hours</p>
          <div className="p-4 pb-8 grid grid-cols-1 sm:max-lg:grid-cols-2 w-fit mx-auto">
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
      </div>
    </div>
  )
};

export default PackagePremium;

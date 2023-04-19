import Link from "next/link";

const PackageMaintenance = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-5/6 mx-auto mb-12">
      <div className="rounded-lg shadow-full shadow-green-500 bg-black">
        <h2 className="font-semibold text-xl text-center p-4 rounded-t-lg bg-green-800">Maintenance Exterior Detail</h2>
        <h2 className="text-center text-3xl mt-8 mb-4">$80</h2>
        <div className="p-4 pb-8 grid grid-cols-1 sm:max-lg:grid-cols-2 w-fit mx-auto">
          <li>Exterior Wash</li>
          <li>Wheels Washed</li>
          <li>Tire Dressing</li>
          <li>Vehicle Towel dry</li>
        </div>
      </div>
      <div className="rounded-lg shadow-full shadow-green-500 bg-black">
        <h2 className="font-semibold text-xl text-center p-4 rounded-t-lg bg-green-800">Maintenance Interior Detail</h2>
        <h2 className="text-center text-3xl mt-8 mb-4">$80</h2>
        <div className="p-4 pb-8 grid grid-cols-1 sm:max-lg:grid-cols-2 w-fit mx-auto">
          <li>Surfaces Wiped</li>
          <li>Windows Cleaned</li>
          <li>Door Jams Cleaned</li>
          <li>Dry Vacuum (Including Trunk)</li>
        </div>
      </div>
      <div className="rounded-lg shadow-full shadow-green-500 bg-black">
        <h2 className="font-semibold text-xl text-center p-4 rounded-t-lg bg-green-800">Complete Maintenance Detail</h2>
        <h2 className="text-center text-3xl mt-8 mb-4">$150</h2>
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
  )
};

export default PackageMaintenance;

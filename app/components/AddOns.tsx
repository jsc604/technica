import AddOnItems from "./AddOnItems";

const AddOns = () => {
  return (
    <div className="mt-20 mb-12 w-5/6 mx-auto capitalize">
      <h1 className="text-center font-semibold text-3xl mb-12">Additional Detailing & Cleaning Add Ons</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-black rounded-lg shadow-full shadow-sky-500">
          <div className="text-center bg-sky-900 rounded-t-lg p-4">
            <h2 className="font-semibold text-xl">Exterior Add-Ons &  Options</h2>
            <p className="font-light text-sm italic">*Some Preparation / Pre-Detail Processes May Be Required*</p>
          </div>
          <AddOnItems title='Ceramic Coating paint (1 Year)' price='$150' description='One Year Protective Coating' />
          <AddOnItems title='Ceramic Coating Windows' price='$50 / window set or windshield' description='One Year Coating' />
          <AddOnItems title='Headlight Restoration' price='$125' description='Polish Headlight Set' />
          <AddOnItems title='Engine Bay Basic Detail' price='$50' description='Engine Bay Touchless Decontamination and Clean' />
          <AddOnItems title='engine bay upgrade detail' price='$125' description='engine bay decontamination and hand wiped detail' />
          <AddOnItems title='emgine premium detail' price='$330' description='engine bay decontamination, hand wipe, and restoration of plastics' />
          <AddOnItems title='wheel damage / paint' price='price varies' description='repair wheel defects or paint wheels' />
          <AddOnItems title='decal removal' price='$5' description='price varies depending on size' />
        </div>
       
        <div className="bg-black rounded-lg shadow-full shadow-sky-500">
          <div className="text-center bg-sky-900 rounded-t-lg p-4">
            <h2 className="font-semibold text-xl">Interior Add-Ons &  Options</h2>
            <p className="font-light text-sm italic">*Some Preparation / Pre-Detail Processes May Be Required*</p>
          </div>
          <AddOnItems title='Carpet shampoo & extraction' price='$35' description='Interior carpets, trunk, and removable fabric mats' />
          <AddOnItems title='seat / upholstery shampoo' price='$35' description='seats & upholstery detailed' />
          <AddOnItems title='leather seat clean & condition' price='$30' description='leather seat & other leather components conditioned' />
          <AddOnItems title='dog hair removal' price='price varies' description='dog hair removal starting at $15' />
          <AddOnItems title='o-zone decontamination' price='$80' description='eliminates fungi, odours, and smoke from inside the vehicle' />
        </div>
      </div>
    </div>
  )
};

export default AddOns;
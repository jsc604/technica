import AddOnItems from "./AddOnItems";
import { Dispatch, SetStateAction } from "react";
import { faChevronDown, faChevronUp, faCircleChevronDown, faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface addOnDropDownProps {
  addOnDropDown: boolean;
  setAddOnDropDown: Dispatch<SetStateAction<boolean>>;
}

const AddOns = ({ addOnDropDown, setAddOnDropDown }: addOnDropDownProps) => {

  const handleClick = () => {
    setAddOnDropDown(!addOnDropDown);
  }

  return (
    <section className="mt-12 mb-8 w-5/6 mx-auto capitalize">
      <h1 className="text-center font-semibold text-3xl text-stone-300">
        Additional Detailing & Cleaning Add Ons
      </h1>
      <span className="text-center text-3xl my-4 text-stone-300 flex justify-center">
        
        {addOnDropDown ? (
          <FontAwesomeIcon onClick={handleClick} icon={faCircleChevronUp} className="hover:text-stone-100 cursor-pointer" />
        ) : (
          <FontAwesomeIcon onClick={handleClick} icon={faCircleChevronDown} className="hover:text-stone-100 cursor-pointer" />
        )}
      </span>
      {addOnDropDown && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-black rounded-2xl sm:rounded-3xl shadow-full shadow-blue-600">
            <div className="text-center bg-blue-600 rounded-t-2xl sm:rounded-t-3xl p-4">
              <h2 className="font-semibold text-xl">Exterior Add-Ons &  Options</h2>
              <p className="font-light text-sm italic text-stone-300">*Some Preparation / Pre-Detail Processes May Be Required*</p>
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

          <div className="bg-black rounded-2xl sm:rounded-3xl shadow-full shadow-blue-600">
            <div className="text-center bg-blue-600 rounded-t-2xl sm:rounded-t-3xl p-4">
              <h2 className="font-semibold text-xl">Interior Add-Ons &  Options</h2>
              <p className="font-light text-sm italic text-stone-300">*Some Preparation / Pre-Detail Processes May Be Required*</p>
            </div>
            <AddOnItems title='Carpet shampoo & extraction' price='$35' description='Interior carpets, trunk, and removable fabric mats' />
            <AddOnItems title='seat / upholstery shampoo' price='$35' description='seats & upholstery detailed' />
            <AddOnItems title='leather seat clean & condition' price='$30' description='leather seat & other leather components conditioned' />
            <AddOnItems title='dog hair removal' price='price varies' description='dog hair removal starting at $15' />
            <AddOnItems title='o-zone decontamination' price='$80' description='eliminates fungi, odours, and smoke from inside the vehicle' />
          </div>
        </div>
      )}
    </section>
  )
};

export default AddOns;
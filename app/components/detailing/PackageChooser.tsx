import { Dispatch, SetStateAction } from "react";

interface PackageChooserProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

const PackageChooser = ({ selected, setSelected }: PackageChooserProps) => {

  const handleClick = (selection: string) => {
    setSelected(selection);
  };

  return (
    <div className="w-11/12 md:w-3/5 mx-auto">
      <h2 className="capitalize flex justify-center text-center font-semibold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl my-4">Discover your ideal package</h2>
      <div className={`mx-auto flex justify-center rounded-full mb-12 mt-20 bg-black
    ${selected === 'maintenance' && 'shadow-full shadow-slate-300'}
    ${selected === 'upgraded' && 'shadow-full shadow-blue-300'}
    ${selected === 'premium' && 'shadow-full shadow-yellow-300'}
    `}>
        <button
          onClick={() => handleClick('maintenance')}
          className={`px-3.5 sm:px-8 py-1.5 w-full sm:w-1/3 rounded-full font-semibold ${selected === 'maintenance' && 'bg-slate-300 text-black'}`}
        >
          Maintenance
        </button>
        <button
          onClick={() => handleClick('upgraded')}
          className={`px-3.5 sm:px-8 py-1.5 w-full sm:w-1/3 rounded-full font-semibold ${selected === 'upgraded' && 'bg-blue-300 text-black'}`}
        >
          Upgraded
        </button>
        <button
          onClick={() => handleClick('premium')}
          className={`px-3.5 sm:px-8 py-1.5 w-full sm:w-1/3 rounded-full font-semibold  ${selected === 'premium' && 'bg-yellow-300 text-black'}`}
        >
          Premium
        </button>
      </div>
    </div>
  )
}

export default PackageChooser;
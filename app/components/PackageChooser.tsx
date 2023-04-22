'use client'

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
    <div className={`mx-auto w-5/6 md:w-3/5 flex justify-center rounded-md mb-12 mt-20 bg-black
    ${selected === 'maintenance' && 'shadow-full shadow-teal-500'}
    ${selected === 'upgraded' && 'shadow-full shadow-cyan-400'}
    ${selected === 'premium' && 'shadow-full shadow-amber-600'}
    `}>
      <button
        onClick={() => handleClick('maintenance')}
        className={`px-3.5 sm:px-8 py-2.5 w-full sm:w-1/3 rounded-md ${selected === 'maintenance' && 'bg-teal-800'}`}
      >
        Maintenance
      </button>
      <button
        onClick={() => handleClick('upgraded')}
        className={`px-3.5 sm:px-8 py-2.5 w-full sm:w-1/3 rounded-md ${selected === 'upgraded' && 'bg-cyan-800'}`}
      >
        Upgraded
      </button>
      <button
        onClick={() => handleClick('premium')}
        className={`px-3.5 sm:px-8 py-2.5 w-full sm:w-1/3 rounded-md  ${selected === 'premium' && 'bg-slate-800'}`}
      >
        Premium
      </button>
    </div>
  )
}

export default PackageChooser;
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
    <section className="w-5/6 md:w-3/5 mx-auto">
      <h2 className="capitalize flex justify-center text-center font-semibold text-4xl my-4 text-stone-300">Discover your ideal package</h2>
      <div className={`mx-auto flex justify-center rounded-full mb-12 mt-20 bg-black
    ${selected === 'maintenance' && 'shadow-full shadow-sky-600'}
    ${selected === 'upgraded' && 'shadow-full shadow-indigo-600'}
    ${selected === 'premium' && 'shadow-full shadow-rose-600'}
    `}>
        <button
          onClick={() => handleClick('maintenance')}
          className={`px-3.5 sm:px-8 py-2.5 w-full sm:w-1/3 rounded-full font-semibold ${selected === 'maintenance' && 'bg-sky-600'}`}
        >
          Maintenance
        </button>
        <button
          onClick={() => handleClick('upgraded')}
          className={`px-3.5 sm:px-8 py-2.5 w-full sm:w-1/3 rounded-full font-semibold ${selected === 'upgraded' && 'bg-indigo-600'}`}
        >
          Upgraded
        </button>
        <button
          onClick={() => handleClick('premium')}
          className={`px-3.5 sm:px-8 py-2.5 w-full sm:w-1/3 rounded-full font-semibold  ${selected === 'premium' && 'bg-rose-600'}`}
        >
          Premium
        </button>
      </div>
    </section>
  )
}

export default PackageChooser;
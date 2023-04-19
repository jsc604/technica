'use client'

import { useState } from "react";
import PackageMaintenance from "../components/PackageMaintenance";
import PackagePremium from "../components/PackagePremium";
import PackageUpgraded from "../components/PackageUpgraded";

export default function Detailing() {
  const [selected, setSelected] = useState('upgraded');

  const handleClick = (selection: string) => {
    setSelected(selection);
  };


  return (
    <main className="">
      <div className="mx-auto w-5/6 md:w-3/5 flex justify-center rounded-md my-12">
        <button
          onClick={() => handleClick('maintenance')}
          className={`px-3.5 sm:px-8 py-2.5 w-full sm:w-1/3 rounded-md ${selected === 'maintenance' && 'bg-green-800'}`}
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
      <PackageMaintenance />
      <PackageUpgraded />
      <PackagePremium />
    </main>
  )
}
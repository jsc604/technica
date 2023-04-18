'use client'

import PackageMaintenance from "../components/PackageMaintenance";

export default function detailing() {
  return (
    <main className="">
      <div className="mx-auto border w-fit flex justify-evenly rounded-md my-12">
        <button className="px-3.5 sm:px-8 py-2.5 w-">Maintenance</button>
        <button className="px-3.5 sm:px-8 py-2.5 w-">Upgraded</button>
        <button className="px-3.5 sm:px-8 py-2.5 w-">Premium</button>
      </div>
      <PackageMaintenance />
    </main>
  )
}
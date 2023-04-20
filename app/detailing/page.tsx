'use client'

import { useState } from "react";
import PackageMaintenance from "../components/PackageMaintenance";
import PackagePremium from "../components/PackagePremium";
import PackageUpgraded from "../components/PackageUpgraded";
import PackageChooser from "../components/PackageChooser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export default function Detailing() {
  const [selected, setSelected] = useState('upgraded');

  return (
    <main>
      <h1 className="text-center mx-auto font-bold text-3xl my-12 w-5/6">
        <span className="text-amber-500">Revitalize Your Ride <FontAwesomeIcon icon={faArrowRightLong} /></span> Exceptional Detailing Services for Unparalleled Results
      </h1>
      <div>
        <p className="w-5/6 mx-auto">
          Discover the transformative power of our exceptional detailing services,
          designed to rejuvenate your vehicle and make it the envy of everyone on
          the road. Our carefully curated packages, ranging from the essential Maintenance
          to the luxurious Premium, cater to your unique needs and budget, ensuring a
          personalized experience that will exceed your expectations. With our expert touch
          and meticulous attention to detail, your car will not only look stunning but also
          enjoy lasting protection from the elements. Don&apos;t miss out on the opportunity to
          give your vehicle the VIP treatment it deserves. Book your appointment today and
          let us unlock your car&apos;s true potential, revealing a breathtaking finish that will
          leave you in awe.
        </p>

      </div>
      <PackageChooser selected={selected} setSelected={setSelected} />
      {selected === 'maintenance' && <PackageMaintenance />}
      {selected === 'upgraded' && <PackageUpgraded />}
      {selected === 'premium' && <PackagePremium />}
    </main>
  )
}
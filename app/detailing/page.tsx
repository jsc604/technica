'use client'

import { useState } from "react";
import PackageMaintenance from "../components/PackageMaintenance";
import PackagePremium from "../components/PackagePremium";
import PackageUpgraded from "../components/PackageUpgraded";
import PackageChooser from "../components/PackageChooser";
import GalleryCarousel from "../components/GalleryCarousel";
import DetailingInfo from "../components/DetailingInfo";
import BookingProcess from "../components/BookingProcess";
import AddOns from "../components/AddOns";
import Disclaimer from "../components/Disclaimer";
import DetailingOutro from "../components/DetailingOutro";

export default function Detailing() {
  const [selected, setSelected] = useState('upgraded');

  return (
    <main>
      {/* <h1 className="text-center mx-auto font-bold text-3xl my-24 w-5/6">
        <span className="text-amber-500">Revitalize Your Ride <FontAwesomeIcon icon={faArrowRightLong} /></span> Exceptional Detailing Services for Unparalleled Results
      </h1> */}
      <DetailingInfo setSelected={setSelected} />
      {/* <GalleryCarousel /> */}
      <BookingProcess />
      <PackageChooser selected={selected} setSelected={setSelected} />
      {selected === 'maintenance' && <PackageMaintenance />}
      {selected === 'upgraded' && <PackageUpgraded />}
      {selected === 'premium' && <PackagePremium />}
      <Disclaimer disclaimer="Extra Cost for Details With Heavy Soiled Vehicles" />
      <AddOns />
      <Disclaimer disclaimer="Some Services Not Listed" />
      <DetailingOutro />
    </main>
  )
}
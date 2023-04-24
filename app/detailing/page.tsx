'use client'

import { useState } from "react";
import TitleBanner from "../components/TitleBanner";
import DetailingInfo from "../components/detailing/DetailingInfo";
import PackageChooser from "../components/detailing/PackageChooser";
import PackageMaintenance from "../components/detailing/PackageMaintenance";
import PackageUpgraded from "../components/detailing/PackageUpgraded";
import PackagePremium from "../components/detailing/PackagePremium";
import Disclaimer from "../components/Disclaimer";
import AddOns from "../components/detailing/AddOns";
import DetailingOutro from "../components/detailing/DetailingOutro";

import bentley from "../../assets/images/bentley3.png";

export default function Detailing() {
  const [selected, setSelected] = useState('upgraded');
  const [infoDropDown, setinfoDropDown] = useState(false);
  const [addOnDropDown, setAddOnDropDown] = useState(false);

  return (
    <main>
      <TitleBanner image={bentley} alt="bentley" heading='Exceptional Detailing Services' />
      <DetailingInfo setSelected={setSelected} />
      <PackageChooser selected={selected} setSelected={setSelected} />
      {selected === 'maintenance' && <PackageMaintenance infoDropDown={infoDropDown} setinfoDropDown={setinfoDropDown} />}
      {selected === 'upgraded' && <PackageUpgraded infoDropDown={infoDropDown} setinfoDropDown={setinfoDropDown} />}
      {selected === 'premium' && <PackagePremium infoDropDown={infoDropDown} setinfoDropDown={setinfoDropDown} />}
      <Disclaimer disclaimer="Extra Cost for Details With Heavy Soiled Vehicles" />
      <AddOns addOnDropDown={addOnDropDown} setAddOnDropDown={setAddOnDropDown} />
      <Disclaimer disclaimer="Some Services Not Listed" />
      <DetailingOutro />
    </main>
  )
}
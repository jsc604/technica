import TitleBanner from "../components/TitleBanner";
import Partner from "../components/products/Partner";

import detailer from '../../assets/images/ceramicCoating.jpeg';
import jsAuto from '../../assets/partners/js Auto.jpeg';
import bigFatGraphic from '../../assets/partners/Big Fat Grapic House.jpeg';
import labcosmetica from '../../assets/partners/labcosmetica.jpeg';
import zombie from '../../assets/partners/zombie.png';
import rupes from '../../assets/partners/rupes.jpeg';
import kochChemie from '../../assets/partners/Koch Chemie.png';

const Products = () => {
  return (
    <div>
      <TitleBanner image={detailer} alt="detailing" heading="Partners & Brands We Trust" />
      <div className="grid ml:grid-cols-2 xl:grid-cols-3 w-11/12 mx-auto gap-6 mt-20">
        <Partner
          logo={jsAuto}
          website={'https://www.autodetailsupplies.ca/'}
          alt='J S Auto Detail & Accessories Ltd.'
          description='JS Auto Detail, our trusted partner, specializes in high-quality car care services tailored to meet individual needs. Their team of skilled professionals utilizes cutting-edge techniques and environmentally-friendly products to deliver exceptional results, transforming your vehicle to its showroom-ready appearance. Experience the remarkable difference and unmatched customer satisfaction that comes from partnering with JS Auto Detail for your vehicle&apos;s maintenance and rejuvenation.'
        />
        <Partner
          logo={bigFatGraphic}
          website={'https://www.bfgh.ca/'}
          alt='Big Fat Graphic House'
          description='JS Auto Detail, our trusted partner, specializes in high-quality car care services tailored to meet individual needs. Their team of skilled professionals utilizes cutting-edge techniques and environmentally-friendly products to deliver exceptional results, transforming your vehicle to its showroom-ready appearance. Experience the remarkable difference and unmatched customer satisfaction that comes from partnering with JS Auto Detail for your vehicle&apos;s maintenance and rejuvenation.'
        />
        <Partner
          logo={labcosmetica}
          website={'https://www.labocosmetica.com/'}
          alt='labocosmetica ceramic coating'
          description='JS Auto Detail, our trusted partner, specializes in high-quality car care services tailored to meet individual needs. Their team of skilled professionals utilizes cutting-edge techniques and environmentally-friendly products to deliver exceptional results, transforming your vehicle to its showroom-ready appearance. Experience the remarkable difference and unmatched customer satisfaction that comes from partnering with JS Auto Detail for your vehicle&apos;s maintenance and rejuvenation.'
        />
        <Partner
          logo={zombie}
          website={'https://www.autodetailsupplies.ca/'}
          alt='Zombie Auto Care'
          description='JS Auto Detail, our trusted partner, specializes in high-quality car care services tailored to meet individual needs. Their team of skilled professionals utilizes cutting-edge techniques and environmentally-friendly products to deliver exceptional results, transforming your vehicle to its showroom-ready appearance. Experience the remarkable difference and unmatched customer satisfaction that comes from partnering with JS Auto Detail for your vehicle&apos;s maintenance and rejuvenation.'
        />
        <Partner
          logo={rupes}
          website={'https://www.rupes.com/'}
          alt='Rupes Tools'
          description='JS Auto Detail, our trusted partner, specializes in high-quality car care services tailored to meet individual needs. Their team of skilled professionals utilizes cutting-edge techniques and environmentally-friendly products to deliver exceptional results, transforming your vehicle to its showroom-ready appearance. Experience the remarkable difference and unmatched customer satisfaction that comes from partnering with JS Auto Detail for your vehicle&apos;s maintenance and rejuvenation.'
        />
        <Partner
          logo={kochChemie}
          website={'https://www.koch-chemie.com/en/'}
          alt='Koch Chemie'
          description='JS Auto Detail, our trusted partner, specializes in high-quality car care services tailored to meet individual needs. Their team of skilled professionals utilizes cutting-edge techniques and environmentally-friendly products to deliver exceptional results, transforming your vehicle to its showroom-ready appearance. Experience the remarkable difference and unmatched customer satisfaction that comes from partnering with JS Auto Detail for your vehicle&apos;s maintenance and rejuvenation.'
        />
      </div>
    </div>
  )
}

export default Products;
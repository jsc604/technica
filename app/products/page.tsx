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
          website='https://www.autodetailsupplies.ca/'
          alt='J S Auto Detail & Accessories Ltd.'
          description='JS Auto Detail, our trusted partner, specializes in high-quality car care services tailored to meet individual needs. Their team of skilled professionals utilizes cutting-edge techniques and environmentally-friendly products to deliver exceptional results, transforming your vehicle to its showroom-ready appearance. Experience the remarkable difference and unmatched customer satisfaction that comes from partnering with JS Auto Detail for your vehicle&apos;s maintenance and rejuvenation.'
          facebook="https://www.facebook.com/autodetailsupplies"
          instagram="https://www.instagram.com/autodetailsupplies/"
          twitter=""
          youtube="https://www.youtube.com/channel/UC73yO3rB9EKQaqYDWVaO5-A"
          location="4437 Juneau Street, Burnaby, BC, Canada, British Columbia"       
          locationLink="https://goo.gl/maps/5vVeaR8EqtYSucFS6"       
          phone="(604) 807-7590"       
          email="sales@autodetailsupplies.ca"       
        />
        <Partner
          logo={bigFatGraphic}
          website='https://www.bfgh.ca/'
          alt='Big Fat Graphic House'
          description='JS Auto Detail, our trusted partner, specializes in high-quality car care services tailored to meet individual needs. Their team of skilled professionals utilizes cutting-edge techniques and environmentally-friendly products to deliver exceptional results, transforming your vehicle to its showroom-ready appearance. Experience the remarkable difference and unmatched customer satisfaction that comes from partnering with JS Auto Detail for your vehicle&apos;s maintenance and rejuvenation.'
          facebook="https://www.facebook.com/bfgh.ca/"
          instagram="https://www.instagram.com/bigfatgraphichouse/"
          twitter="https://twitter.com/BigFat_Graphics"
          youtube="https://www.youtube.com/channel/UCvECjnEGSi3hdRCqG6pPRNQ"
          location="19288 22 Ave #180, Surrey, BC, Canada, British Columbia"       
          locationLink="https://goo.gl/maps/45resJjC1XhiWwBP6"       
          phone="(604) 538-6478"       
          email="orders@bfgh.ca"       
        />
        <Partner
          logo={labcosmetica}
          website='https://www.labocosmetica.com/'
          alt='labocosmetica ceramic coating'
          description='JS Auto Detail, our trusted partner, specializes in high-quality car care services tailored to meet individual needs. Their team of skilled professionals utilizes cutting-edge techniques and environmentally-friendly products to deliver exceptional results, transforming your vehicle to its showroom-ready appearance. Experience the remarkable difference and unmatched customer satisfaction that comes from partnering with JS Auto Detail for your vehicle&apos;s maintenance and rejuvenation.'
          facebook="https://www.facebook.com/labocosmeticaofficial/"
          instagram="https://www.instagram.com/labocosmetica_official/"
          twitter=""
          youtube="https://www.youtube.com/c/Labocosmetica"
          location="Via Aquileia 44/46, Milan, Italy"       
          locationLink="https://goo.gl/maps/WqV48Z5rh4FczYuw6"       
          phone="+39 02 356 9981"       
          email="info@labocosmetica.it"       
        />
        <Partner
          logo={zombie}
          website=""
          alt='Zombie Auto Care'
          description='JS Auto Detail, our trusted partner, specializes in high-quality car care services tailored to meet individual needs. Their team of skilled professionals utilizes cutting-edge techniques and environmentally-friendly products to deliver exceptional results, transforming your vehicle to its showroom-ready appearance. Experience the remarkable difference and unmatched customer satisfaction that comes from partnering with JS Auto Detail for your vehicle&apos;s maintenance and rejuvenation.'
          facebook=""
          instagram="https://www.instagram.com/zombieautocare/?igshid=YmMyMTA2M2Y%3D"
          twitter=""
          youtube=""
          location=""       
          locationLink=""       
          phone=""       
          email=""       
        />
        <Partner
          logo={rupes}
          website='https://www.rupes.com/'
          alt='Rupes Tools'
          description='JS Auto Detail, our trusted partner, specializes in high-quality car care services tailored to meet individual needs. Their team of skilled professionals utilizes cutting-edge techniques and environmentally-friendly products to deliver exceptional results, transforming your vehicle to its showroom-ready appearance. Experience the remarkable difference and unmatched customer satisfaction that comes from partnering with JS Auto Detail for your vehicle&apos;s maintenance and rejuvenation.'
          facebook="https://www.facebook.com/RUPEStools/"
          instagram="https://www.instagram.com/rupes_spa/"
          twitter="https://twitter.com/RUPESSpA"
          youtube="https://www.youtube.com/user/rupesspa"
          location="Via Marconi 3A, loc. Vermezzo – 20071 Vermezzo con Zelo (MI) – Italy"       
          locationLink="https://goo.gl/maps/B2LM3A25knSwZQAC7"       
          phone="+39 02 946941"       
          email="info_rupes@rupes.it"       
        />
        <Partner
          logo={kochChemie}
          website='https://www.koch-chemie.com/en/'
          alt='Koch Chemie'
          description='JS Auto Detail, our trusted partner, specializes in high-quality car care services tailored to meet individual needs. Their team of skilled professionals utilizes cutting-edge techniques and environmentally-friendly products to deliver exceptional results, transforming your vehicle to its showroom-ready appearance. Experience the remarkable difference and unmatched customer satisfaction that comes from partnering with JS Auto Detail for your vehicle&apos;s maintenance and rejuvenation.'
          facebook="https://www.facebook.com/kochchemieDE/"
          instagram="https://www.instagram.com/kochchemie_gmbh/"
          twitter=""
          youtube="https://www.youtube.com/user/DIKC68"
          location="Einsteinstraße 42, Unna, Germany"       
          locationLink="https://goo.gl/maps/W2psShnLvHP9xvd98"       
          phone="+49 2303 986700"       
          email="info@koch-chemie.com"       
        />
      </div>
    </div>
  )
}

export default Products;
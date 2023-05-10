import TitleBanner from "../components/TitleBanner";
import Partner from "../components/products/Partner";

import detailer from '../../assets/images/ceramicCoating.jpeg';
import jsAuto from '../../assets/partners/js Auto.jpeg';
import bigFatGraphic from '../../assets/partners/Big Fat Grapic House.jpeg';
import labcosmetica from '../../assets/partners/labcosmetica.jpeg';
import zombie from '../../assets/partners/zombie.png';
import rupes from '../../assets/partners/rupes.jpeg';
import kochChemie from '../../assets/partners/Koch Chemie.png';
import partner3m from '../../assets/partners/3m.png';

const Products = () => {
  return (
    <div>
      <TitleBanner image={detailer} alt="detailing" heading="Partners & Brands We Trust" />
      <div className="grid ml:grid-cols-2 xl:grid-cols-3 w-11/12 mx-auto gap-6 mt-20">
        <Partner
          logo={jsAuto}
          website='https://www.autodetailsupplies.ca/'
          alt='J S Auto Detail & Accessories Ltd.'
          description={`As hands-on professional detailers, JS Auto Detail Supplies identified a need in the Vancouver Marketplace for a retail location stocking premium detailing supplies. After extensive testing, they offer only the top products in the marketplace. Their goal is to supply professional series products to mobile detailers, detail shops, and paint correction enthusiasts. They serve as the exclusive distributor for Technician's Choice Professional Series chemicals, providing customers with access to bulk sizes for cost savings. They are authorized distributors for several brands, including Technician's Choice (exclusive for BC), Buff & Shine, Tornador, GlassParency, Gtechniq, Koch Chemie, Menzerna, Rupes, Scangrip, and Sonax.`}
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
          description={`Big Fat Graphic House is dedicated to providing you with quality printing and embroidery at affordable prices. Whether your business is large or small, a charitable organization, a local band, or an individual looking for custom clothing, we can assist you with all your apparel needs`}
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
          description={`Mafra Group, a manufacturing company with state-of-the-art research labs, seamlessly blends high-quality, technologically advanced standards with artisanal production methods for exceptional results. The company's roots trace back to the mid-sixties when founder Gianfranco Mattioli innovatively applied principles of human cosmetics to a new sphere, coining the slogan "cosmetics for your car," now known as detailing. Over half a century later, his descendants launched the Labocosmetica line, a fusion of technology, innovation, and tradition aimed at those seeking utmost precision in the treatment of their vehicles.`}
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
          description={`RUPES S.p.A., a single-member company that has been producing professional systems since 1947, is a global leader in tool manufacturing. Known for its innovative Research & Development department, RUPES consistently enhances the performance of its products, marking its success in the professional tool sector. With four factories and a comprehensive sales network in Italy, the brand is always in close contact with its customers, providing products that anticipate and swiftly meet market demands. Internationally, RUPES's reach extends to all major markets through two direct subsidiaries and 60 authorized distributors. The brand's commitment to quality, creativity, and customer care, coupled with its efficient, safe, and cost- and time-saving professional applications, makes RUPES the ideal "Made in Italy" partner for numerous professionals.`}
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
          description={`Hans Koch, a trained carpenter with a passion for perfect surfaces, began developing his own high-quality polish formulations in his garage in 1968 due to dissatisfaction with the poor quality of the then-available vehicle care products. Over the years, his company transformed the market with innovative concepts in car wash chemicals, vehicle preparation, and industrial and workshop floor cleaning, eventually becoming a leading supplier of cleaning and care products for the automotive sector. Today, the second-generation family business delivers to over 50 countries and has been vetted and approved by major automobile manufacturers such as Mercedes-Benz, BMW, and VW, as well as independent institutes. Their products, renowned for their high quality and attention to detail, are widely used in car washes, factories, dealerships, industrial companies, and the world's largest vehicle detailing companies.`}
          facebook="https://www.facebook.com/kochchemieDE/"
          instagram="https://www.instagram.com/kochchemie_gmbh/"
          twitter=""
          youtube="https://www.youtube.com/user/DIKC68"
          location="Einsteinstraße 42, Unna, Germany"       
          locationLink="https://goo.gl/maps/W2psShnLvHP9xvd98"       
          phone="+49 2303 986700"       
          email="info@koch-chemie.com"       
        />
        <Partner
          logo={partner3m}
          website='https://www.3M.ca/'
          alt='3m Canada'
          description={`3M touches virtually every part of your life. Yet you’re probably only aware of a fraction of those touch-points. With medical dressings used to manage wound exudate and protect wounds, reflective materials that make our roadways safer, and even stethoscopes that listen to astronauts’ heartbeats in space, our people and technology make the impossible, possible. Every day we apply our science to make your life better.
          This is 3M Science. Applied to Life.™`}
          facebook="https://www.facebook.com/3MCanada/?brand_redir=218566214841042"
          instagram="https://twitter.com/3MCanada"
          twitter="https://twitter.com/3MCanada"
          youtube="https://www.youtube.com/c/3MCanada"
          location=""       
          locationLink=""       
          phone="+1 800-364-3577"       
          email=""       
        />
      </div>
    </div>
  )
}

export default Products;
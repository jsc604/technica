import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface partnerProps {
  website: string;
  logo: StaticImageData;
  alt: string;
  description: string;
}

const Partner: React.FC<partnerProps> = ({ website, logo, alt, description }) => {
  return (
    <div className="bg-white text-black rounded-3xl hover:shadow-full hover:shadow-yellow-300">
      <Link href={website} target="_blank" rel="noopener noreferrer">
        <Image src={logo} width={250} height={250} alt={alt} className="mx-auto rounded-full m-2" />
      </Link>
      <p className="p-8 pt-0">{description}</p>
    </div>
  )
};

export default Partner;
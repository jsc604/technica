import { faEnvelope, faGlobe, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import instaIcon from '../../../assets/partners/instagramicon.webp';

interface partnerProps {
  website: string;
  logo: StaticImageData;
  alt: string;
  description: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  location?: string;
  phone?: string;
  email?: string;
  locationLink?: string;
}

const Partner: React.FC<partnerProps> = ({ website, logo, alt, description, facebook, instagram, twitter, youtube, location, phone, email, locationLink }) => {
  return (
    <div className="bg-white text-black rounded-3xl hover:shadow-full hover:shadow-yellow-300">
      <Link href={website} target="_blank" rel="noopener noreferrer">
        <Image src={logo} width={250} height={250} alt={alt} className="mx-auto rounded-full m-2" />
      </Link>
      <div className="px-8">
        {website && (
          <Link href={website} target="_blank" rel="noopener noreferrer" className="flex items-start mb-2 hover:text-blue-500 hover:underline">
            <FontAwesomeIcon icon={faGlobe} size="lg" />
            <span className="ml-2">{website.slice(12, -1)}</span>
          </Link>
        )}
        {location && (
          <Link href={`${locationLink}`} target="_blank" rel="noopener noreferrer" className="flex items-start mb-2 hover:text-blue-500 hover:underline">
            <FontAwesomeIcon icon={faLocationPin} size="lg" />
            <span className="ml-2">{location}</span>
          </Link>
        )}
        {phone && (
          <div className="flex items-start mb-2">
            <FontAwesomeIcon icon={faPhone} size="lg" />
            <span className="ml-2">{phone}</span>
          </div>
        )}
        {email && (
          <div className="flex items-start mb-2">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <span className="ml-2">{email}</span>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center my-2">
        {facebook && (
          <Link href={facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-facebook mx-1">
            <i className="fa-brands fa-facebook fa-xl hover:animate-bounce"></i>
          </Link>
        )}
        {instagram && (
          <Link href={instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-instagram mx-1">
            <Image src={instaIcon} width={24} height={24} alt="instagram icon" />
          </Link>
        )}
        {twitter && (
          <Link href={twitter} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-twitter mx-1">
            <i className="fa-brands fa-twitter fa-xl hover:animate-bounce"></i>
          </Link>
        )}
        {youtube && (<Link href={youtube} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-youtube mx-1">
          <i className="fa-brands fa-youtube fa-xl hover:animate-bounce"></i>
        </Link>
        )}
      </div>
      <p className="p-8 pt-0">{description}</p>
    </div>
  )
};

export default Partner;
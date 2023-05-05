import Link from "next/link";
import Image from "next/image";
import instaIcon from '../../assets/partners/instagramicon.webp';

const ContactBanner = () => {
  return (
    <div className="border-b border-white">
      <div className="flex max-md:flex-col md:justify-between w-11/12 mx-auto max-sm:text-sm align-center py-1 text-center">
        <div className="flex max-md:mx-auto max-sm:flex-col">
          <h2>+1-778-835-2118&#8194;</h2>
          <span className="hidden sm:block">|</span>
          <h2>&#8194;TechnicaAutomotive@gmail.com</h2>
        </div>
        <div className="flex items-center max-md:mx-auto">
          <Link
            href="https://www.facebook.com/TechnicaAutomotive/"
            target="_blank" rel="noopener noreferrer"
            className="ml-4">
            <i className="fa-brands fa-facebook fa-xl text-facebook"></i>
          </Link>
          <Link
            href="https://www.instagram.com/technicautomotive/"
            target="_blank" rel="noopener noreferrer"
            className="ml-4">
            <Image src={instaIcon} width={24} height={24} alt='Instagram icon' />
          </Link>
          <Link
            href="https://twitter.com/technicaauto"
            target="_blank" rel="noopener noreferrer"
            className="ml-4">
            <i className="fa-brands fa-twitter fa-xl text-twitter"></i>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default ContactBanner;
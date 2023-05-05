import Link from "next/link";
import Image from "next/image";
import instaIcon from '../../assets/partners/instagramicon.webp';

const Footer = () => {
  return (
    <footer className="my-4 text-sm font-light flex flex-col md:flex-row items-center md:justify-between w-11/12 mx-auto">
      <div className="flex sm:flex-row flex-col text-center mb-2">
        <p>Copyright &copy;2021 Technica Automotive&nbsp;</p>
        <p>- All Rights Reserved</p>
      </div>
      <div className="flex mb-2 items-center">
        <p>Find us at:</p>
        <Link
          href="https://www.facebook.com/TechnicaAutomotive/"
          target="_blank" rel="noopener noreferrer"
          className="ml-4">
          <i className="fa-brands fa-facebook fa-2xl text-facebook"></i>
        </Link>
        <Link
          href="https://www.instagram.com/technicautomotive/"
          target="_blank" rel="noopener noreferrer"
          className="ml-4">
          <Image src={instaIcon} width={28} height={28} alt='Instagram icon' />
        </Link>
        <Link
          href="https://twitter.com/technicaauto"
          target="_blank" rel="noopener noreferrer"
          className="ml-4">
          <i className="fa-brands fa-twitter fa-2xl text-twitter"></i>
        </Link>
      </div>
    </footer>
  )
};

export default Footer;
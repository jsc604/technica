import Link from "next/link";
import Image from "next/image";
import instaIcon from '../../assets/partners/instagramicon.webp';
import logo from '../../assets/images/technicaLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="my-4 text-sm font-light flex flex-col items-center md:justify-between w-screen mx-auto bg-black">
      <div className="mx-auto grid ml:grid-cols-2">
        <div className="col-span-1 flex flex-col justify-center items-center p-8 text-lg md:text-xl text-center h-50vh">
          <Image src={logo} width={1475} height={494} alt="technica automotive" className='w-2/5 mb-4' />
          <div className='mt-4 hover:text-green-500 hover:underline'>
            <FontAwesomeIcon icon={faLocationPin} size="lg" />{" "}
            <span>15491 Roper Ave, White Rock, BC V4B 2G4</span>
          </div>
          <div className='mt-4 hover:text-green-500 hover:underline'>
            <FontAwesomeIcon icon={faPhone} size="lg" />{" "}
            <span>+1 778-835-2118</span>
          </div>
          <div className='mt-4 hover:text-green-500 hover:underline'>
            <FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
            <span>TechnicaAutomotive@gmail.com</span>
          </div>
          <div className='mt-6'>
            <div className='font-semibold text-xl md:text-2xl'>Follow Us</div>
            <div className='flex'>
              <Link
                href="https://www.facebook.com/TechnicaAutomotive/"
                target="_blank" rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook fa-xl text-facebook"></i>
              </Link>
              <Link
                href="https://www.instagram.com/technicautomotive/"
                target="_blank" rel="noopener noreferrer"
                className='mx-8'>
                <Image src={instaIcon} width={28} height={28} alt='Instagram icon' />
              </Link>
              <Link
                href="https://twitter.com/technicaauto"
                target="_blank" rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter fa-xl text-twitter"></i>
              </Link>
            </div>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.1923438601534!2d-122.7957161235987!3d49.02594867135539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485c31c05677515%3A0x383eb51ed351cb66!2sTechnica%20Automotive!5e0!3m2!1sen!2sca!4v1683954938942!5m2!1sen!2sca"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-11/12 h-96 ml:w-full sm:h-50vh  mx-auto h-full"
        >
        </iframe>
      </div>

      <div className="flex sm:flex-row flex-col text-center pt-4">
        <p>Copyright &copy;2021 Technica Automotive&nbsp;</p>
        <p>- All Rights Reserved</p>
      </div>
    </footer>
  )
};

export default Footer;
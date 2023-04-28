import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-4 text-stone-300 text-sm font-light flex flex-col md:flex-row items-center md:justify-between w-11/12 mx-auto">
      <div className="flex sm:flex-row flex-col text-center mb-2">
        <p>Copyright &copy;2021 Technica Automotive&nbsp;</p>
        <p>- All Rights Reserved</p>
      </div>
      <div className="flex mb-2">
        <p>Find us at:</p>
        <Link
          href="https://www.facebook.com/TechnicaAutomotive/"
          target="_blank" rel="noopener noreferrer"
          className="ml-4 hover:text-blue-600">
          <i className="fa-brands fa-facebook fa-2xl"></i>
        </Link>
        <Link
          href="https://www.instagram.com/technicautomotive/"
          target="_blank" rel="noopener noreferrer"
          className="ml-4 hover:text-fuchsia-400">
          <i className="fa-brands fa-instagram fa-2xl"></i>
        </Link>
        <Link
          href="https://twitter.com/technicaauto"
          target="_blank" rel="noopener noreferrer"
          className="ml-4 hover:text-sky-400">
          <i className="fa-brands fa-twitter fa-2xl"></i>
        </Link>
      </div>
    </footer>
  )
};

export default Footer;
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-4 text-sm font-light flex justify-between w-5/6 mx-auto">
      <p>Copyright &copy;2021 Technica Automotive - All Rights Reserved</p>
      <div className="flex">
        <p>Find us at:</p>
        <Link
          href="https://www.facebook.com/TechnicaAutomotive/"
          target="_blank" rel="noopener noreferrer"
          className="ml-4">
          <i className="fa-brands fa-facebook fa-2xl"></i>
        </Link>
        <Link
          href="https://www.instagram.com/technicautomotive/"
          target="_blank" rel="noopener noreferrer"
          className="ml-4">
          <i className="fa-brands fa-instagram fa-2xl"></i>
        </Link>
        <Link
          href="https://twitter.com/technicaauto"
          target="_blank" rel="noopener noreferrer"
          className="ml-4">
          <i className="fa-brands fa-twitter fa-2xl"></i>
        </Link>
      </div>
    </footer>
  )
};

export default Footer;
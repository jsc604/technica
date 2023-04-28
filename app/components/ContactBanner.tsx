import Link from "next/link";

const ContactBanner = () => {
  return (
    <div className="border-b border-sky-500">
      <div className="flex max-md:flex-col md:justify-between w-5/6 mx-auto max-sm:text-sm align-center py-1 text-center">
        <div className="flex max-md:mx-auto max-sm:flex-col">
          <h2>+1-778-835-2118&#8194;</h2>
          <span className="hidden sm:block">|</span>
          <h2>&#8194;TechnicaAutomotive@gmail.com</h2>
        </div>
        <div className="flex max-md:mx-auto">
          <Link
            href="https://www.facebook.com/TechnicaAutomotive/"
            target="_blank" rel="noopener noreferrer"
            className="ml-4 hover:text-blue-600">
            <i className="fa-brands fa-facebook fa-xl"></i>
          </Link>
          <Link
            href="https://www.instagram.com/technicautomotive/"
            target="_blank" rel="noopener noreferrer"
            className="ml-4 hover:text-fuchsia-400">
            <i className="fa-brands fa-instagram fa-xl"></i>
          </Link>
          <Link
            href="https://twitter.com/technicaauto"
            target="_blank" rel="noopener noreferrer"
            className="ml-4 hover:text-sky-400">
            <i className="fa-brands fa-twitter fa-xl"></i>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default ContactBanner;
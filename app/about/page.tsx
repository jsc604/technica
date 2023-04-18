const image = 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4';

const About = () => {
  return (
    <div className="grid grid-cols-2 w-5/6 mx-auto mt-8 my-32">
      <div className="w-11/12 mr-auto">
        <h1 className="mt-8 mb-2 font-bold text-3xl">About Us</h1>
        <p>Here at Technica Automotive we not only help on your goals but also share the knowledge so everyone better understands vehicles and how we can get them running and looking amazing.</p>
        <h2 className="mt-8 mb-2 font-semibold text-xl">Our Goals</h2>
        <p>With nearly a decade of automotive experience at your disposal to get your rides looking and running like they should.</p>
        <h2 className="mt-8 mb-2 font-semibold text-xl">The Future</h2>
        <p>We are in the pre launch of doing mobile detailing and building a team to achieve these goals to serve you better. Also we are getting the plan together to have a large facility to offer the best results you want in a timeline that meets everyones expectations.</p>
        <h2 className="mt-8 mb-2 font-semibold text-xl">Some History</h2>
        <p className="mb-2"> As a former automotive technician with over 8 years of experience, I have developed an exceptional eye for detail when it comes to servicing cars. I have seen firsthand the importance of quality and precision work, and that is why I have transitioned to professional detailing in order to provide the highest level of service to my clients.</p>
        <p className="mb-2">As a professional detailer, I use the latest techniques and products to ensure that each vehicle I work on achieves a flawless finish. I specialize in attracting high-end clients who demand only the best, and I never disappoint. I take pride in my work, and my meticulous attention to detail is second to none.</p>
        <p className="mb-2">From full exterior and interior detailing to paint correction and ceramic coating, my services are tailored to each client&rsquo;s specific needs. I understand that every vehicle is unique, and I work closely with my clients to provide a custom detailing plan that exceeds their expectations.</p>
        <p>My passion for cars and commitment to quality work are evident in every project I take on. Whether you&rsquo;re looking to preserve the value of your high-end vehicle or simply want to enjoy a showroom-quality finish, I am here to provide the professional detailing services you need. </p>
      </div>
      <div className="w-11/12 ml-auto mt-8 h-full">
        <img src={image}></img>
      </div>
    </div>
  )
};

export default About;
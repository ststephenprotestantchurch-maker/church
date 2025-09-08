import React, { useState } from 'react';
import image1 from '../assets/img/churh3.jpg';
import church1 from '../assets/img/chuch1.jpg';
import church2 from '../assets/img/church2.jpg';
import { motion } from 'framer-motion';
import childrens from '../assets/img/childrens.jpg'
//import Rating from '@mui/material/Rating';
//import StarIcon from '@mui/icons-material/Star';
//import Box from '@mui/material/Box';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
//import { ChatRounded } from '@mui/icons-material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Services.css'
import PeopleIcon from "@mui/icons-material/People";
import { blue } from '@mui/material/colors';
import { Button, Paper } from '@mui/material';
import { People } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import baptism from '../assets/img/baptistsm.jpg'
import youth from '../assets/img/ester.jpg'
import church3 from '../assets/img/churchp.jpg'
import church4 from '../assets/img/churchpics.jpg'
import { Helmet } from 'react-helmet-async'
const Services = () => {
  const [activeText, setActiveText] = useState(null);

 // eslint-disable-next-line no-lone-blocks
 { /*const services = [
    {
      id: 1,
      img: cc,
      title: 'Connectivity and Communication',
      description: `Stay connected and communicate seamlessly with our innovative Connectivity and Communication solutions. Software Defined Network Infrastructure, Wireless and Mobility options, Network Performance Optimization, and Unified Communication with Voice and Video.`,
    },
    {
      id: 2,
      img: modern,
      title: 'Modern IT Infrastructure',
      description: `Modern IT Infrastructure ensures your business growth with Software Defined Infrastructure (SDI), virtualization, cloud solutions, and modular data centers.`,
    },
    {
      id: 3,
      img: cyber,
      title: 'Cyber Security',
      description: `Robust digital security strategies for threat analysis, including Network Security, Infrastructure Security, Application Security, and User Security.`,
    },
  ];*/}

  const newImages = [
    { id: 1, image: childrens , alt:'children'},
    { id: 2, image: church1 , alt:'church'},
    { id: 3, image: church2, alt:'church service' }
  ];
  

  const events= [
    { id:1,title: "DC-P National Youth Fellowship Conference", image: youth , alt:'DC-P National Youth Fellowship Conference',  description:'Aug 14 – 18 2025', link:null, times:''},
    {id:2, title: "DC-P Inspection of Churches under ATC", image: church3 ,alt:'DC-P Inspection of Churches under ATC', description:'Aug 21 – 25 2025',link:null,times:''},
    {id:3, title: "Church Night Vigil", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QBTalK_4ThiCAIxkLW1SRnnERl3sVyDhnw&s', alt:'Church Night Vigil', description:'Aug 29 2025',link:null ,times:''},
  ];
  
  //const handleTextToggle = (id) => {
   // setActiveText(activeText === id ? null : id);
  //}

  return (
    <div className="w-full  font-Fira">
      {/* SEO Meta Tags */}
  <Helmet>
        <title>Church Support | Special Events | Online Services</title>
        <meta
          name="description"
          content="Explore St. Stephen's Church services, upcoming events, and community support programs. Join us online or at our location."
        />
        <meta
          name="keywords"
          content="St Stephen's Church, Church Support, Special Events, Online Services, Community Fellowship, Nigeria Church Events"
        />
        <meta property="og:title" content="Church Support | Special Events | Online Services" />
        <meta property="og:description" content="Learn about our special events, online services, and ways to get involved with St. Stephen's Church." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={church4} />
        <meta property="og:url" content="https://ststephensprotestantchurch.vercel.app/services" />
        <link rel="canonical" href="https://ststephensprotestantchurch.vercel.app/services" />

        {/* ✅ Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Church",
            "name": "St. Stephen's Protestant Church",
            "url": "https://ststephensprotestantchurch.vercel.app/services",
            "logo": "https://ststephensprotestantchurch.vercel.app/logo.png",
            "description": "Providing church support, special events, and online services for the community.",
            "event": events.map(event => ({
              "@type": "Event",
              "name": event.title,
              "startDate": event.description,
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "eventStatus": "https://schema.org/EventScheduled",
              "location": {
                "@type": "Place",
                "name": "St. Stephen's Church",
                "address": "Nigerian Armed Forces Resettlement Center, Oshodi"
              },
              "image": event.image
            }))
          })}
        </script>
      </Helmet>


   {/* Hero Section */}
<section className="relative w-full h-[300px] md:h-[400px]">
  {/* Background Image */}
  <img
    src={church4}
    alt="Hero section - Church Services"
    className="w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  {/* Text */}
  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
     text-center font-bold text-2xl md:text-4xl text-white z-10">
    Special Events
  </p>
</section>



      {/* Services Section */}
      {/*<section className="px-4 py-8">
        <h1 className="text-center text-3xl font-bold mb-8 text-gray-800">
          Our IT Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Paper
              key={service.id}
              className="relative overflow-hidden group cursor-pointer"
              onClick={() => handleTextToggle(service.id)}
              component="article"
            >
              <img
                src={service.img}
                alt={`${service.title} - IT Service`}
                className="w-full h-64 object-cover"
              />
              <div
                className={`absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out ${
                  activeText === service.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <h2 className="text-lg font-bold mb-2">{service.title}</h2>
                {activeText === service.id && (
                  <p className="text-sm text-center px-4">{service.description}</p>
                )}
              </div>
            </Paper>
          ))}
        </div>
      </section>*/}

      {/* Structured Data (Schema.org) */}
      {/*<script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "IT Services",
          "serviceType": "Modern IT Infrastructure, Cyber Security, Connectivity and Communication",
          "provider": {
            "@type": "Organization",
            "name": "Manifold Computers",
          },
          "areaServed": "Global",
          "description": "We offer IT solutions, including Modern IT Infrastructure, Connectivity, and Cyber Security services.",
        })}
      </script>*/}

      <section className="my-12 px-6">
      <motion.div
        className="flex flex-col lg:flex-row gap-6 items-center"
        transition={{ type: "spring", stiffness: 300 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Carousel Section */}
        <motion.div className="w-full lg:w-2/3">
          <Carousel
            infiniteLoop
            autoPlay
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            dynamicHeight={false}
            interval={3000}
            className="rounded-lg shadow-lg overflow-hidden rounded-br-[200px]"
          >
            {newImages.map(({ id, image, alt }) => (
              <div key={id} className="w-full h-96">
                <img
                  src={image}
                  alt={alt}
                  className="object-cover w-full h-full "
                />
              </div>
            ))}
          </Carousel>
        </motion.div>

        {/* Placeholder for Additional Content */}
        <motion.div
      className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Paper elevation={3} className="p-6 rounded-lg shadow-md bg-white">
        <div className="flex flex-col items-center lg:items-start space-y-6">
          {/* Icon Wrapper */}
          <div className="flex items-center justify-center w-16 h-16 rounded-full border bg-gray-100">
            <PeopleIcon className="text-primary" fontSize="large" />
          </div>

          {/* Text Content */}
          <h3 className="text-lg font-semibold">We're Here to Help</h3>
          <p className="text-gray-600">
            Need assistance? We're here to help with support, guidance, and
            resources. Reach out to us anytime.
          </p>

          {/* Call to Action */}
          <NavLink to='/contact-us'>
          <Button variant="contained" color="primary" sx={{backgroundColor:'#ec3237'}} aria-label="Contact us">
            Contact Us
          </Button>
          </NavLink>
          
        </div>
      </Paper>
    </motion.div>

   
      </motion.div>
    </section>

    <section
  className="px-6 py-16 bg-[#ec3237] text-white text-center"
  aria-labelledby="events-heading"
  style={{
    background: `
      linear-gradient(25deg, #ec3237 25%, #d42a2f 15%, #d42a2f 75%, #ec3237 65%, #ec3237),
      linear-gradient(-25deg, #ec3237 25%, #d42a2f 15%, #d42a2f 75%, #ec3237 65%, #ec3237)
    `,
    backgroundSize: '40px 40px', // Adjust diamond size here
    backgroundColor: '#ec3237', // Fallback background color
  }}
>
  {/* Header Section */}
  <div className="max-w-3xl mx-auto">
    <p className="text-sm md:text-base uppercase tracking-wide font-semibold">
      Special event
    </p>
    <h1
      id="events-heading"
      className="text-3xl md:text-5xl font-bold leading-snug my-6 text-black"
    >
      Upcoming {''} <span className=' text-white'>events</span>
    </h1>
  </div>

  {/* Events Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16">
  {events.map((event, id) => (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: id * 0.2, ease: "easeOut" }}
    >
      <div
        className="group relative cursor-pointer"
        onMouseEnter={() => setActiveText(event.id)}
        onMouseLeave={() => setActiveText(null)}
        onFocus={() => setActiveText(event.id)}
        onBlur={() => setActiveText(null)}
        tabIndex={0}
        role="button"
        aria-label={`View details about ${event.title}`}
      >
        {event ? (
          <NavLink to={event.link}>
            <Paper
              className="relative rounded-br-[200px] overflow-hidden shadow-lg"
              sx={{
                backgroundColor: "#fff",
                height: "auto",
                minHeight: "300px",
                boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
              }}
            >
              {/* Image */}
              <img
                src={event.image}
                alt={event.alt}
                className="absolute inset-0 w-full h-full rounded-br-[200px] object-cover"
              />

             
            </Paper>
             {/* Text Overlay */}
             <motion.div
                className=" bottom-0 left-0 right-0 brightness-70 text-white flex flex-col justify-center items-center transition-opacity duration-300"
              >
                <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-center px-4">{event.description}</p>
                <p className="text-sm text-center px-4">{event.times}</p>
              </motion.div>
          </NavLink>
        ) : (
          <Paper
            className="relative rounded-br-[200px] overflow-hidden shadow-lg"
            sx={{
              backgroundColor: "#fff",
              height: "auto",
              minHeight: "300px",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
            }}
          >
            {/* Image */}
            <img
              src={event.image}
              alt={event.alt}
              className="w-full h-full rounded-br-[200px] object-cover"
            />

            {/* Text Overlay */}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center"
            >
              <h3 className="text-lg font-bold mb-8">{event.title}</h3>
              <p className="text-sm text-center px-4">{event.description}</p>
              <p className="text-sm text-center px-4">{event.times}</p>
            </motion.div>
          </Paper>
        )}
      </div>
    </motion.div>
  ))}
</div>
 {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  mt-16">
    {events.map((event, id) => (
      <motion.div
        key={id}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: id * 0.2, ease: "easeOut" }}
      >
        <div
          className="group relative cursor-pointer"
          onMouseEnter={() => setActiveText(event.id)}
          onMouseLeave={() => setActiveText(null)}
          onFocus={() => setActiveText(event.id)}
          onBlur={() => setActiveText(null)}
          tabIndex={0}
          role="button"
          aria-label={`View details about ${event.title}`}
        >
        {event ? (
          <NavLink to={event.link}>
          <Paper
            className="relative rounded-br-[200px] overflow-hidden shadow-lg"
            sx={{
              backgroundColor: "#fff",
              height: "auto",
              minHeight: "300px",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
            }}
          >
       
            <img
              src={event.image}
              alt={event.alt}
              className="absolute inset-0 w-full h-full rounded-br-[200px] object-cover"
            />

          <motion.div
              className={` bg-black bg-opacity-70 text-white flex flex-col justify-center items-center transition-opacity duration-300 `}
            >
              <h3 className="text-lg font-bold mb-2">{event.title}</h3>
            
                <p className="text-sm text-center px-4">{event.description}</p>
            
            </motion.div>

          <motion.div
              className={`absolute inset-0 bg-black bg-opacity-70 text-white flex flex-col justify-center items-center transition-opacity duration-300 ${
                activeText === event.id
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <h3 className="text-lg font-bold mb-2">{event.title}</h3>
              {activeText === event.id && (
                <p className="text-sm text-center px-4">{event.description}</p>
              )}
            </motion.div>
          </Paper>
          </NavLink>
        ):(
         <Paper
            className="relative rounded-br-[200px] overflow-hidden shadow-lg"
            sx={{
              backgroundColor: "#fff",
              height: "auto",
              minHeight: "300px",
              boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)",
            }}
          >
       
            <img
              src={event.image}
              alt={event.alt}
              className="w-full h-full rounded-br-[200px] object-cover"
            />

            <motion.div
              className=" bg-black bg-opacity-70 text-black flex flex-col justify-center items-center "
            >
              <h3 className="text-lg font-bold mb-8">{event.title}</h3>
             
                <p className="text-sm text-center px-4">{event.description}</p>
         
            </motion.div>
          </Paper>
        )}
         
        </div>
      </motion.div>
    ))}
  </div>*/}
</section>

    </div>
  );
};

export default Services;

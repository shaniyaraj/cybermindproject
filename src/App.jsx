import React, { useState, useEffect } from 'react';
import Enterprise from "../src/assets/EnterpriseScale.png"
import realTimeApp from "../src/assets/realTimeApp.png"
import interactive from "../src/assets/interactive.png"
import dataHeavy from "../src/assets/dataHeavy.png"
import blazingFast from '../src/assets/blazingFast.png'
import awardWinning from '../src/assets/awardWinning.webp'
import yCombinator from '../src/assets/yCombinator.png'
import farmyungAward from '../src/assets/farmyngAward.webp'
import './App.css';
import ContactForm from './pages/Contact';
import Careers from './pages/Careers';
import WhyUs from './pages/WhyUs';
import Farmyng, { LocalizedNewsFeed, ListingPage, MarketPage, AgriPage, Overview, Callbutton } from "../src/pages/Farmyng";
import Services from './pages/Services';
import demo1 from '../src/assets/demo1.png';
import demo2 from '../src/assets/demo2.png';
import freelance1 from './assets/freelance1.png';
import freelance2 from './assets/freelance2.png';
import Profitabill, { Review, Features, CallToAction } from './pages/Profitabill';
// import Banner from './pages/Mobile';
import Banner, {MobileAppOverview,Carousel,TechnologiesSection,Project } from './pages/Mobile';
import Collection, {Webreview,Slider,Technology,Data } from './pages/Web';
import OurWorks from './pages/OurWorks';
import Blog from './pages/Blog';
import About from './pages/About';
import Info from './pages/Bcontact';
import aatchitamizh from './assets/aatchitamizhlogo.webp';
import BB from './assets/BBlogo.png';
import captain from './assets/captainLogo.webp';
import DMK from './assets/DmkLogo.webp';
import farmyng from './assets/farmyngclub.png';
import hyperlaunch from './assets/hyperlaunch.png';
import inesh from './assets/inesh.webp';
import ivb from './assets/ivbLogo.jpg';
import jobzshala from './assets/jobzshala.png';
import moneyrush from './assets/MoneyRushLogo.webp';
import ovhqlogo from './assets/ovhqlogo.png';
import schoolnet from './assets/schoolnetLogo.webp';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WorksSection />
      <BrandCarousel />
      <OurWorks />
      <Farmyng />
      <Overview />
      <LocalizedNewsFeed />
      <ListingPage />
      <MarketPage />
      <AgriPage />
      <Callbutton />
      <Profitabill />
      <Review />
      <Features />
      <CallToAction />
      <Banner />
      <MobileAppOverview />
      <Carousel />
      <TechnologiesSection />
      <Project />
      <Collection />
      <Webreview />
      <Slider />
      <Technology />
      <Data />
      <ContactForm />
      <Careers />
      <AppscaleRecognition />
      <WhyUs />
      <Services />
      <IdeaSection />
      <Blog />
      <About />
      <Info />
      <Footer />
    </div>
  );
}

function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo-text">CyberMind Works</h1>
      </div>

      <nav className="main-nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#portfolio">Portfolio</a></li>

          <li className="nav-item dropdown">
            <a href="#services" onClick={(e) => {
              e.preventDefault();
              setServicesOpen(!servicesOpen);
            }}>
              Services
              <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </a>
            {servicesOpen && (
              <ul className="dropdown-menu">
                <li><a href="#web-apps">Web Apps</a></li>
                <li><a href="#mobile-apps">Mobile Apps</a></li>
              </ul>
            )}
          </li>


          <li className="nav-item dropdown">
            <a href="#products" onClick={(e) => {
              e.preventDefault();
              setProductsOpen(!productsOpen);
            }}>
              Products
              <svg className="dropdown-icon" width="16" height="16" viewBox="0 0 24 24">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </a>
            {productsOpen && (
              <ul className="dropdown-menu">
                <li><a href="#profitabill">Profitabill</a></li>
                <li><a href="#farmyng club">Farmyng Club</a></li>
              </ul>
            )}
          </li>

          <li className="nav-item"><a href="#blog">Blog</a></li>
          <li className="nav-item"><a href="#careers">Careers</a></li>
        </ul>
      </nav>

      <button className="contact-button">Contact Us</button>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Get a software for your <br /> business that is
          <span className='scrolling-words-wrapper'>
            <span className='scrolling-words gradient-text'>
              <div className='gradient-text'>Fast</div>
              <div className='gradient-text'>Reliable</div>
              <div className='gradient-text'>Scalable</div>
              <div className='gradient-text'>Secure</div>
            </span>
          </span>
        </h1>

        <p className="hero-subtitle">
          We specialize in creating custom software solutions from<br />
          the ground up for startups and mid-sized enterprises.
        </p>

        <div className="trusted-by">
          <p>Trusted by</p>
          <div className="trusted-logo">
            <img src={yCombinator} alt="Y Combinator" />
            <p>founders</p>
          </div>
        </div>
      </div>
    </section>
  );
}
const projectsData = {
  enterprise: [
    {
      title: '5 Million + leads in CRM',
      description: 'Slick application with complex tailor made business reports rendered in seconds - all while munching huge amounts of dataicon',
      image: Enterprise,
    },
    {
      title: 'Near real-time Lead Prioritization',
      description: 'Get an agent assigned to your hot leads in few seconds all while running complicated lead assignment and prioritization algorithms',
      image: Enterprise,
    },
    {
      title: '360 degree tracking across products',
      description: 'Track every activity of a lead - website visits, form fills, inbound calls, emails, social media ads and more..',
      image: Enterprise,
    }
  ],
  learning: [
    {
      title: 'Coding Judge, Audio/Video tests',
      description: 'We built a platform that can host MCQs, Coding questions, Audio, Video (Listening, Reading tests), File submission.',
      image: realTimeApp,
    },
    {
      title: 'Student skill profilling',
      description: 'Complete skills profiling of a student, areas of strength/weakness. Suggestions to improve the same.',
      image: realTimeApp,
    },
    {
      title: 'AI integrated- GPT 3.5',
      description: 'Automated creation of question banks, assessment of subjective questions, and crafting individualized reports for students.',
      image: realTimeApp,
    },
  ],
  interactive: [
    {
      title: 'Realtime multi user collaborative editor',
      description: 'Google docs like interactivity and notion like interface built into one.',
      image: interactive,
      //  isSpecialLayout: true,
    },
    {
      title: 'Not just Text',
      description: 'Editor supports MCQs, Coding editor and many such components built according to client’s needs',
      image: interactive,
    },
    {
      title: 'Version control, Auto save and more...',
      description: 'WebRTC based editor, very fast. Supports large number of users. Content exportable as E-Books, PPT, Webpage.',
      image: interactive,
    },
  ],
  data: [
    {
      title: '100,000,000 + records migrated',
      description: 'Handling large amounts of data, we have migrated entire data store for a client with very minimal infra cost',
      image: dataHeavy,
    },
    {
      title: 'Tera bytes of fast data movement ',
      description: 'We optimised data movement,running custom scripts,fine tuning infrastructure-completing migration in less than 48 hours',
      image: dataHeavy,
    },
  ],
  blazing: [
    {
      title: 'Millions of visits',
      description: 'We have built websites that handle millions of visitors, while still operating at peak performance',
      image: blazingFast,
    },
    {
      title: 'Lightning speed - 90 + score',
      description: "We have bulit websites that have consistency ranked hign in google page audits",
      image: blazingFast,
    },
    {
      title: 'Crazy Optimization',
      description: 'We implemented optimization techniques - lazy loading, dynamic image optimization, gzip compression & leveraged JAM stack',
      image: blazingFast,
    },
  ],
  award: [
    {
      title: 'Recognized by Google',
      description: 'We were trained by Google in partnership with the Ministry of Electronics and Information Technology - Appscale academy',
      image: awardWinning,
    },
    {
      title: 'National News coverage',
      description: 'Our association with Google Appscale academy was conveyed in all major new-pappers ',
      image: awardWinning,
    },
    {
      title: 'Loved by Users',
      description: '4 + star rated and downloade by more than 10,000 users in playstore',
      image: awardWinning,
    },
  ],
};

function WorksSection() {
  const [activeCategory, setActiveCategory] = useState('learning');
  const [activeSlide, setActiveSlide] = useState(0);

  const categories = [
    { id: 'enterprise', name: 'Enterprise scale', tags: ['#SaaS', '#CRM'] },
    { id: 'learning', name: 'Learning platform', tags: ['#LMS'] },
    { id: 'interactive', name: 'Interactive', tags: ['#LMS'] },
    { id: 'data', name: 'Data heavy', tags: ['#ETL'] },
    { id: 'blazing', name: 'Blazing fast', tags: ['#JAMStack'] },
    { id: 'award', name: 'Award winning app', tags: ['#Flutter'] },
  ];


  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const projects = projectsData[activeCategory] || [];
    if (projects.length === 0) return;

    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeCategory]);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSlide(0); // Reset to first slide when changing categories
  };

  const renderProjects = () => {
    const projects = projectsData[activeCategory] || [];
    if (projects.length === 0) {
      return <div className="no-projects">No projects to display for this category.</div>;
    }

    return (
      <div className="projects-showcase">
        <div className="showcase-container">
          {/* Left Column - Project Features */}
          <div className="project-features">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-feature ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
              >
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" className="lightning-icon">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="currentColor" />
                  </svg>
                </div>
                <div className="feature-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Image Showcase */}
          <div className="image-showcase">
            {projects[activeSlide]?.isSpecialLayout ? (
              <div className="hackathon-display">
                <div className="hackathon-main">
                  <img src="C:\cybermind\assets\EnterpriseScale.png" alt="24 Hour Programming Hackathon" />
                </div>
                <div className="hackathon-details">
                  <img src="/hackathon-card.png" alt="Hackathon Details" />
                  <img src="/hackathon-schedule.png" alt="Hackathon Schedule" />
                </div>
              </div>
            ) : (
              <div className="image-container">
                <img
                  src={projects[activeSlide]?.image}
                  alt={projects[activeSlide]?.title}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="works-section">
      <h2 className="section-title">Some of our works</h2>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            <h3>{category.name}</h3>
            <div className="tags">
              {category.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Active Indicator */}
      <div className="active-indicator">
        <div
          className="indicator-line"
          style={{
            left: `${categories.findIndex(cat => cat.id === activeCategory) * (100 / categories.length)}%`,
            width: `${100 / categories.length}%`
          }}
        ></div>
      </div>

      {/* Projects Display */}
      {renderProjects()}

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {(projectsData[activeCategory] || []).map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === activeSlide ? 'active' : ''}`}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

const BrandCarousel = () => {
  const brands = [
    { name: 'aatchitamizh', logo: aatchitamizh },
    { name: 'BB', logo: BB },
    { name: 'Captain', logo: captain },
    { name: 'DMK', logo: DMK },
    { name: 'Farmyng', logo: farmyng },
    { name: 'Hyperlaunch', logo: hyperlaunch },
    { name: 'Inesh', logo: inesh },
    { name: 'IVB', logo: ivb },
    { name: 'Jobzshala', logo: jobzshala },
    { name: 'MoneyRush', logo: moneyrush },
    { name: 'OVHQLogo', logo: ovhqlogo },
    { name: 'schoolnet', logo: schoolnet },
  ];

  return (
    <div className="brand-carousel-container">
      <h2 className="brand-carousel-heading">Brands that trust us.</h2>
      <Swiper
        spaceBetween={45}
        slidesPerView={5}
        loop={true}
        speed={1000} 
        autoplay={{
          delay: 0, 
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="brand-slide swiper-wrapper">
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


// const ServicesSection = () => {
//   return (
//     <div>
//       <Services />
//     </div>
//   );
// };

function AppscaleRecognition() {
  return (
    <div className="appscale-container">
      <div className="award-card">
        <img src={farmyungAward} alt="Appscale Academy Award" className="award-image" />
      </div>
      <p className="description-text">
        Our project, <span className="highlight">Farmyng Club</span>, has been acknowledged<br />
        by Google's Appscale Academy.
      </p>
    </div>
  );
};


function IdeaSection() {
  return (
    <section className="idea-section">
      <h2 className="idea-title">Have an idea?</h2>
      <p className="idea-description">
        Need help in turning your idea into a successful product? <br />
        Talk to us. We can help you build your product quickly and <br />
        ensure it can scale infinitely.
      </p>
      <button className="idea-button">Get Free Consulting</button>
    </section>
  );
};



function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
        </div>

        <div className="footer-links">
          <div className='link-column'>
            <h3>About Us</h3>
            <ul>
              <li>< a href='#why us'>Why Us</a></li>
              <li>< a href='#privacy terms'>Privacy Terms</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Portfolio</h3>
            <ul>
              <li><a href="#sales crm">Sales CRM</a></li>
              <li><a href="#marketing jobverse">Marketing Jobverse</a></li>
              <li><a href="#uthsav">Uthsav</a></li>
              <li><a href="#learning platform">Learning platform</a></li>
              <li><a href="#profitabill">Profitabill</a></li>
              <li><a href="#baabee">Baabee Tv</a></li>
              <li><a href="#inesh">Inesh</a></li>
              <li><a href="#political">Political App</a></li>
              <li><a href="#farmyung club app">Farmyng Club App</a></li>
            </ul>
          </div>

          <div className="link-column">
            <h3>Offerings</h3>
            <ul>
              <li><a href="#Products">Products</a></li>
              <li><a href="#Services">Services</a></li>
              <li><a href="#Web App">Web App</a></li>
              <li><a href="# Development">Development</a></li>
              <li><a href="#Mobile App">Mobile App </a></li>
              <li><a href="#Development">Development</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>Careers</h3>
            <ul>
              <li><a href="#">We are hiring!</a></li>
            </ul>
          </div>

          <div className="link-column">
            <h1>CyberMind Works LLP</h1>
            <ul>
              <li><a href="mailto:info@cybermindworks.com"><br />
                10/15 K.M Towers - 1st Floor, Chakrapani Road,<br />
                Guindy, Chennai, Tamil Nadu, 60004</a></li>
              <li><a href="tel:+1234567890">ph: +01 75000 53535</a></li>
              <li><a href='#'>www.cybermindworks.com</a></li>
              <li><a href="mailto:info@cybermindworks.com">contact@cybermindworks.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2025, CyberMind Works | All rights reserved.</p>
      </div>
    </footer>
  );
}

export default App;
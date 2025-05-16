import React from 'react';
import './Mobile.css';
import kotlin from '../assets/kotlin.png';
import android from '../assets/androidStudio.png';
import flutter from '../assets/flutter.svg';
import swift from '../assets/swift.svg';
import reactLogo from '../assets/react.svg';
import pwa from '../assets/pwaIcon.png';
import azure from '../assets/azure.png';  // fixed here
import aws from '../assets/aws.png';      // fixed here
import ban1 from '../assets/ban1.png';
import ban2 from '../assets/ban1.png';
import ban3 from '../assets/ban3.png';
import ban4 from '../assets/ban4.png';
import ban5 from '../assets/ban5.png';

const Banner = () => {
  const serviceImages = [ban1,ban2,ban3,ban4,ban5];

  return (
    <section className="services-section">
      <div className="services-content">
        <h1><span>Services</span> <br />Offered</h1>
      </div>
      <div className="services-gallery">
        {serviceImages.map((img, index) => (
          <img key={index} src={img} alt={`service-${index+1}`} className={`service-img img-${index+1}`} />
        ))}
      </div>
    </section>
  );
};

export default Banner;



const MobileAppOverview = () => {
  return (
    <div className="mobile-app-overview">
      <h1>Mobile Application Development Overview</h1>
      <p>
        We keep experimenting with latest technologies and have successfully created mobile applications using Flutter and React native. Most of
         our web applications are Progressive Web Apps by default. We have developed mobile applications in various sectors including but not limited
         to ecommerce, portfolio and land management platform.
      </p>
      <p>
        We have developed mobile applications that are capable of handling millions of transactions per week. We partner with early stage startups,
        SMBs and help them get their product to market faster. Our mobiles apps are multi-lingual, accessible and performant.
      </p>
    </div>
  );
};

export  {MobileAppOverview};




const techLogos = [
  { src: kotlin, alt: 'Kotlin' },
  { src: android, alt: 'Android Studio' },
  { src: flutter, alt: 'Flutter' },
  { src: swift, alt: 'Swift' },
  { src: reactLogo, alt: 'React' },
  { src: pwa, alt: 'PWA' },
  { src: azure, alt: 'Azure' },
  { src: aws, alt: 'AWS' },
];

const TechnologiesSection = () => {
  return (
    <div className="technologies-container">
      <h2 className="tech-title">Technologies we use</h2>
      <div className="tech-grid">
        {techLogos.map((logo, index) => (
          <div key={index} className="tech-icon">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export { TechnologiesSection};

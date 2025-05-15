import React from 'react';
import './Mobile.css';
// import kotlin from '../assets/kotlin.png';
// import android from '../assets/androidStudio.png';
// import flutter from '../assets/flutter.svg';
// import swift from '../assets/swift.svg';
// import reactLogo from '../assets/react.svg';
// import pwa from '../assets/pwaIcon.png';
// import azure from './src/assets/azure.png';
// import aws from './src/assets/aws.png';
import kotlin from '../assets/kotlin.png';
import android from '../assets/androidStudio.png';
import flutter from '../assets/flutter.svg';
import swift from '../assets/swift.svg';
import reactLogo from '../assets/react.svg';
import pwa from '../assets/pwaIcon.png';
import azure from '../assets/azure.png';  // fixed here
import aws from '../assets/aws.png';      // fixed here


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

export default MobileAppOverview;




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

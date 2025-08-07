import React from 'react';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.jpg';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';
import logo5 from '../assets/logo5.png';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.svg.png';
import logo8 from '../assets/logo8.png';
import logo9 from '../assets/logo9.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9];

const TrustPartner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 py-12 overflow-hidden border-t border-b border-blue-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Trusted by Industry Leaders
        </h2>
        
        <div className="relative w-full overflow-hidden">
          {/* First marquee */}
          <div className="flex animate-scroll gap-16 w-max py-4">
            {logos.concat(logos).map((logo, index) => (
              <div key={`first-${index}`} className="flex items-center px-4">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
          
          {/* Second marquee (reversed) */}
          <div className="flex animate-scroll-reverse gap-16 w-max py-4">
            {logos.concat(logos).map((logo, index) => (
              <div key={`second-${index}`} className="flex items-center px-4">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Add animation style directly */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          @keyframes scroll-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }

          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll-reverse {
            animation: scroll-reverse 35s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default TrustPartner;
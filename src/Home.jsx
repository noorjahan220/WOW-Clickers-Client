import React from 'react';
import About from './About';

import Feedback from './feedback';
import NewAd from './Component/NewAd';
import AdList from './Component/AdList';
import NewTicketForm from './Component/NewTicketForm';
import TicketHistory from './Component/TicketHistory';
import TrustPartner from './Component/TrustPartners';
import FAQSection from './Component/F&Q';
import BlogSection from './Component/BlogSection';
import CTASection from './Component/CTASection';
import ClientReviews from './Component/ClientReviews';
import WhyChooseUs from './Component/WhyChooseUs';
import CarefulWork from './Component/CarefulWork';
import ImportantServices from './Component/ImportantServices';
import RecentPost from './Component/RecentPost';

const Home = () => {
    return (
        <div>
            
            <About/>
            <Feedback/>
            <NewAd/>
            <AdList/>
            <NewTicketForm/>
            <TicketHistory/>
            {/* New Home page sections */}
            <TrustPartner/>
            <FAQSection/>
            <BlogSection/>
            <CTASection/>
            <ClientReviews/>
            <WhyChooseUs/>
            {/* new */}
            <CarefulWork/>
            <ImportantServices/>
            <RecentPost/>
        </div>
    );
};

export default Home;
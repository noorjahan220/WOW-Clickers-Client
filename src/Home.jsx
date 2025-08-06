import React from 'react';
import About from './About';

import Feedback from './feedback';
import NewAd from './Component/NewAd';
import AdList from './Component/AdList';
import NewTicketForm from './Component/NewTicketForm';
import TicketHistory from './Component/TicketHistory';

const Home = () => {
    return (
        <div>
            
            <About/>
            <Feedback/>
            <NewAd/>
            <AdList/>
            <NewTicketForm/>
            <TicketHistory/>
        </div>
    );
};

export default Home;
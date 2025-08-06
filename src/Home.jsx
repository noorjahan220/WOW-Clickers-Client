import React from 'react';
import About from './About';

import Feedback from './feedback';
import NewAd from './Component/NewAd';
import AdList from './Component/AdList';

const Home = () => {
    return (
        <div>
            
            <About/>
            <Feedback/>
            <NewAd/>
            <AdList/>
        </div>
    );
};

export default Home;
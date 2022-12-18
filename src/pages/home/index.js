import React, { useState } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import TabOptions from '../../components/tabOptions';
import Delivery from '../../components/delivery';
import Nightlife from '../../components/nightlife';
import DinningOut from '../../components/dinningOut';


const HomePage = () => {

    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getcorrectScreen(activeTab)}

            <Footer />
        </div>
    );
};

const getcorrectScreen = (tab) => {
    switch (tab) {
        case "Delivery":
            return <Delivery />

        case "Dinning Out":
            return <DinningOut/>;

        case "Nightlife":
            return <Nightlife/>;

        default:
            return <Delivery />;
    }

}

export default HomePage;

import React, {useState} from "react";
import CallToAction from "./CallToAction";
import WhyWorkWithUs from "./WhyWorkWithUs";
import WeGuaranteeAndMainDirections from "./WeGuaranteeAndMainDirections";
import Portfolio from "./Portfolio";
import FocusAtention from "./FocusAtention";
import SevenSteps from "./SevenSteps";
import Reviews from "./Reviews";
import SiteDream from "./SiteDream";
import MessengerIcons from "./iconsBlocks/MessengerIcons";
import ContactForm from "./template/ContactForm";
const MainPage = () => {
  console.log('main page');
  return (
    <div>
      <CallToAction />
      <WhyWorkWithUs />
      <WeGuaranteeAndMainDirections /> 
      <Portfolio />
      <FocusAtention/>
      <SevenSteps/>
      <SiteDream/>
      <Reviews/>
      <input style={{width: '100%'}}/>
    </div>
  );
};

export default MainPage;

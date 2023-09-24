import React from 'react';
import '../../style/whyUs.scss';
const WhyUsBlockTemplate = ({item}) => {
    return (
        <div className='why_us_icon_item_wrap'>
            <div>{item.icon}</div>
            <p className='why_us_icon_number'>{item.number}</p>
            <p className='why_us_icon_text'>{item.text}</p>
        </div>
    );
};

export default WhyUsBlockTemplate;
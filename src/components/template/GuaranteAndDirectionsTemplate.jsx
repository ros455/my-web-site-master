import React from 'react';
import '../../style/weGuaranteeAndMainDirections.scss';
const GuaranteAndDirectionsTemplate = ({item}) => {
    return (
        <div className='guarante_directions_tempale_item_wrap'>
            <p >{item.icon}</p>
            <p className='guarante_directions_tempale_item_text'>{item.text}</p>
        </div>
    );
};

export default GuaranteAndDirectionsTemplate;
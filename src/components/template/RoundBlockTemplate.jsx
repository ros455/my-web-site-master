import React from 'react';
import '../../style/roundBlock.scss';
const RoundBlockTemplate = ({item}) => {
    return (
        <div className='round_main_block_wrap'>
            <div className='round_second_block_wrap'>
            <p>{item.icon}</p>
            <div className='round_block_number_wrap'>
                <p className='round_block_number'>{item.number}</p>
            </div>
            <p className='round_block_text'>{item.text}</p>
            </div>
        </div>
    );
};

export default RoundBlockTemplate;
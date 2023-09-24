import React from 'react';
import { Link } from 'react-router-dom';
const PortfolioItemTemplate = ({item}) => {
    return (
        <div className='portfolio_template_block'>
            <Link to={`portfolio/${item._id}`}>
            <img className='portfolio_template_img' src={`./projects/${item.mainImage}`}/>
            </Link>
        </div>
    );
};

export default PortfolioItemTemplate;
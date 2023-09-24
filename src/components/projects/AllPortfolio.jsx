import React, {useState, useEffect} from 'react';
import '../../style/allPortfolio.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../http/baseUrl';
const AllProjects = () => {
    const [allPortfolio, setAllPortfolio] = useState([]);
    const [category, setCategory] = useState([
        "Лендінги", "Корпоративні сайти", "B2B", "Магазини", "Платформи"
    ])

    useEffect(() => {
        axios.get(`${BASE_URL}/get-all-portfolio`)
        .then((res) => {
            setAllPortfolio(res.data)
        })
        .catch((error) => {
            console.log('Request error',error);
        })
    },[])
    console.log('allPortfolio',allPortfolio);
    return (
        <div className='all_portfolio_wrapper'>
            <div className='all_portfolio_header'>
                <div className='all_portfolio_title_wrap'>
                <p className='all_portfolio_title_text'>Портфоліо</p>
                </div>
                <div className='all_portfolio_category_wrap'>
                    {category.map((item) => (
                        <p key={item} 
                        className='all_portfolio_category_item' >{item}</p>
                    ))}
                </div>
            </div>
            <div className='all_portfolio_content_wrap'>
                {allPortfolio.length && allPortfolio.map((item, idx) => (
                    <Link to={`/portfolio/${item._id}`} key={idx} className='all_portfolio_content_block'>
                        <img src={`/projects/${item.mainImage}`} className='all_portfolio_content_block_img'/>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllProjects;
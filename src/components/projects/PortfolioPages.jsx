import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../../style/portfolioOne.scss';
import axios from 'axios';
import { BASE_URL } from '../../http/baseUrl';
const PortfolioPages = () => {
    const [project, setProject] = useState(null);
    const { id } = useParams(); // Отримуємо id з URL

    console.log('id',id);

    useEffect(() => {
        axios.get(`${BASE_URL}/get-one-portfolio/${id}`)
        .then((res) => {
            setProject(res.data);
        })
    },[])
    return (
        <div className='portfolio_one_wrap'>
            <div className='portfolio_one_img_wrap'>
                <img className='portfolio_one_img' src={`/projects/${project?.mainImage}`}/>
            </div>
            <div className='portfolio_one_content_wrap'>
                <div className='portfolio_one_content_block'>
                    <div className='portfolio_one_content_title_wrap'>
                        <p className='portfolio_one_content_title_text'>{project?.title}</p>
                    </div>
                    <div className='portfolio_one_content_category_wrap'>
                        <p className='portfolio_one_content_category_text'>{project?.category}</p>
                    </div>
                    <div className='portfolio_one_content_tags_wrap'>
                        {project && project.tags.map((tag) => (
                            <div key={tag} className='portfolio_one_content_tags_block'>
                                <p className='portfolio_one_content_tags_round'></p>
                                <p className='portfolio_one_content_tags_text'>{tag}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPages;
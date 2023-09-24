import React from 'react';
import StarRatings from 'react-star-ratings';
import '../../style/reviewBlockTemplate.scss';
const ReviewBlocktemplate = ({item}) => {
    const changeCurrentRating = (e) => {

      }

    return (
        <div className='review_wrap'>
            <div className='review_image_wrap'>
                <img src={`./img/${item.image}`} className='review_image'/>
            </div>
            <div className='review_content_wrap'>
                <div className='review_content_name_and_checked'>
                    <p className='review_content_name'>{item.name}</p>
                    <div className='review_content_checked_wrap'>
                    <p className='review_content_checked'>Перевірений</p>
                    </div>
                </div>
                <div className='review_content_date_and_star'>
                    <p className='review_content_date'>{item.date}</p>
                    <div className='review_content_star'>
                    <StarRatings
                    rating={5}
                    starRatedColor="#ffd700"
                    numOfStars={5}
                    name="rating"
                    starHoverColor="#ffd700"
                    starDimension="15px"
                  />
                    </div>
                </div>
                <div className='review_content_text_wrap'>
                    <p className='review_content_text'>{item.text}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewBlocktemplate;
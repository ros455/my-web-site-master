import React from 'react';
import ContactForm from './template/ContactForm';
import '../style/focusAtention.scss'
const FocusAtention = () => {
    return (
        <div className='focus_atention_wrap'>
            <div className='focus_atention_bc_image_text_wrap'>
                <div className='focus_atention_bc_image_wrap'>
                    <img className='focus_atention_bc_image' src='./icon/background-item.svg'/>
                </div>
                <div className='focus_atention_text_wrap'>
                    <p className='focus_atention_text'>Сфокусуй увагу клієнта на своєму продукті, на ключові переваги та вигоди</p>
                </div>
            </div>
            <div className='focus_atention_form_wrap'>
            <ContactForm/>
            </div>
            <div className='focus_atention_main_photo_wrap'>
                <img className='focus_atention_main_photo' src='./img/people-and-computor.svg'/>
            </div>
        </div>
    );
};

export default FocusAtention;
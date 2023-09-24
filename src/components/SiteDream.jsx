import React from 'react';
import TitleTemplate from './template/TitleTemplate';
import ContactForm from './template/ContactForm';
import '../style/siteDream.scss';
const SiteDream = () => {
    return (
        <div className='site_dream_wrap'>
            <TitleTemplate text={'Створимо сайт, про який мрієте'}/>
            <div className='site_dream_main_block'>
                <div className='site_dream_contact_form_wrap'>
                    <ContactForm/>
                </div>
                <div className='site_dream_image_wrap'>
                    <img src='./img/computor.svg' className='site_dream_image'/>
                </div>
            </div>
        </div>
    );
};

export default SiteDream;
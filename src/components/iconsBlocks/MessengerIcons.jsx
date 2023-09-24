import React, {useState} from 'react';
import VisibleContactIcon from '../template/VisibleContactIcon';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {BiLogoTelegram} from 'react-icons/bi';
import {SiViber} from 'react-icons/si';
import {BsWhatsapp} from 'react-icons/bs';
import {SiMaildotru} from 'react-icons/si';
import TelegrammIcon from '../icons/TelegrammIcon';

const MessengerIcons = () => {
    const [choseMassanger, setChoseMassanger] = useState('');
    // const [messengersArray, setMessengersArray] = useState([
    //     {
    //         icon: <BsFillTelephoneFill className='messenger_icon'/>,
    //         url: 'Telephone'
    //     },
    //     {
    //         icon: <BiLogoTelegram className='messenger_icon'/>,
    //         url: 'Telegram'
    //     },
    //     {
    //         icon: <SiViber className='messenger_icon'/>,
    //         url: 'Viber'
    //     },
    //     {
    //         icon: <BsWhatsapp className='messenger_icon'/>,
    //         url: 'Whatsapp'
    //     },
    //     {
    //         icon: <SiMaildotru className='messenger_icon'/>,
    //         url: 'Mail'
    //     },
    // ]);
    return (
        <div className='contact_form_phone_input_messengers_wrap'>
        {/* {messengersArray.map((item, idx) => (
            <VisibleContactIcon item={item} setChoseMassanger={setChoseMassanger} choseMassanger={choseMassanger} key={item.url}/>
        ))} */}
        <BsFillTelephoneFill className='messenger_icon'/>
        <BiLogoTelegram className='messenger_icon'/>
        <SiViber className='messenger_icon'/>
        <BsWhatsapp className='messenger_icon'/>
        <SiMaildotru className='messenger_icon'/>
    </div>
    );
};

export default MessengerIcons;
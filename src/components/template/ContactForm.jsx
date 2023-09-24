import React, {useState} from 'react';
import '../../style/contactForm.scss';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {BiLogoTelegram} from 'react-icons/bi';
import {SiViber} from 'react-icons/si';
import {BsWhatsapp} from 'react-icons/bs';
import {SiMaildotru} from 'react-icons/si';
import VisibleContactIcon from './VisibleContactIcon';
import { BASE_URL } from '../../http/baseUrl';
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [numberOrMail, setNumberOrMail] = useState('');
    const [choseMassanger, setChoseMassanger] = useState('');
    // const [messengersArray] = useState([
    //   {
    //     icon: "./social/phone.png",
    //     url: "Telephone",
    //   },
    //   {
    //     icon: "./social/telegram.png",
    //     url: "Telegram",
    //   },
    //   {
    //     icon: "./social/viber.png",
    //     url: "Viber",
    //   },
    //   {
    //     icon: "./social/whatsapp.png",
    //     url: "Whatsapp",
    //   },
    //   {
    //     icon: "./social/mail.png",
    //     url: "Mail",
    //   },
    // ]);
    const [messengersArray] = useState([
        {
            icon: <BsFillTelephoneFill className='messenger_icon'/>,
            url: 'Telephone'
        },
        {
            icon: <BiLogoTelegram className='messenger_icon'/>,
            url: 'Telegram'
        },
        {
            icon: <SiViber className='messenger_icon'/>,
            url: 'Viber'
        },
        {
            icon: <BsWhatsapp className='messenger_icon'/>,
            url: 'Whatsapp'
        },
        {
            icon: <SiMaildotru className='messenger_icon'/>,
            url: 'Mail'
        },
    ]);

    const sendData = () => {
        axios.post(`${BASE_URL}/send-message`, {
                name,
                numberOrMail,
                choseMassanger
        })
        .then(() => window.location.reload())
        .catch((error) => {
            console.log('Request error',error);
        })
    }

    console.log('choseMassanger',choseMassanger);
    // Problem
    return (
        <div className='contact_form_block'>
            <div className='contact_form_main_url_wrap'>
                <p className='contact_form_main_url'>Заповніть форму і я зв'яжусь з Вами для обговорення вартості та термінів створення сайту протягом 1 години</p>
            </div>
            <div className='contact_form_name_input_wrap'>
                <p className='contact_form_name_input_url'>Як Вас звати?</p>
                <input className='contact_form_input' onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='contact_form_phone_input_wrap'>
                <p className='contact_form_phone_input_url'>Як з Вами зв'язатись?</p>
                <div className='contact_form_phone_input_messengers_wrap'>
                    {messengersArray.map((item) => (
                        <VisibleContactIcon item={item} url={item.url} icon={item.icon} setChoseMassanger={setChoseMassanger} choseMassanger={choseMassanger} key={item.url}/>
                    ))}
                </div>
                <input className='contact_form_input' onChange={(e) => setNumberOrMail(e.target.value)}/>
                <p className='contact_form_phone_input_example'>Номер телефону або пошта</p>
            </div>
            <div className='contact_form_button_wrap'>
                <button className='contact_form_button' onClick={sendData}>Обговорити проект</button>
            </div>
        </div>
    );
};

export default ContactForm;


// {
//     icon: './social/phone.png',
//     url: 'Telephone'
// },
// {
//     icon: './social/telegram.png',
//     url: 'Telegram'
// },
// {
//     icon: './social/viber.png',
//     url: 'Viber'
// },
// {
//     icon: './social/whatsapp.png',
//     url: 'Whatsapp'
// },
// {
//     icon: './social/mail.png',
//     url: 'Mail'
// },
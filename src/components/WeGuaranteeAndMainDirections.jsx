import React,{useState} from 'react';
import '../style/weGuaranteeAndMainDirections.scss';
import GuaranteAndDirectionsTemplate from './template/GuaranteAndDirectionsTemplate';
import TitleTemplate from './template/TitleTemplate';
import {AiOutlineDownSquare} from 'react-icons/ai';
import {BiSupport} from 'react-icons/bi';
import {BsFillDpadFill} from 'react-icons/bs';
import { MdDashboardCustomize } from 'react-icons/md';
import { TbDeviceDesktopCode } from 'react-icons/tb';
const WeGuaranteeAndMainDirections = () => {
    const [guaranteArray] = useState([
        {
            icon: <AiOutlineDownSquare className='guarante_directions_icon'/>,
            text: 'Виконання поставленої задачі'
        },
        {
            icon: <BiSupport className='guarante_directions_icon'/>,
            text: 'Підтримку вашого сайту 14 днів'
        },
        {
            icon: <BsFillDpadFill className='guarante_directions_icon'/>,
            text: 'Повний інструктаж в користуванні'
        },
    ]);
    const [directionsArray] = useState([
        {
            icon: <MdDashboardCustomize className='guarante_directions_icon'/>,
            text: 'Дизайн сайтів'
        },
        {
            icon: <TbDeviceDesktopCode className='guarante_directions_icon'/>,
            text: 'Створення сайтів'
        },
        {
            icon: <BiSupport className='guarante_directions_icon'/>,
            text: 'Підтримка сайтів'
        },
    ]);

    // Problem
    return (
        <div className='guarante_directions_wrap'>
            <div className='guarante_wrap'>
                <TitleTemplate text={'Ми гарантуємо'}/>
                <div className='guarante_item_wrap'>
                    {guaranteArray.map((item,idx) => (
                        <GuaranteAndDirectionsTemplate item={item} key={idx}/>
                    ))}
                </div>
            </div>
            <div className='guarante_wrap'>
            <TitleTemplate text={'Основні напрямки'}/>
                <div className='guarante_item_wrap'>
                {directionsArray.map((item,idx) => (
                        <GuaranteAndDirectionsTemplate item={item} key={idx}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WeGuaranteeAndMainDirections;
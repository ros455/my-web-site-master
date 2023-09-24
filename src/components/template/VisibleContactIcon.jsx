import React from 'react';

const VisibleContactIcon = ({setChoseMassanger, choseMassanger, url, icon}) => {
    return (
        <div
        onClick={() => setChoseMassanger(url)} 
        className={url == choseMassanger ? 'active_icon' : ''}
        >
        {/* <img src={icon}/> */}
        {icon}
        </div>
    );
};

export default VisibleContactIcon;
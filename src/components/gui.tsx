import React from 'react';
import activity from '../icons/activity.svg';
import immagine from '../images/Blucy_back.png';

export const Gui = () => {
    return <div style={{ backgroundColor: 'blue' }}>Gui
        <img src={activity} alt="activity" />
        <img style={{ width: '10vw', height: '10vh' }} src={immagine} alt="immagine" />
    </div>;

};
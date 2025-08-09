import React from "react";
import star from '../assets/fiveStar.png';
// import girl from '../assets/cuteGirl.png';

export const Rating = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: '50px', paddingBottom: '50px'}}>
      <img src={star} alt="fiveStar" style={{ width: 120, height: 'auto' }} />
      <p>
        "Xtianah has transformed my banking experience. The app is <br />
        user-friendly and visually stunning!"
      </p>
        {/*<img src={girl} alt="cuteGirl" style={{ width: 10, height: 'auto' }} />*/}
    </div>
  );
};
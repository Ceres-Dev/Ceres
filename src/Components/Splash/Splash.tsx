import React from 'react';
import './Splash.css';

import ValenceLogo from '../../assets/icons/logo.png';

interface SplashProps {
  splashText: string;
}

function Splash({ splashText }: SplashProps) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#131418]/70 backdrop-blur-lg">
      <img src={ValenceLogo} alt="" className="w-32 h-32" />
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
      <span className="text-xl PoppinsNL text-white">{splashText}</span>
    </div>
  );
}

export default Splash;

import React, { useState, useEffect } from 'react';
import './Titlebar.css';

import ValenceLogo from '../../assets/icons/logo.png';
import CloseIcon from '../../assets/icons/Close.png';
import MaxIcon from '../../assets/icons/Max.png';
import MaxedIcon from '../../assets/icons/Maxed.png';
import MinIcon from '../../assets/icons/Min.png';

function Titlebar() {
  const [maxIcon, setMaxIcon] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    setMaxIcon(MaxIcon);
  }, []);

  const maxWin = () => {
    if (isMaximized) {
      setIsMaximized(false);
      setMaxIcon(MaxIcon);
    } else {
      setIsMaximized(true);
      setMaxIcon(MaxedIcon);
    }
    window.api.maxWin();
  };

  return (
    <div className="flex h-[32px] w-[calc(100%-2px)] draggable bg-[var(--bgPrimary)] relative  border-b-[var(--bgPrimaryBorder)]">
      <img src={ValenceLogo} alt="" className="ml-2 h-5 mt-auto mb-auto" />
      <span className="PoppinsNL absolute title">Valence</span>
      <div className="flex w-auto h-full ml-auto">
        <button
          className="w-[46px] h-[32px] flex items-center justify-center hover:bg-white/10 active:bg-white/20"
          onClick={() => window.api.minWin()}
        >
          <img src={MinIcon} alt="" />
        </button>
        <button
          className="w-[46px] h-[32px] flex items-center justify-center hover:bg-white/10 active:bg-white/20"
          onClick={() => maxWin()}
        >
          <img src={maxIcon} alt="" />
        </button>
        <button
          className="w-[46px] h-[32px] flex items-center justify-center hover:bg-[#E81123] active:bg-[#F1707A]"
          onClick={() => window.api.closeWin()}
        >
          <img src={CloseIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Titlebar;

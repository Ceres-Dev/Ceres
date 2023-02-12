import React from 'react';
import CloseTabIcon from '../../../../assets/icons/close.svg';
import AddTabIcon from '../../../../assets/icons/plus.svg';

function TabBar() {
  return (
    <div className="w-full h-full flex items-center">
      <div className="w-full h-full py-1 pl-1 flex items-center">
        <div className="Tab w-44 h-full bg-blue-400/10 rounded-[3px] flex items-center pl-3 border border-[var(--Border1)]">
          <span className="text-sm PoppinsNL">App.tsx</span>
          <button className="w-6 h-6 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center ml-auto mr-1">
            <img src={CloseTabIcon} alt="" className="WhiteIcon w-[14px] h-[14px]" />
          </button>
        </div>
        <div className="Tab w-44 h-full hover:bg-blue-400/10 rounded-[3px] flex items-center ml-1 pl-3 border border-[var(--Border1)] transition-colors">
          <span className="text-sm PoppinsNL">Navbar.tsx</span>
          <button className="w-6 h-6 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center ml-auto mr-1">
            <img src={CloseTabIcon} alt="" className="WhiteIcon w-[14px] h-[14px]" />
          </button>
        </div>
        <div className="Tab w-44 h-full hover:bg-blue-400/10 rounded-[3px] flex items-center ml-1 pl-3 border border-[var(--Border1)] transition-colors">
          <span className="text-sm PoppinsNL">Sidebar.tsx</span>
          <button className="w-6 h-6 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center ml-auto mr-1">
            <img src={CloseTabIcon} alt="" className="WhiteIcon w-[14px] h-[14px]" />
          </button>
        </div>
        <button className="w-8 h-8 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center ml-2 mr-2">
          <img src={AddTabIcon} alt="" className="WhiteIcon w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default TabBar;

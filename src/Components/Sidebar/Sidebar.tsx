import React, { useState } from 'react';
import './Sidebar.css';

import RightChevron from '../../assets/icons/rightChevron.svg';

function Sidebar() {
  const [sbOpened, setSbOpened] = useState(true);

  const sbBtnIconMr = () => (sbOpened ? 'rotate-180' : '');
  const toggleSB = () => {
    const root = document.getElementById('root');
    const sb = document.getElementById('Sidebar');
    if (sbOpened) {
      setSbOpened(false);
      root?.style.setProperty('--SidebarM', '0px');
      root?.style.setProperty('--SidebarB', '0px');
      root?.style.setProperty('--SidebarOBTN', 'transparent');
      root?.style.setProperty('--SidebarWidth', '0px');
      root?.style.setProperty('--SidebarDisplay', 'none');
      sb?.classList.toggle('SidebarHidden');
    } else {
      setSbOpened(true);
      root?.style.setProperty('--SidebarM', '8px');
      root?.style.setProperty('--SidebarB', '1px');
      root?.style.setProperty('--SidebarOBTN', 'var(--Sidebar)');
      root?.style.setProperty('--SidebarWidth', '300px');
      root?.style.setProperty('--SidebarDisplay', 'flex');
      sb?.classList.toggle('SidebarHidden');
    }
  };

  return (
    <div
      className=" w-[var(--SidebarWidth)] h-full flex flex-col rounded-xl mr-[var(--SidebarM)] bg-[var(--Sidebar)] flex-shrink-0 relative z-50 Sidebar"
      id="Sidebar"
    >
      <button
        className="h-14 w-7 bg-[var(--SidebarOBTN)] overflow-hidden flex items-center justify-end absolute sbCollapseBtn "
        onClick={() => toggleSB()}
      >
        <img src={RightChevron} alt="" className={`w-5 h-5 mr-2 ${sbBtnIconMr()}`} />
      </button>
      <span className="PoppinsNL text-lg w-full h-10 mt-2 flex items-center justify-center whitespace-nowrap">
        Folder Explorer
      </span>
    </div>
  );
}

export default Sidebar;

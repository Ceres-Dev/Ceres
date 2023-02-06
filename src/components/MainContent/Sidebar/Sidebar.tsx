/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import './Sidebar.css';

import OpenCloseSBIcon from '../../../assets/icons/openCloseSB.svg';

function Sidebar() {
  const [sbOpened, setSbOpened] = useState(true);

  const sbWidth = () => (sbOpened ? 'w-72' : 'w-0');
  const sbBtnIconMr = () => (sbOpened ? 'rotate-180' : '');

  const openCloseSb = () => {
    if (sbOpened) {
      setSbOpened(false);
    } else {
      setSbOpened(true);
    }
  };

  const SidebarDiv = document.getElementById('SidebarDiv');
  const SidebarContextMenu = document.getElementById('SidebarContextMenu')!;
  useEffect(() => {
    SidebarDiv?.addEventListener('contextmenu', (event) => {
      console.log('right clikced');
      event.preventDefault();

      const { clientX: mouseX, clientY: mouseY } = event;

      SidebarContextMenu.style.top = `${mouseY}px`;
      SidebarContextMenu.style.left = `${mouseX}px`;
      SidebarContextMenu.classList.add('visible');
    });
  }, []);

  return (
    <div
      className={`h-full w-72 relative bg-[var(--bgPrimary)] ${sbWidth()} transition-all border-r border-r-[var(--bgPrimaryBorder)] Sidebar flex flex-col flex-shrink-0 z-50`}
      id="SidebarDiv"
    >
      <button
        className="h-14 w-7 bg-[var(--bgPrimary)] overflow-hidden flex items-center justify-end absolute sbCollapseBtn "
        onClick={() => openCloseSb()}
      >
        <img src={OpenCloseSBIcon} alt="" className={`w-5 h-5 mr-2 ${sbBtnIconMr()}`} />
      </button>
      <div
        className="w-56 h-72 rounded-lg bg-[var(--bgSecondary)] absolute hidden SidebarContextMenu"
        id="SidebarContextMenu"
      >
        <button className="w-full h-14 bg-blue-600 text-white" onClick={() => console.log('cliked')}>
          Click me
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

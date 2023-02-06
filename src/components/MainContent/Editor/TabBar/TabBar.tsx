import React from 'react';
import Tab from './Tab/Tab';
import './TabBar.css';

import PlusIcon from '../../../../assets/icons/plus.svg';

function TabBar() {
  return (
    <div className="w-full h-10 border-b border-b-[var(--bgPrimaryBorder)] bg-[var(--bgPrimary)] flex items-center overflow-x-auto TabBar flex-shrink-0">
      <Tab name="Untitled.tsx" isSelected />
      <Tab name="Untitled.tsx" isSelected={false} />
      <Tab name="Untitled.tsx" isSelected={false} />
      <Tab name="Untitled.tsx" isSelected={false} />
      <button className="w-7 h-7 rounded-full AddTabBtn ml-3 flex-shrink-0  mr-4 hover:bg-white/10 transition-colors flex items-center justify-center">
        <img src={PlusIcon} className="AddTabIcon w-4 h-5" alt="" />
      </button>
    </div>
  );
}

export default TabBar;

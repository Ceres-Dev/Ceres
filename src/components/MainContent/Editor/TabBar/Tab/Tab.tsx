import React from 'react';
import './Tab.css';

import CloseIcon from '../../../../../assets/icons/close.svg';

interface TabProps {
  name: string;
  isSelected: boolean;
}

function Tab({ name, isSelected }: TabProps) {
  const highlightTab = () => {
    if (isSelected) {
      console.log('TabSelected');
      return 'border-t-[3px] border-t-[var(--accent)] ';
    }
    console.log('not selected');
    return 'border-t-[3px] border-t-transparent';
  };

  return (
    <div
      className={`w-52 h-full bg-[var(--bgSecondary)] flex items-center pl-2 border-l  border-l-[var(--bgPrimaryBorder)] Tab ${highlightTab()} transition-colors flex-shrink-0`}
    >
      <span className="text-sm PoppinsMD">{name}</span>
      <button className="w-4 h-4 rounded-full flex flex-col items-center justify-center overflow-hidden ml-auto mr-3 TabCloseBtn">
        <img src={CloseIcon} alt="" className="w-full h-full" />
      </button>
    </div>
  );
}

export default Tab;

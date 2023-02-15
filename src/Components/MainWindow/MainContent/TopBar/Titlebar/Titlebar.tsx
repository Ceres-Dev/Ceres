/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';

function Titlebar() {
  const [isMaxed, setIsMaxed] = useState(false);
  const [maxTitle, setMaxTitle] = useState('Maximize');

  useEffect(() => setIsMaxed(false), []);

  const maxWin = () => {
    if (isMaxed) {
      setMaxTitle('Restore');
    } else {
      setMaxTitle('Maximize');
    }
    window.api.maxWin();
  };

  return (
    <div className="w-auto h-full flex items-center ml-auto mr-3 flex-shrink-0 Tbtns">
      <button
        className="MaxBtn w-[14px] h-[14px] rounded-full bg-[#36C84B] mr-2 outline-none flex items-center justify-center"
        title={maxTitle}
        onClick={() => {
          maxWin();
        }}
      />
      <button
        className="w-[14px] h-[14px] rounded-full bg-[#FDBC40] mr-2 outline-none flex items-center justify-center"
        title="Minimize"
        onClick={() => window.api.minWin()}
      />
      <button
        className="w-[14px] h-[14px] rounded-full bg-[#FC5753] outline-none flex items-center justify-center"
        title="Close"
        onClick={() => window.api.closeWin()}
      />
    </div>
  );
}

export default Titlebar;

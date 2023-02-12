import React from 'react';

function StatusBar() {
  return (
    <div className="w-full h-8  bg-[var(--StatusBar)] rounded-lg flex py-[2px] pr-4 overflow-hidden items-center justify-end border border-[var(--Border1)]">
      <span className="w-auto h-full px-2 flex items-center justify-center PoppinsNL text-sm hover:bg-white/10 mr-2 rounded-sm transition-colors">
        CRLF
      </span>
      <span className="w-auto h-full px-2 flex items-center justify-center PoppinsNL text-sm hover:bg-white/10 mr-2 rounded-sm transition-colors">
        UTF-8
      </span>
      <span className="w-auto h-full px-2 flex items-center justify-center PoppinsNL text-sm hover:bg-white/10 mr-2 rounded-sm transition-colors">
        TypeScript
      </span>
    </div>
  );
}

export default StatusBar;

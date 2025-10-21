import React from "react";

const CopyRight = () => {
  return (
    <div className="bg-primary flex items-center justify-between Container py-3 border-t border-white/10">
      <p className="sm:text-sm text-[10px] text-white/85">
        © 2025 zarganz store. All rights reserved.
      </p>
      <p className="sm:text-sm text-[10px] text-white/85">
        Develop by <span className="cursor-pointer hover:text-[#AC0000] duration-300">Titasweb</span>
      </p>
    </div>
  );
};

export default CopyRight;

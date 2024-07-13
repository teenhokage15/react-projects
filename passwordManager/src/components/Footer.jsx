import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full fixed bottom-0 text-white justify-center flex-col text-center bg-slate-800">
      <div className="">
        <div className="logo font-bold text-2xl">
          <span className="text-purple-400">&lt;</span>
          Pass
          <span className="text-purple-400">OP/&gt;</span>
        </div>
      </div>
      <div>
        <p>Made with ❤️ by @PrathamKhatri</p>
      </div>
    </div>
  );
};

export default Footer;

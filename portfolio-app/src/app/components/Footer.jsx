import React from "react";
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image
          src="/Images/kernel_panic.png"
          width={70} 
          height={70} 
          alt="Логотип"
          className='rounded-full'
        />
        <p className="text-slate-600">Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;
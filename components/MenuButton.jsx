import React from "react";

const MenuButton = ({ title, icon, link, isActive }) => {
  return (
    <a
      href={link}
      className={`w-64 h-16 px-6 py-5 ${
        isActive ? "bg-stone-900" : "bg-black hover:bg-stone-600"
      } transition-all rounded-lg justify-start items-center gap-3.5 inline-flex`}
    >
      <img src={icon} alt="" />
      <div className="text-white text-lg font-semibold leading-loose">
        {title}
      </div>
    </a>
  );
};

export default MenuButton;

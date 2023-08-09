import React from "react";

const Button = (props) => {
  return (
    <button
      {...props}
      className="w-52 h-16 px-6 py-3.5 active:bg-stone-400 transition-all bg-stone-900 rounded-3xl justify-center items-center gap-2 inline-flex"
    >
      <div className="text-white text-2xl font-semibold leading-loose">
        {props.children}
      </div>
    </button>
  );
};

export default Button;

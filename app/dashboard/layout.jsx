import Brand from "@/components/Brand";
import Button from "@/components/Button";
import MenuButton from "@/components/MenuButton";
import Search from "@/components/Search";
import React from "react";

const Layout = ({ children }) => {
  return (
    <section className="flex text-white bg-gradient-to-r from-[#090116] via-75% via-[#1B1105] to-[#11040D]">
      <aside className="bg-black text-white w-72 h-screen flex flex-col items-center pt-16 p-3 gap-y-12">
        <Brand />
        <div className="flex flex-col">
          <MenuButton
            isActive
            title={"Home"}
            icon={"HouseDoorFill.svg"}
            link={"/dashboard"}
          />
          <MenuButton title={"Explore"} icon={"Compass.svg"} link={"#"} />
          <MenuButton
            title={"Library"}
            icon={"FileEarmarkMusic.svg"}
            link={"/dashboard"}
          />
          <MenuButton
            title={"Upgrade"}
            icon={"Youtube.svg"}
            link={"/dashboard"}
          />
        </div>
        <Button>+ Playlist</Button>
      </aside>
      <div className="mx-24 w-screen">
        <nav className="pt-14 p-2.5 flex justify-between items-center">
          <Search />
          <div className="px-4 flex gap-6">
            <img src="Tv.svg" alt="" />
            <img src="Account Profile Skeleton.svg" alt="" />
          </div>
        </nav>
        {children}
      </div>
    </section>
  );
};

export default Layout;

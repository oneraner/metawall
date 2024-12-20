import React, { useState } from "react";
import { User } from "../user/User";
import user1 from "../../../public/image/user.png";

interface HeaderProps {
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Header = ({ className }: HeaderProps) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <header
      className={`w-full bg-white border-b-[3px] border-b-solid border-b-header-border flex justify-center ${className}`}
    >
      <div className="max-w-[1200px] w-full flex justify-between py-3">
        <p className="text-2xl text-dark font-paytone font-black leading-1.4">
          MetaWall
        </p>
        <button
          className="relative"
          onFocus={() => setDropDown(true)}
          onMouseOver={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}
        >
          <User userName="Member" src={user1} bottomLine />
          <div
            className={`${
              !dropDown && "invisible"
            } absolute -bottom-32 left-0 w-[178px] border-2 border-solid border-dark bg-white z-10`}
          >
            <p className="py-2 border-b-2 border-b-solid border-b-dark text-center hover:bg-c-bg">
              我的貼文牆
            </p>
            <p className="py-2 border-b-2 border-b-solid border-b-dark text-center hover:bg-c-bg">
              修改個人資料
            </p>
            <p className="py-2 text-center hover:bg-c-bg">登出</p>
          </div>
          <div
            className={`${
              !dropDown && "invisible"
            } absolute -bottom-[132px] left-1 w-[178px] h-32 border-2 border-solid border-dark bg-white`}
          ></div>
        </button>
      </div>
    </header>
  );
};

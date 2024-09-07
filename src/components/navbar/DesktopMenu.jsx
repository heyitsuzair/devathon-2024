import React, { useContext, useEffect, useState } from "react";
import { TextLg, TextXl } from "../text";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Flex } from "../flex";
import { AuthContext } from "@/context";
import { constants } from "@/config";

const MenuItem = ({ menuItem }) => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={
        menuItem?.subMenu?.length > 0 ? handleMouseEnter : undefined
      }
      onMouseLeave={
        menuItem?.subMenu?.length > 0 ? handleMouseLeave : undefined
      }
    >
      <Link
        key={menuItem.route}
        href={menuItem.route}
        className="relative flex items-center"
      >
        <Flex>
          <TextXl
            text={menuItem.text}
            classes={`font-semibold transition-all hover:text-theme-500 ${
              pathname === menuItem.route ? "text-theme-500" : ""
            }`}
          />

          {menuItem?.subMenu?.length > 0 && (
            <FontAwesomeIcon color="black" icon={faChevronDown} />
          )}
        </Flex>
      </Link>

      {menuItem?.subMenu?.length > 0 && (
        <div
          className={`bg-white p-3 absolute shadow-xl border rounded top-full left-1/2 transform -translate-x-1/2 w-[220%] ${
            isDropdownOpen
              ? "visible opacity-100 translate-y-0"
              : "invisible opacity-0 translate-y-4"
          } transition-all duration-500`}
        >
          {menuItem.subMenu.map((item, i) => (
            <Link
              key={i}
              href={item.route}
              onClick={() => setIsDropdownOpen(false)}
            >
              <TextLg
                text={item.text}
                classes={`font-semibold transition-all hover:text-theme-500 m-2 pb-2 border-b border-gray-100`}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const DesktopMenu = ({ menu }) => {
  return (
    <div className="hidden lg:flex items-center justify-center gap-5">
      {menu.map((menuItem, i) => (
        <MenuItem key={i} menuItem={menuItem} />
      ))}
    </div>
  );
};

export default DesktopMenu;

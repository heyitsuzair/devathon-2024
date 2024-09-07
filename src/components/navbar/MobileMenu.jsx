import React, { useContext, useEffect, useState } from "react";
import { TextXl } from "../text";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faHamburger,
  faHammer,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../logo";
import Flex from "../flex/Flex";
import { ButtonPlain } from "../buttons";
import { AuthContext } from "@/context";
import { constants, routes } from "@/config";

const MenuItem = ({ menuItem, setIsSidebarOpen }) => {
  const pathname = usePathname();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <Flex
        justify="justify-start"
        classes="border-b border-gray-200 pb-2 w-full"
        gap="gap-2"
      >
        <Link
          key={menuItem.route}
          href={menuItem.route}
          onClick={() => setIsSidebarOpen(false)}
        >
          <TextXl
            text={menuItem.text}
            classes={`text-start font-semibold transition-all hover:text-theme-500 ${
              pathname === menuItem.route ? "text-theme-500" : ""
            }`}
          />
        </Link>
        {menuItem?.subMenu?.length > 0 && (
          <FontAwesomeIcon
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            color="black"
            icon={faChevronDown}
          />
        )}
      </Flex>
      {menuItem?.subMenu?.length > 0 && (
        <div
          className={`${
            isDropdownOpen ? "max-h-96 visible" : "max-h-0 invisible"
          } duration-500 transition-all ml-4 overflow-hidden`}
        >
          {menuItem?.subMenu?.map((menuItem) => (
            <Link
              key={menuItem.route}
              href={menuItem.route}
              onClick={() => setIsSidebarOpen(false)}
            >
              <Flex justify="justify-start" classes="mb-4">
                <div className="bg-theme-500 w-2 h-2 rounded-full"></div>{" "}
                <TextXl
                  text={menuItem.text}
                  classes={`text-start font-semibold transition-all hover:text-theme-500`}
                />
              </Flex>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

const MobileMenu = ({
  setIsLoginModalOpen = null,
  setIsSignupModalOpen = null,
  menu,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const router = useRouter();

  const { isLoggedIn, logoutUser, getLoggedInRole } = useContext(AuthContext);

  const handleLogout = async () => {
    await logoutUser();
    setIsSidebarOpen(false);
  };

  const handleClickDashboard = () => {
    const role = getLoggedInRole();

    if (role === constants.ROLES.STUDENT) {
      router.push(routes.dashboard.student.index);
    }
    if (role === constants.ROLES.INSTRUCTOR) {
      router.push(routes.dashboard.instructor.courses.index);
    }
    setIsSidebarOpen(false);
  };

  return (
    <>
      <div className="lg:hidden text-right mr-6">
        <FontAwesomeIcon
          icon={faBars}
          fontSize={20}
          className="border p-3 border-black rounded cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        />
        <div
          className={`${
            isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } transition-all bg-black bg-opacity-50 absolute left-0 top-0 h-screen w-full`}
          onClick={() => setIsSidebarOpen(false)}
        >
          <div
            className={`${
              isSidebarOpen ? "translate-x-0" : "-translate-x-96"
            } bg-white transition-all duration-500 h-full w-2/3 trans`}
            onClick={(e) => e.stopPropagation()}
          >
            <Flex justify="justify-between">
              <Logo
                width={100}
                height={100}
                classes="rounded-full size-20 m-4"
              />
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => setIsSidebarOpen(false)}
                className="m-4"
                fontSize={23}
              />
            </Flex>

            <Flex
              flexDirection="flex-col"
              classes="px-4"
              alignItems="items-start"
            >
              {menu.map((menuItem, i) => {
                return (
                  <MenuItem
                    key={i}
                    menuItem={menuItem}
                    setIsSidebarOpen={setIsSidebarOpen}
                  />
                );
              })}
            </Flex>

            <Flex justify="justify-start" classes="m-4">
              {isLoggedIn() ? (
                <>
                  <ButtonPlain
                    text="Dashboard"
                    hover="transition-all hover:bg-theme-700"
                    isRounded
                    width="w-36"
                    onClick={handleClickDashboard}
                  />
                  <ButtonPlain
                    text="Logout"
                    color="bg-transparent"
                    isRounded
                    width="w-24"
                    classes="border-2"
                    colorText="text-black"
                    onClick={handleLogout}
                  />
                </>
              ) : (
                <>
                  {isLoggedIn() === null ? (
                    <div className="animate-pulse bg-gray-200 rounded-full h-10 w-48"></div>
                  ) : (
                    <>
                      <ButtonPlain
                        text="Login"
                        hover="transition-all hover:bg-theme-700"
                        isRounded
                        width="w-24"
                        onClick={() => setIsLoginModalOpen(true)}
                      />
                      <ButtonPlain
                        text="Register"
                        color="bg-transparent"
                        isRounded
                        width="w-24"
                        classes="border-2"
                        colorText="text-black"
                        onClick={() => setIsSignupModalOpen(true)}
                      />
                    </>
                  )}
                </>
              )}
            </Flex>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;

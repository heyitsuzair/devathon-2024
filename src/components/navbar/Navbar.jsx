"use client";

import { constants, images, menu, routes } from "@/config";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { ButtonPlain } from "../buttons";
import { Modal } from "../modal";
import { TabsUnderlined } from "../tabs";
import StudentLogin from "./StudentLogin";
import InstructorLogin from "./InstructorLogin";
import StudentSignup from "./StudentSignup";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Logo from "../logo";
import { Text3Xl } from "../text";
import Flex from "../flex/Flex";
import InstructorSignup from "./InstructorSignup";
import { AuthContext, CategoriesContext } from "@/context";
import { DataTransformer } from "@/utils";
import { useRouter } from "next/navigation";
import MFAModal from "./MFAModal";

const Navbar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [loginTabActive, setLoginTabActive] = useState(0);
  const [signupTabActive, setSignupTabActive] = useState(0);
  const [isMFAModalOpen, setIsMFAModalOpen] = useState(false);

  const loginModalTabs = ["Student", "Instructor"];
  const signupModalTabs = ["Student", "Instructor"];

  const tabsContent = {
    login: [
      <StudentLogin
        setIsLoginModalOpen={setIsLoginModalOpen}
        setIsSignupModalOpen={setIsSignupModalOpen}
        key={0}
      />,
      <InstructorLogin
        setIsLoginModalOpen={setIsLoginModalOpen}
        setIsSignupModalOpen={setIsSignupModalOpen}
        setIsMFAModalOpen={setIsMFAModalOpen}
        key={1}
      />,
    ],
    signup: [
      <StudentSignup
        setIsLoginModalOpen={setIsLoginModalOpen}
        setIsSignupModalOpen={setIsSignupModalOpen}
        key={0}
      />,
      <InstructorSignup
        setIsLoginModalOpen={setIsLoginModalOpen}
        setIsSignupModalOpen={setIsSignupModalOpen}
        key={0}
      />,
    ],
    mfa: [<MFAModal key={0} setIsMFAModalOpen={setIsMFAModalOpen} />],
  };

  const { isLoggedIn, logoutUser, getLoggedInRole } = useContext(AuthContext);

  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser();
  };

  const handleClickDashboard = () => {
    const role = getLoggedInRole();

    if (role === constants.ROLES.STUDENT) {
      router.push(routes.dashboard.student.index);
    }
    if (role === constants.ROLES.INSTRUCTOR) {
      router.push(routes.dashboard.instructor.courses.index);
    }
  };

  return (
    <>
      <Modal isOpen={isLoginModalOpen} onClose={setIsLoginModalOpen}>
        <TabsUnderlined
          tabs={loginModalTabs}
          onTabClick={setLoginTabActive}
          activeTab={loginTabActive}
        />

        <div className="my-4">{tabsContent.login[loginTabActive]}</div>
      </Modal>
      <Modal isOpen={isSignupModalOpen} onClose={setIsSignupModalOpen}>
        <TabsUnderlined
          tabs={signupModalTabs}
          onTabClick={setSignupTabActive}
          activeTab={signupTabActive}
        />

        <div className="my-4">{tabsContent.signup[signupTabActive]}</div>
      </Modal>
      <Modal isOpen={isMFAModalOpen} onClose={setIsMFAModalOpen}>
        <MFAModal />
      </Modal>
      <header className="sticky top-0 shadow lg:px-4 bg-white z-[9] h-auto">
        <div className="grid grid-cols-12 justify-between items-center p-8">
          <div className="col-span-10 lg:col-span-4">
            <Link href={routes.home}>
              <Flex gap="gap-0" justify="justify-start">
                <Logo classes="rounded-full size-32" />
              </Flex>
            </Link>
          </div>
          <div className="col-span-2 lg:col-span-4">
            <DesktopMenu menu={menu} />
            <MobileMenu
              setIsLoginModalOpen={setIsLoginModalOpen}
              setIsSignupModalOpen={setIsSignupModalOpen}
              menu={menu}
            />
          </div>
          <div className="col-span-0 hidden lg:flex lg:col-span-4 gap-2 items-center justify-end">
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
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

"use client";

import { ButtonIconned, ButtonPlain, Flex, TextMd, TextSm } from "@/components";
import { constants } from "@/config";
import { AuthContext } from "@/context";
import { useToast } from "@/hooks";
import { copyToClipboard } from "@/utils";
import {
  faBaby,
  faBook,
  faFile,
  faLink,
  faMessage,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";

const BuyTest = () => {
  const { showSuccessMessage, showErrorMessage } = useToast();
  const { user, getLoggedInRole } = useContext(AuthContext);

  const [isCheckingAuth, setIsCheckingAuth] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);

  const handleShare = () => {
    copyToClipboard(window.location.href);
    showSuccessMessage(constants.SUCCESS.LINK_COPIED);
  };
  const handleBuy = () => {
    setIsCheckingAuth(true);
    if (!user) {
      document.getElementById(constants.IDS.LOGIN_BUTTON).click();
      setIsCheckingAuth(false);
    } else if (getLoggedInRole() !== constants.ROLES.STUDENT) {
      showErrorMessage(constants.ERROR.INSTRUCTORS_CANT_BUY_COURSE);
      setIsCheckingAuth(false);
    } else {
      setIsBuyModalOpen(true);
      setIsCheckingAuth(false);
    }
  };

  return (
    <>
      <div className="col-span-12 xl:col-span-3 sticky top-[calc(var(--navbar-height)+1rem)]">
        <div className="bg-white border shadow rounded-xl p-5">
          <ButtonPlain
            text={`Buy Test For Rs 100`}
            width="w-full"
            onClick={handleBuy}
            borderRadius="rounded-lg"
            classes="mb-3"
            colorText="text-white font-bold"
            isLoading={isCheckingAuth}
            // isDisabled={isCourseBuyAble(course)}
          />

          <ButtonIconned
            text="Share This Test"
            icon={faLink}
            width="w-full"
            onClick={handleShare}
            borderRadius="rounded-lg"
            classes="mb-3"
            color="bg-gray-100 hover:bg-gray-200"
            colorText="text-black"
          />
          <ButtonIconned
            text="Chat With Instructor"
            icon={faMessage}
            width="w-full"
            onClick={handleShare}
            borderRadius="rounded-lg"
            classes="mb-3"
            color="bg-blue-500 hover:bg-blue-700"
            colorText="text-white"
            iconColor="text-white"
          />
          <Flex
            flexDirection="flex-col"
            classes="mt-4"
            alignItems="items-start"
          >
            <Flex justify="justify-start">
              <Flex classes="bg-theme-500 w-8 h-8 rounded">
                <FontAwesomeIcon icon={faUserAlt} color="white" />
              </Flex>
              <TextMd text={`10 Students Attempted`} />
            </Flex>
            <Flex justify="justify-start">
              <Flex classes="bg-theme-500 w-8 h-8 rounded">
                <FontAwesomeIcon icon={faBook} color="white" />
              </Flex>
              <TextMd text={`NTS`} />
            </Flex>
            <Flex justify="justify-start">
              <Flex classes="bg-theme-500 w-8 h-8 rounded">
                <FontAwesomeIcon icon={faBaby} color="white" />
              </Flex>
              <TextMd text={`4 Years`} />
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  );
};

export default BuyTest;

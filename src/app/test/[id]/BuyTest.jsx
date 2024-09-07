"use client";

import { buyTest } from "@/actions";
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
import { useParams } from "next/navigation";
import React, { useContext, useState } from "react";

const BuyTest = () => {
  const { showSuccessMessage, showErrorMessage } = useToast();
  const { user, getLoggedInRole, isLoggedIn } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState();

  const { id } = useParams();

  const handleShare = () => {
    copyToClipboard(window.location.href);
    showSuccessMessage(constants.SUCCESS.LINK_COPIED);
  };
  const handleBuy = async () => {
    if (getLoggedInRole() === constants.ROLES.STUDENT) {
      setIsLoading(true);
      const { success, data } = await buyTest(id);
      setIsLoading(false);

      if (success) {
        window.open(data, "_self");
      }
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
            isLoading={isLoading}
            // isDisabled={isCourseBuyAble(course)}
            isDisabled={!isLoggedIn()}
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

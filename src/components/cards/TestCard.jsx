import { routes } from "@/config";
import Image from "next/image";
import React from "react";
import { Text2Xl, TextLg, TextSm } from "../text";
import { Flex } from "../flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { ButtonOutlined } from "../buttons";
import Link from "next/link";
import StarRating from "../StarRating/StarRating";

const TestCard = ({ test }) => {
  return (
    <Link href={routes.test.read(test.id)}>
      <div className="pb-2 shadow-md rounded-lg">
        <div className="relative">
          <Image
            alt="Loading..."
            width={200}
            height={200}
            className="rounded-t-lg h-64 object-cover w-full"
            src={test.image}
            unoptimized
          />
          <TextLg
            text={`Rs ${test.price}`}
            classes="bg-theme-500 rounded-full px-4 py-1 font-black absolute top-4 left-4"
            color="text-white"
          />
        </div>
        <div className="m-3 xl:mx-8 xl:my-4">
          <StarRating rating={5} />

          <Text2Xl
            text={test.test_name}
            classes={
              "font-semibold my-4 mt-2 overflow-hidden text-ellipsis whitespace-nowrap"
            }
          />

          <Flex
            justify="justify-start 2xl:justify-between"
            flexDirection="flex-col sm:flex-row"
            classes="my-4"
            alignItems="items-start 2xl:justify-center"
          >
            <Flex justify="justify-start">
              <Flex classes="bg-theme-500 w-8 h-8 rounded">
                <FontAwesomeIcon icon={faUserAlt} color="white" />
              </Flex>
              <TextSm text={`1 Students Attempt`} />
            </Flex>
            <Flex justify="justify-start">
              <Flex classes="bg-theme-500 w-8 h-8 rounded">
                <FontAwesomeIcon icon={faBook} color="white" />
              </Flex>
              <TextSm text={`${test.questions.length} Questions`} />
            </Flex>
          </Flex>

          <Flex justify="justify-between" classes="mt-6">
            <ButtonOutlined text={"View Test"} width="w-44" height="h-10" />
            <TextSm
              text={test.category.toUpperCase()}
              color="text-theme-500"
              classes="font-bold"
            />
          </Flex>
        </div>
      </div>
    </Link>
  );
};

export default TestCard;

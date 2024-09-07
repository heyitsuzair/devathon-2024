import dynamic from "next/dynamic";
import React from "react";
import { TextLg } from "../text";
import { Flex } from "../flex";
const StarRatings = dynamic(() => import("react-star-ratings"), {
  ssr: false,
});

const StarRating = ({ rating = 0, onRatingChange }) => {
  return (
    <Flex justify="justify-start">
      <StarRatings
        rating={rating}
        starRatedColor="#f5be57"
        starHoverColor="#c084fc"
        starDimension="20px"
        starSpacing="1px"
        changeRating={onRatingChange}
      />
      <TextLg text={rating} classes="font-semibold mt-1.5" />
    </Flex>
  );
};

export default StarRating;

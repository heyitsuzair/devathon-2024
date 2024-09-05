import React from "react";
import "./style.css";
import { Text5Xl, TextLg } from "../text";
import Link from "next/link";
import { routes } from "@/config";
const BreadcrumbsBG = ({
  cameFrom = "Home",
  cameFromLink = routes.home,
  cameTo = "",
}) => {
  return (
    <div className="breadcrumb h-96 flex justify-center items-center flex-col">
      <Text5Xl text={cameTo} classes="font-bold" color="text-white" />
      <div className="flex items-center gap-2 my-5">
        {cameFromLink && (
          <Link href={cameFromLink}>
            <TextLg
              text={cameFrom}
              classes="font-black underline"
              color="text-theme-500"
            />
          </Link>
        )}
        {!cameFromLink && (
          <TextLg text={cameFrom} classes="font-black" color="text-theme-500" />
        )}
        <TextLg text="/" classes="font-medium" color="text-white" />
        <TextLg text={cameTo} classes="font-medium" color="text-white" />
      </div>
    </div>
  );
};

export default BreadcrumbsBG;

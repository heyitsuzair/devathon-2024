import React from "react";
import { Grid } from "../grid";
import Logo from "../logo";
import { Text2Xl, TextLg, TextXl } from "../text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex } from "../flex";
import { menu, socialHandles } from "@/config";
import Link from "next/link";
import { getCurrentYear } from "@/utils";

const Footer = () => {
  return (
    <>
      <div className="bg-theme-500 border-t-2 border-white p-10 md:p-20">
        <Grid alignItems="items-start">
          <div className="col-span-12 md:col-span-6">
            <Logo classes="rounded-full border-2 border-theme-secondary" />

            <TextLg
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit varius congue Morbi"
              classes="font-medium my-4"
              color="text-black"
            />
            <TextXl
              text="Follow Us On:"
              classes="font-bold my-4"
              color="text-black"
            />

            <Flex
              justify="justify-start"
              alignItems="items-start"
              classes="flex-wrap"
            >
              {socialHandles.map((icon) => {
                return (
                  <a key={icon.link} target="_blank" href={icon.link}>
                    <div className="flex gap-4 items-center my-4">
                      <div
                        className={`${icon.color} rounded-full w-14 h-14 flex items-center justify-center`}
                      >
                        <FontAwesomeIcon
                          icon={icon.icon}
                          fontSize={30}
                          color="white"
                        />
                      </div>
                    </div>
                  </a>
                );
              })}
            </Flex>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Text2Xl
              text="Useful Links:"
              classes="font-bold my-4"
              color="text-black"
            />

            <Flex
              justify="justify-start"
              alignItems="items-start"
              flexDirection="flex-col"
            >
              {menu.map((menuItem) => {
                return (
                  <Link key={menuItem.route} href={menuItem.route}>
                    <TextXl
                      color="text-black"
                      classes="font-medium"
                      text={menuItem.text}
                    />
                  </Link>
                );
              })}
            </Flex>
          </div>
        </Grid>
      </div>
      <div className="bg-theme-secondary p-5 text-center">
        <Flex gap="gap-2" flexDirection="flex-col md:flex-row">
          <TextXl
            text={`Copyright © ${getCurrentYear()} Fellow Coders. All rights reserved. Web Design By`}
            color="text-white"
          />
          <a
            href="https://api.whatsapp.com/send?phone=923104864150&text=Hey!%20I%20Need%20More%20Information%20About%20Your%20Services"
            target="_blank"
          >
            <TextLg
              text={`FELLOW CODERS`}
              color="text-white font-bold"
              classes="underline"
            />
          </a>
        </Flex>
      </div>
    </>
  );
};

export default Footer;

import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const handles = [
  // {
  //   icon: faWhatsapp,
  //   key: "WhatsApp Channel",
  //   value: "Fellow Coders",
  //   link: "https://whatsapp.com/xxxxxxx",
  //   color: "bg-whatsapp",
  // },
];
export default handles;

export const findSocialHandle = (key) =>
  handles.find((handle) => handle.key === key);

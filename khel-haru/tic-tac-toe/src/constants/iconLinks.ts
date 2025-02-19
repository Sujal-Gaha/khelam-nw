import { ReactNode } from "react";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type TIconLink = {
  id: number;
  icon: ReactNode | IconType;
  href: string;
};

const githubHref = "https://github.com/Sujal-Gaha";
const linkedinHref = "https://www.linkedin.com/in/sujal-magar-382889287/";
const twitterHref = "https://x.com/suzalgahamagar";

export const iconLinks: TIconLink[] = [
  {
    id: 1,
    icon: FaGithub,
    href: githubHref,
  },
  {
    id: 2,
    icon: FaLinkedin,
    href: linkedinHref,
  },
  {
    id: 3,
    icon: FaXTwitter,
    href: twitterHref,
  },
];

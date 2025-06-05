import { FaDiscord, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import AnimatedTitle from "./AnimatedTitle";

export const FancyLink = ({ href = "#", children }) => (
  <li className="relative group inline-block w-full">
    <a
      href={href}
      className="relative z-10 px-1 py-1 text-black group-hover:text-[#5542ff] transition duration-300"
    >
      {children}
    </a>
    <span className="absolute max-w-32 inset-0 bg-black rounded-lg -skew-x-3 scale-0 group-hover:scale-100 group-hover:rotate-[-2deg] transition-all duration-300 ease-in-out z-0"></span>
  </li>
);

const socialLinks = [
  { href: "https://discord.com", name: "Discord", icon: <FaDiscord /> },
  { href: "https://twitter.com", name: "Twitter", icon: <FaXTwitter /> },
  { href: "https://youtube.com", name: "Youtube", icon: <FaYoutube /> },
  {
    href: "https://twitch.com",
    name: "Twitch",
    icon: <FaSquareInstagram />,
  },
];

const exploreLinks = ["Home", "Prologue", "About", "Contact"];
const products = ["Radiant", "Nexus ↗", "Zigma", "Azul"];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] text-black px-6 py-10 h-screen flex flex-col justify-end">
      <AnimatedTitle 
        title="Xentr<b>y</b>"
        containerClass="w-full h-full justify-center !text-black z-50 "
      />
      <div className="grid grid-cols-3 gap-8 md:grid-cols-5 text-xl font-general tracking-wide">
        {/* 1) LOGO */}
        <div className="flex items-center justify-center">
          <img src="/img/logo.png" alt="ZENTRY Logo" className="w-[4rem]" />
        </div>

        {/* 2) EXPLORE */}
        <div>
          <h4 className="text-xs mb-2 pl-1">EXPLORE</h4>
          <ul className="space-y-1">
            {exploreLinks.map((item) => (
              <FancyLink key={item}>{item}</FancyLink>
            ))}
          </ul>
        </div>

        {/* 3) PRODUCTS */}
        <div>
          <h4 className="text-xs mb-2 pl-1">PRODUCTS</h4>
          <ul className="space-y-1">
            {products.map((item) => (
              <FancyLink key={item}>{item}</FancyLink>
            ))}
          </ul>
        </div>

        {/* 4) FOLLOW US */}
        <div className="col-start-2 md:col-start-auto">
          <h4 className="text-xs mb-2 pl-1">FOLLOW US</h4>
          <ul className="space-y-1">
            {socialLinks.map((link) => (
              <FancyLink key={link.name} href={link.href}>
                  {link.name}
                  {/* <span className="text-lg">{link.icon}</span> */}
              </FancyLink>
            ))}
          </ul>
        </div>

        {/* 5) RESOURCES */}
        <div className="col-start-3 md:col-start-auto">
          <h4 className="text-xs mb-2 pl-1">RESOURCES</h4>
          <ul>
            <FancyLink>Media Kit</FancyLink>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex justify-between items-center mt-8 text-xs">
        <div className="flex items-center gap-2">
          <svg
            width="50"
            height="50"
            viewBox="0 0 100 100"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20,80 L50,20 L55,45 L80,45 L30,80 Z" />
          </svg>
          <span>© XENTRY 2024. ALL RIGHTS RESERVED</span>
        </div>
        <a href="#privacy-policy" className="hover:underline">
          PRIVACY POLICY
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Logo from "@/components/Logo";
import Container from "@/components/Container";
import { socialLinks } from "@/mocks/sociallinks";
import Image from "next/image";
import { footerLinks } from "@/mocks/footerLinks";

const Footer = () => {
  return (
    <Container className="w-full py-20 bg-cream flex flex-col gap-6 items-start border-t">

      {/* Logo and name */}
      <div className="w-full flex items-center gap-4">
        <Logo />
        <span className="tracking-wide">AGROW</span>
      </div>


      <div className="ml-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Social links and about brand */}
        <div className="flex flex-col justify-between gap-10">
          <p className="text-sm text-muted-foreground font-500">Linking Farmers, Sellers, and Buyers <br /> for Easy Agricultural Trade.</p>
          <ul className="flex gap-2 items-center">
            {
              socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={link.imgurl}
                      alt={link.name}
                      width={25}
                      height={25}
                      className="w-[25px] h-[25px]"
                      priority
                      unoptimized
                      quality={100}
                    />
                  </a>
                </li>
              ))
            }
          </ul>

        </div>


        {
          footerLinks.map((link) => (
            <div
              key={link.heading}
              className="flex flex-col gap-4 text-sm"
            >
              <span className="font-semibold">{link.heading}</span>
              <ul className="flex flex-col gap-2">
                {
                  link.links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href}>
                        {link.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }


        {/* <div>
          legal

          <ul>
            <li>terms and condtion </li>
            <li>Privacy policy</li>
            <li>copyright</li>
          </ul>
        </div>


        <div>
          Contact Info

          <ul>
            <li>
              emial
            </li>

            <li>address</li>
            <li></li>
          </ul>
        </div> */}
      </div>
    </Container>
  );
};

export default Footer;
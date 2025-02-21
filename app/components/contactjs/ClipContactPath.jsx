import React, { useState } from "react";
import {
  SiAdobe,
  SiApple,
  SiFacebook,
  SiGoogle,
  SiGmail,
  SiLinkedin,
  SiShopify,
  SiSoundcloud,
  SiGithub,
  SiSpotify,
  SiTiktok,
  SiInstagram
} from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Contra from "../icons/Contra";
import LinkBox from "./LinkBox";
import ContactForm from "./ContactForm";

export const SocialLinks = () => {

  return (
    <div className="bg-[#F1F1F1] px-1 py-16">
      <div className="mx-auto max-w-7xl">
        <ClipPathLinks />
      </div>
    </div>
  );
};
        
const ClipPathLinks = () => {
  return (
    <div className="divide-y divide-neutral-900 border border-neutral-900">
      <div className="grid grid-cols-1 divide-x divide-neutral-900">
        <ContactForm />
      </div>
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <LinkBox Icon={IoMdMail} href="mailto:contact.dhruvsahoo@gmail.com" Text="contact.dhruvsahoo@gmail.com" />
        <LinkBox Icon={Contra} href="https://contra.com/dhruv_sahoo_vwidjfcl?utm_campaign=social_sharing&utm_medium=independent_share&utm_source=copy_link" />
      </div>
      <div className="grid grid-cols-4 divide-x divide-neutral-900">
        <LinkBox Icon={SiGithub} href="https://github.com/Dru-429" />
        <LinkBox Icon={SiLinkedin} href="https://www.linkedin.com/in/dhruvsahoo/" />
        <LinkBox Icon={FaSquareXTwitter} href="https://x.com/_dru429/" />
        <LinkBox Icon={SiInstagram} href="https://www.instagram.com/_dru429/" />
      </div>
    </div>
  );
};


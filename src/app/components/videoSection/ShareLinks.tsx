"use client";
import { FC, useState } from "react";
import Image from "next/image";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WorkplaceShareButton,
} from "react-share";
import { ShareBtn } from "../ShareBtn";

type ShareLinks = {
  title: any;
  copyBtnText: string;
  copieSuccessText: string;
  shareLink: string;
};

export const ShareLinks: FC<ShareLinks> = ({
  title,
  copyBtnText,
  copieSuccessText,
  shareLink,
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      })

      .catch((err) => console.error("Error copying to clipboard: ", err));
  };

  return (
    <div className="mt-[50px] flex flex-col justify-between sm:flex-row">
      <div className="flex flex-col items-center sm:items-start sm:ps-7">
        <p className="text-[16px] leading-[20px] text-darkPink">{title}</p>
        <div className="mt-[20px] flex flex-row gap-3 sm:gap-7">
          <TwitterShareButton
            url={"pupkultura.lv"}
            className="w-[20px] sm:w-[25px]"
          >
            <Image
              src={"./x.svg"}
              alt={"X"}
              width={25}
              height={27}
              className="h-auto w-full"
            />
          </TwitterShareButton>
          <ShareBtn
            customClass={"w-[20px] sm:w-[27px] pointer"}
            icon={"./instagram.svg"}
            shareTitle={"Pupkultura"}
            shareText={"Tavu krūšu drošībai"}
            shareUrl={"www.pupkulura.lv"}
          />
          <FacebookShareButton
            url={"pupkultura.lv"}
            className="relative h-[20px] w-[20px] sm:h-[27px] sm:w-[25px]"
          >
            <Image src={"./facebook.svg"} alt={"Facebook"} fill />
          </FacebookShareButton>
          <ShareBtn
            customClass={"w-[20px] sm:w-[27px] pointer"}
            icon={"./tik tok.svg"}
            shareTitle={"Pupkultura"}
            shareText={"Tavu krūšu drošībai"}
            shareUrl={"www.pupkulura.lv"}
          />
          <LinkedinShareButton
            url={"pupkultura.lv"}
            className="w-[22px] sm:w-[27px]"
          >
            <Image
              src={"./linkedin.svg"}
              alt={"Linkedin"}
              width={27}
              height={27}
            />
          </LinkedinShareButton>
        </div>
      </div>

      <div className="relative mt-[30px] sm:mt-0">
        <div className="flex flex-row items-center justify-between gap-5 rounded-[30px] bg-[#ffd4f4] py-1 pe-[5px] ps-[24px]">
          <p className="font-openSans text-[16px] text-darkPink">
            www.youtu.be/wb435...
          </p>
          <button
            onClick={() => {
              copyToClipboard(shareLink);
            }}
            className="rounded-[30px] border-[1px] bg-primaryLight px-[12px] py-[9px] font-openSans font-[600] capitalize text-darkPink transition duration-300 ease-in-out hover:bg-darkPink hover:text-primaryLight sm:ms-[23px] sm:px-[24px]"
          >
            {copyBtnText}
          </button>
        </div>
        {copied && (
          <p className="absolute right-[10px] top-[-25px] max-w-[fit-content] rounded-[20px] bg-darkPink px-2 py-1 font-openSans text-[10px] font-[600] text-primaryLight opacity-55">
            {copieSuccessText}
          </p>
        )}
      </div>
    </div>
  );
};

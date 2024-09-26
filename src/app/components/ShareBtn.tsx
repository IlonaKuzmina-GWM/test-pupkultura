'use client'

import { FC } from "react";
import Image from "next/image";

type ShareBtnProps = {
    btnTitle?: string;
    customClass?: string;
    icon?: string;
    shareTitle: string;
    shareText: string;
    shareUrl: string;
}

export const ShareBtn: FC<ShareBtnProps> = ({ btnTitle, customClass, icon, shareText, shareTitle, shareUrl }) => {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: shareTitle,
                    text: shareText,
                    url: shareUrl,
                });
                console.log('Content shared successfully');
            } catch (error) {
                console.error('Error sharing content:', error);
            }
        } else {
            alert('Web Share API is not supported in your browser.');
        }
    };


    return (
        <button onClick={handleShare} className={`${customClass} font-openSans`}>{btnTitle} 
        {icon && <Image src={`${icon}`} alt="Btn icon" width={27} height={27} className="w-full h-auto" />}
        </button>
    )
}

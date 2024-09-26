"use client";

import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";

interface FactorsSliderProps {
    children: React.ReactNode;
}

const FactorsSlider = ({ children }: FactorsSliderProps) => {
    useEffect(() => {
        const swiper = new Swiper(".factors-swiper", {
            slidesPerView: 2.5,
            spaceBetween: 10,
            freeMode: true,
            breakpoints: {
                490: {
                    slidesPerView: 3.5,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 4.5,
                    spaceBetween: 10,
                },
                1280: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
            },
        });
    }, []);

    return (
        <div className="xl:container py-8 px-6">
            <div className="factors-swiper">
                <div className="swiper-wrapper ">{children}</div>
            </div>
        </div>
    );
};

export default FactorsSlider;

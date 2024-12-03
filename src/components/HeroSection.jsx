import { memo } from "react";
import SuperSaleSection from "./SuperSaleSection";
import { useTranslation } from 'react-i18next';
import React from 'react';

const HeroPicture = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full relative min-h-32">
      <div className="w-full">
        <img
          src="/images/Promotion-Image-sm.webp"
          srcSet="
            /images/Promotion-Image-sm.webp 768w,
            /images/Promotion-Image-md.webp 1280w,
            /images/Promotion-Image.webp 1920w
          "
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1280px) 1280px,
                 1920px"
          alt={t('HeroPicture.alt')} // Assuming you have this in your translation file
          className="w-full aspect-square md:aspect-[2.9] object-cover"
          fetchpriority="high"
        />
      </div>
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:w-1/2 px-6 sm:px-16 md:px-24 lg:px-32 absolute top-1/2 -translate-y-1/2 text-white leading-relaxed">
        {t('HeroPicture.title')} {/* Translated title */}
      </h1>
    </div>
  );
};

function HeroSection() {
  return (
    <>
    <HeroPicture/>
    <SuperSaleSection/>
    </>
  );
}

export default memo(HeroSection);

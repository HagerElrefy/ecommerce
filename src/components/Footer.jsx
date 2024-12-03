import React, { memo } from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const socialLinks = [
  { icon: FaFacebookF, color: 'text-blue-900' },
  { icon: FaTwitter, color: 'text-PrimaryBlue' },
];

const importantLinks = [
  {
    title: "Information",
    links: [
      'About Us',
      'Information',
      'Privacy Policy',
      'Terms & Conditions'
    ]
  },
  {
    title: "Service",
    links: [
      'About Us',
      'Information',
      'Privacy Policy',
      'Terms & Conditions'
    ]
  },
  {
    title: "My Account",
    links: [
      'About Us',
      'Information',
      'Privacy Policy',
      'Terms & Conditions'
    ]
  },
  {
    title: "Our Offers",
    links: [
      'About Us',
      'Information',
      'Privacy Policy',
      'Terms & Conditions'
    ]
  },
];

function AddressSection() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5 w-full md:w-60">
      <h4 className="font-bold text-xl">{t('Footer.contactUs')}</h4>
      <address className="not-italic">
        <p>{t('Footer.eComm')}</p>
        <p>{t('Footer.addressLine1')}</p>
        <p>{t('Footer.addressLine2')}</p>
      </address>
    </div>
  );
}

function SocialLinks() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5 w-full md:w-60">
      <h4 className="font-bold text-xl">{t('Footer.followUs')}</h4>
      <p>{t('Footer.socialDescription')}</p>
      <div className="flex gap-2">
        {socialLinks.map(({ icon: Icon, color }, idx) => (
          <button key={idx} className={`${color} text-xl w-8 h-8 flex items-center justify-center`} aria-label={t('Footer.socialMediaLink')}>
            <Icon />
          </button>
        ))}
      </div>
    </div>
  );
}

function LogoAndDesc() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5 w-full md:w-60">
      <div className='w-full'>
        <img src="images/logo.webp" alt={t('Footer.logoAlt')} className="w-full aspect-[3.01]" />
      </div>
      <p>{t('Footer.logoDescription')}</p>
    </div>
  );
}

function ImportantLinks() {
  const { t } = useTranslation();

  return (
    <>
      {importantLinks.map((linkGroup, index) => (
        <div className="flex flex-col gap-5 w-full md:w-1/4" key={index}>
          <h4 className="text-xl">{t(`Footer.${linkGroup.title}`)}</h4>
          <div>
            {linkGroup.links.map((link, i) => (
              <p key={i}>{t(`Footer.${link}`)}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="px-5 md:px-32 bg-MedaimBlue py-10 text-xs flex flex-col gap-10">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
        <LogoAndDesc />
        <SocialLinks />
        <AddressSection />
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
        <ImportantLinks />
      </div>

      <hr className="border-t border-white my-5" />

      <div className="text-center md:text-start">
        <p className="text-slate-400 text-sm">
          {t('Footer.footerText')}
        </p>
      </div>
    </footer>
  );
}

export default memo(Footer);

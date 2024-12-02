import React, { memo } from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

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
  return (
    <div className="flex flex-col gap-5 w-full md:w-60">
      <h4 className="font-bold text-xl">Contact Us</h4>
      <address className="not-italic">
        <p>E-Comm,</p>
        <p>4578 Marmora Road,</p>
        <p>Glasgow D04 89GR</p>
      </address>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-col gap-5 w-full md:w-60">
      <h4 className="font-bold text-xl">Follow Us</h4>
      <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
      <div className="flex gap-2">
        {socialLinks.map(({ icon: Icon, color }, idx) => (
          <button key={idx} className={`${color} text-xl w-8 h-8 flex items-center justify-center`} aria-label="social media link">
            <Icon />
          </button>
        ))}
      </div>
    </div>
  );
}

function LogoAndDesc() {
  return (
    <div className="flex flex-col gap-5 w-full md:w-60">
      <div className='w-full'>
        <img src="images/logo.webp" alt="E-Comm logo" className="w-full aspect-[3.01]"/>
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever. Since the 1500s, when an unknown printer.
      </p>
    </div>
  );
}

function ImportantLinks() {
  return (
    <>
      {importantLinks.map((linkGroup, index) => (
        <div className="flex flex-col gap-5 w-full md:w-1/4" key={index}>
          <h4 className="text-xl">{linkGroup.title}</h4>
          <div>
            {linkGroup.links.map((link, i) => (
              <p key={i}>{link}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

function Footer() {
  return (
    <footer className="px-5 md:px-32 bg-MedaimBlue py-10 text-xs flex flex-col gap-10">
      {/* First row with logo, social links, and address */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
        <LogoAndDesc />
        <SocialLinks />
        <AddressSection />
      </div>

      {/* Important Links */}
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-0">
        <ImportantLinks />
      </div>

      <hr className="border-t border-white my-5" />

      {/* Footer bottom text */}
      <div className="text-center md:text-left">
        <p className="text-slate-300 text-sm">
          © 2018 Ecommerce theme by www.bisenbaev.com
        </p>
      </div>
    </footer>
  );
}

export default memo(Footer);

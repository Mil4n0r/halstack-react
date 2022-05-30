import { DxcFooter } from "@dxc-technology/halstack-react";
import { linkedinLogo, twitterLogo, facebookLogo } from "./Icons";

const code = `() => {
  const social = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      logo: linkedinLogo,
    },
    {
      href: "https://twitter.com/dxctechnology",
      logo: twitterLogo,
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      logo: facebookLogo,
    },
  ];
  const bottom = [
    {
      href: "https://www.linkedin.com/company/dxctechnology",
      text: "Linkedin",
    },
    {
      href: "https://twitter.com/dxctechnology",
      text: "Twitter",
    },
    {
      href: "https://www.facebook.com/DXCTechnology/",
      text: "Facebook",
    },
  ];
  return (
    <DxcFooter
      bottomLinks={bottom}
      socialLinks={social}
    >
    </DxcFooter>
  );
}`;

const scope = {
  DxcFooter,
  linkedinLogo,
  twitterLogo,
  facebookLogo,
};

export default { code, scope };

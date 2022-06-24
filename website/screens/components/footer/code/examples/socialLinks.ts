import { DxcFooter, DxcInset } from "@dxc-technology/halstack-react";

const code = `() => {
  const linkedInLogo = (
    <svg
      x="0px"
      y="0px"
      width="438.536px"
      height="438.536px"
      viewBox="0 0 438.536 438.536"
      fill="currentColor"
    >
      <g>
        <path d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225C438.532,59.576,430.49,40.204,414.41,24.123z M373.155,225.548h-49.963V406.84h-74.802V225.548H210.99V163.02h37.401v-37.402c0-26.838,6.283-47.107,18.843-60.813c12.559-13.706,33.304-20.555,62.242-20.555h49.963v62.526h-31.401c-10.663,0-17.467,1.853-20.417,5.568c-2.949,3.711-4.428,10.23-4.428,19.558v31.119h56.534L373.155,225.548z" />
      </g>
    </svg>
  );

  const social = [
    {
      logo: linkedInLogo,
      href: "https://www.linkedin.com/company/dxctechnology",
    },
  ];

  return (
    <DxcInset space="large">
      <DxcFooter socialLinks={social}></DxcFooter>
    </DxcInset>
  );
}`;

const scope = {
  DxcFooter,
  DxcInset,
};

export default { code, scope };
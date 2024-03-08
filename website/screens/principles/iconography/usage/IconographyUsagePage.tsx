import DocFooter from "@/common/DocFooter";
import QuickNavContainer from "@/common/QuickNavContainer";
import QuickNavContainerLayout from "@/common/QuickNavContainerLayout";
import {
  DxcBulletedList,
  DxcFlex,
} from "@dxc-technology/halstack-react";
import Image from "@/common/Image";
import icons from "./images/Halstack_Icons.jpg";
import Link from "next/link";

const sections = [
  {
    title: "Usage",
    content: (
      <>
        <Image src={icons} height={400} alt="Halstack Icons" />
        <DxcBulletedList>
          <DxcBulletedList.Item>
            Use icons within the context of commonly used components such as
            buttons, links, navigation items, or status indicators.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Icon sizes can vary based on use case and application context. The
            icons that are currently used within Halstack components follow a
            24x24px size including the background or space around the icon.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Do not use icons that fill the entire space allotted for the icon.
            All icons currently implemented maintain a minimum of 4px padding
            (the largest solid icon occupies a maximum of 20px width or height).
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Make sure to maintain scaling proportions and aspect ratios when
            resizing icons.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            When using colors, make sure to consider the context of the icon
            being used as well as the consistency of visual information being
            presented.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Icons come in outlined and filled variants. The currently
            implemented icons use base colors of black or white for visual
            consistency.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            While there currently exists a library of over three thousand icons,
            there may be instances when a custom icon is needed (such as icons
            that represent brands, companies, or organizations), an SVG
            implementation option is also available for use. This use should be
            limited only to these situations as it is highly encouraged to use
            the existing icon set for design consistency.
          </DxcBulletedList.Item>
          <DxcBulletedList.Item>
            Project teams are encouraged to share their own variations of icon
            usage with the Halstack team so that these can be referenced as part
            of a growing collection of iconography that is currently used
            alongside Halstack components.
          </DxcBulletedList.Item>
        </DxcBulletedList>
      </>
    ),
  },
];
const IconographyUsagePage = () => {
  return (
    <DxcFlex direction="column" gap="4rem">
      <QuickNavContainerLayout>
        <QuickNavContainer
          sections={sections}
          startHeadingLevel={2}
        ></QuickNavContainer>
      </QuickNavContainerLayout>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-react/blob/master/website/screens/principles/iconography/usage/IconographyUsagePage.tsx" />
    </DxcFlex>
  );
};

export default IconographyUsagePage;

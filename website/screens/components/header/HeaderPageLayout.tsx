import { DxcText, DxcFlex } from "@dxc-technology/halstack-react";
import PageHeading from "@/common/PageHeading";
import TabsPageHeading from "@/common/TabsPageLayout";
import ComponentHeading from "@/common/ComponentHeading";

const HeaderPageHeading = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Code", path: "/components/header" },
    { label: "Usage", path: "/components/header/usage" },
    { label: "Specifications", path: "/components/header/specifications" },
  ];

  return (
    <DxcFlex direction="column" gap="3rem">
      <PageHeading>
        <DxcFlex direction="column" gap="2rem">
          <ComponentHeading name="Header" status="Ready" />
          <DxcText as="p">
            The header is an important component in the interface, it is the
            area dedicated for the navigation across the application and helps
            users understand what the content of the page is about. They appear
            at the top of a page, above the main content.
          </DxcText>
          <TabsPageHeading tabs={tabs}></TabsPageHeading>
        </DxcFlex>
      </PageHeading>
      {children}
    </DxcFlex>
  );
};

export default HeaderPageHeading;

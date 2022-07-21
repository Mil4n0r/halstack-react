import { DxcBleed, DxcInset, DxcStack } from "@dxc-technology/halstack-react";
import Placeholder from "./Placeholder";

const code = `() => {
  return (
    <DxcInset space="2rem">
      <DxcStack gutter="large">
        <Placeholder height="large" />
        <DxcBleed top="0.5rem" right="1rem" bottom="1.5rem" left="1.5rem">
          <Placeholder height="large" />
        </DxcBleed>
        <Placeholder height="large" />
      </DxcStack>
    </DxcInset>
  );
}`;

const scope = {
  DxcBleed,
  DxcInset,
  DxcStack,
  Placeholder,
};

export default { code, scope };

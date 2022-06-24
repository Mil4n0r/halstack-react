import {
  DxcTag,
  DxcInset,
  DxcRow,
  DxcStack,
  DxcHeading,
} from "@dxc-technology/halstack-react";

const code = `() => {
  const icon = (
    <svg viewBox="0 0 24 24" fill="#FFFFFF">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );

  return (
    <DxcInset space="large">
      <DxcRow justify="spaceEvenly">
        <DxcStack gutter="large">
          <DxcHeading level={4} text="Icon before"></DxcHeading>
          <DxcTag label="Enabled" labelPosition="before" icon={icon} />
        </DxcStack>
        <DxcStack gutter="large">
          <DxcHeading level={4} text="Icon after"></DxcHeading>
          <DxcTag label="Enabled" icon={icon} />
        </DxcStack>
        <DxcStack gutter="large">
          <DxcHeading level={4} text="Only icon"></DxcHeading>
          <DxcTag icon={icon} />
        </DxcStack>
      </DxcRow>
    </DxcInset>
  );
}`;

const scope = {
  DxcTag,
  DxcInset,
  DxcRow,
  DxcStack,
  DxcHeading,
};

export default { code, scope };
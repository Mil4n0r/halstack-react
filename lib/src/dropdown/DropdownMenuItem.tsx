import React from "react";
import styled from "styled-components";
import { DropdownMenuItemProps } from "./types";

const DropdownMenuItem = ({
  id,
  visuallyFocused,
  iconPosition,
  onClick,
  option,
}: DropdownMenuItemProps): JSX.Element => (
  <DropdownMenuItemContainer
    visuallyFocused={visuallyFocused}
    onClick={() => {
      onClick(option.value);
    }}
    id={id}
    role="menuitem"
    tabIndex={-1}
  >
    {iconPosition === "after" && <DropdownMenuItemLabel>{option.label}</DropdownMenuItemLabel>}
    {option.icon && (
      <DropdownMenuItemIcon iconPosition={iconPosition} role={typeof option.icon === "string" ? undefined : "img"}>
        {typeof option.icon === "string" ? <img src={option.icon} /> : option.icon}
      </DropdownMenuItemIcon>
    )}
    {iconPosition === "before" && <DropdownMenuItemLabel>{option.label}</DropdownMenuItemLabel>}
  </DropdownMenuItemContainer>
);

const DropdownMenuItemContainer = styled.li<{ visuallyFocused: DropdownMenuItemProps["visuallyFocused"] }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.optionIconSpacing};
  min-height: 36px;
  padding-top: ${(props) => props.theme.optionPaddingTop};
  padding-bottom: ${(props) => props.theme.optionPaddingBottom};
  padding-left: ${(props) => props.theme.optionPaddingLeft};
  padding-right: ${(props) => props.theme.optionPaddingRight};
  cursor: pointer;

  ${(props) => props.visuallyFocused && `outline: ${props.theme.focusColor} solid 2px; outline-offset: -2px;`}
  &:hover {
    background-color: ${(props) => props.theme.hoverOptionBackgroundColor};
  }
  &:active {
    background-color: ${(props) => props.theme.activeOptionBackgroundColor};
  }
`;

const DropdownMenuItemLabel = styled.span`
  font-family: ${(props) => props.theme.optionFontFamily};
  font-size: ${(props) => props.theme.optionFontSize};
  font-style: ${(props) => props.theme.optionFontStyle};
  font-weight: ${(props) => props.theme.optionFontWeight};
  line-height: 1.5rem;
  color: ${(props) => props.theme.optionFontColor};
  white-space: nowrap;
`;

const DropdownMenuItemIcon = styled.div<{
  iconPosition: DropdownMenuItemProps["iconPosition"];
}>`
  display: flex;
  color: ${(props) => props.theme.optionIconColor};

  img,
  svg {
    width: ${(props) => props.theme.optionIconSize};
    height: ${(props) => props.theme.optionIconSize};
  }
`;

export default React.memo(DropdownMenuItem);

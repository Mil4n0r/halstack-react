import styled from "styled-components";

type StatusTagProps = {
  status?: "Deprecated" | "Experimental" | "Information" | "Ready" | "Required";
  children: React.ReactNode;
};

const StatusTag = (props: StatusTagProps) => <StyledStatusTag {...props} />;

const StyledStatusTag = styled.div<StatusTagProps>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: baseline;
  width: fit-content;
  border-radius: 0.5rem;
  padding: 3px 6px;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.125em;
  color: ${(props) =>
    props.status === "Ready"
      ? "#135325"
      : props.status === "Deprecated"
      ? "#947705"
      : props.status === "Information"
      ? "#003C66"
      : props.status === "Required"
      ? "#915108"
      : "#321353"};
  background-color: ${(props) =>
    props.status === "Ready"
      ? "#ACECBE"
      : props.status === "Deprecated"
      ? "#FBE89D"
      : props.status === "Information"
      ? "#CCEAFF"
      : props.status === "Required"
      ? "#FCE7CF"
      : "#E5D5F6"};
`;

export default StatusTag;

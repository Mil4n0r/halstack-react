import { DxcFileInput } from "@dxc-technology/halstack-react";
import { useState } from "react";

const code = `() => {
  const [files, setFiles] = useState([]);

  const callbackFile = (files) => {
    setFiles(files);
  };

  return (
    <DxcFileInput
      label="File Input"
      helperText="Please select files"
      value={files}
      callbackFile={callbackFile}
      margin="medium"
      disabled
    />
  );
}`;

const scope = {
  DxcFileInput,
  useState,
};

export default { code, scope };
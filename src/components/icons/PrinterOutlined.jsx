import { SvgIcon } from "@mui/material";
import React from "react";

const PrinterOutlined = (props) => {
  return (
    <SvgIcon
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.5 9.5V2.5H18.5V9.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.5 18.5H4.5C3.96957 18.5 3.46086 18.2893 3.08579 17.9142C2.71071 17.5391 2.5 17.0304 2.5 16.5V11.5C2.5 10.9696 2.71071 10.4609 3.08579 10.0858C3.46086 9.71071 3.96957 9.5 4.5 9.5H20.5C21.0304 9.5 21.5391 9.71071 21.9142 10.0858C22.2893 10.4609 22.5 10.9696 22.5 11.5V16.5C22.5 17.0304 22.2893 17.5391 21.9142 17.9142C21.5391 18.2893 21.0304 18.5 20.5 18.5H18.5"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.5 14.5H6.5V22.5H18.5V14.5Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SvgIcon>
  );
};

export default PrinterOutlined;

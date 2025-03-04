import React from "react";

const EnquiryInfo = ({ enquiryInfo }) => {
  console.log(enquiryInfo);

  return <div>{enquiryInfo.name}</div>;
};

export default EnquiryInfo;

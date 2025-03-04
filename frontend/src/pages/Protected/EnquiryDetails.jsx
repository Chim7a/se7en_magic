import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { BACKEND_BASE_URL } from "../../utilities/helper";
import EnquiryInfo from "../../components/Admin/EnquiryInfo";

const EnquiryDetails = () => {
  const [enquiryInfo, setEnquiryInfo] = useState(null);
  const param = useParams();
  console.log(enquiryInfo);

  async function getEnquiryDetails() {
    try {
      const response = await axios.get(
        `${BACKEND_BASE_URL}/admin/${param.enquiryId}`
      );
      console.log(response);

      setEnquiryInfo(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEnquiryDetails();
  }, []);

  return <EnquiryInfo enquiryInfo={enquiryInfo} />;
};

export default EnquiryDetails;

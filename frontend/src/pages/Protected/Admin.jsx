import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../../utilities/helper";
import EnquiryList from "../../components/Admin/EnquiryList";

const Admin = () => {
  const [enquiries, setEnquiries] = useState([]);

  async function getAllCustomersEnquiries() {
    try {
      const response = await axios.get(
        `${BACKEND_BASE_URL}/enquiry/all-enquiries`
      );
      setEnquiries(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllCustomersEnquiries();
  }, []);
  return <EnquiryList enquiries={enquiries} />;
};

export default Admin;

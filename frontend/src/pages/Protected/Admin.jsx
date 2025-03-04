import axios from "axios";
import React, { useEffect, useState } from "react";
import { BACKEND_BASE_URL } from "../../utilities/helper";
import EnquiryList from "../../components/Admin/EnquiryList";

const Admin = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getAllCustomersEnquiries() {
    try {
      const response = await axios.get(
        `${BACKEND_BASE_URL}/enquiry/all-enquiries`
      );
      setEnquiries(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllCustomersEnquiries();
  }, []);

  if (loading === true) {
    return (
      <div className="grid place-items-center py-24">
        <h1 className="text-3xl text-secondary tracking-wider animate-pulse">
          Getting Enquiries...
        </h1>
      </div>
    );
  }

  return <EnquiryList enquiries={enquiries} />;
};

export default Admin;

import { Button, Input } from "antd";
import axios from "axios";
import React, { useState } from "react";
import validator from "validator";
const { TextArea } = Input;
const ContactUs = () => {
  const [enquiryFormData, setEnquiryFormData] = useState({
    name: "",
    email: "",
    enquiryMessage: "",
  });

  async function handleAddEnquiryName() {
    if (validator.isEmpty(enquiryFormData.name, { ignore_whitespace: true })) {
      return alert("Please enter name");
    }

    if (validator.isEmail(enquiryFormData.email) === false) {
      return alert("Please provide a valid email");
    }

    if (
      validator.isEmpty(enquiryFormData.enquiryMessage, {
        ignore_whitespace: true,
      })
    ) {
      return alert("Please enter a message");
    }

    try {
      const response = await axios.post(enquiryFormData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" container mx-auto max-w-[500px] h-[90dvh] flex flex-col px-5 ">
      <div className=" h-full flex flex-col justify-center ">
        <h2 className="text-2xl text-primary font-bold pb-3">Admin</h2>
        <p className=" text-xl font-extralight">Lilian Umoh</p>
        <p className=" text-xl font-extralight">+234 443 334328</p>
        <p className=" text-xl font-extralight">lilian@gmail.com</p>
      </div>

      <div className=" h-full">
        <form className="flex flex-col gap-3">
          <Input
            onChange={(e) =>
              setEnquiryFormData({
                ...enquiryFormData,
                name: e.target.value,
              })
            }
            size="large"
            placeholder="Enter name here"
          />
          <Input
            onChange={(e) =>
              setEnquiryFormData({ ...enquiryFormData, email: e.target.value })
            }
            size="large"
            placeholder="Enter email address here"
          />
          <TextArea
            onChange={(e) =>
              setEnquiryFormData({
                ...enquiryFormData,
                enquiryMessage: e.target.value,
              })
            }
            rows={6}
            placeholder="Enter message here"
            maxLength={600}
          />
          <Button
            // onClick={handleAddEnquiryName}
            type="primary"
            className=" cursor-pointer bg-secondary hover:bg-secondary"
          >
            Send message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

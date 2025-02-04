import { Button, Input } from "antd";
import React from "react";

const ContactUs = () => {
  const { TextArea } = Input;
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
          <Input size="large" placeholder="Enter name here" />
          <Input size="large" placeholder="Enter email address here" />
          <TextArea rows={6} placeholder="Enter message here" maxLength={600} />
          <Button
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

import React from "react";
import moment from "moment";
import { Link } from "react-router";

const EnquiryList = ({ enquiries }) => {
  console.log(enquiries);

  return (
    <section className="max-w-[1000px] mx-auto py-12">
      <table className="w-full">
        <thead>
          <tr className="text-left text-secondary">
            <td>Time</td>
            <th>Name</th>
            <th>Email</th>
            <th>Enquiry Message</th>
          </tr>
        </thead>

        <tbody>
          {enquiries.map((item) => {
            return (
              <tr key={item._id}>
                <td>
                  {moment(item.createdAt).format("MMMM Do YYYY, h:mm:ss")}
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.enquiryMessage}</td>
                <td>
                  <Link className="border border-secondary px-4 rounded-md cursor-pointer font-semibold text-black hover:bg-secondary hover:text-white transition-all duration-500">
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default EnquiryList;

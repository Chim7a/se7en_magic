import React from "react";
import moment from "moment";
import { Link } from "react-router";

const EnquiryList = ({ enquiries }) => {
  return (
    <section className="max-w-[1000px] mx-auto py-12">
      <table className="w-full">
        <thead>
          <tr className="text-left text-secondary h-10">
            <th>Time</th>
            <th>Name</th>
            <th>Email</th>
            <th>Enquiry Message</th>
          </tr>
        </thead>

        <tbody>
          {enquiries.map((item) => {
            return (
              <tr
                key={item._id}
                className=" border-y-2 border-primary rounded-md h-10 hover:bg-primary hover:bg-opacity-85 hover:text-white"
              >
                <td>
                  {moment(item.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.enquiryMessage}</td>
                <td>
                  <Link
                    to={`/${item._id}`}
                    className="border border-white bg-secondary px-4 rounded-md cursor-pointer font-light text-white hover:bg-accent hover:text-primary transition-all duration-500"
                  >
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

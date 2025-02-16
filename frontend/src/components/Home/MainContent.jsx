import Item from "antd/es/list/Item";
import React from "react";

const MainContent = () => {
  const contentLinks = [
    {
      projectName: "Wedding",
      projectImg:
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      projectName: "Wedding",
      projectImg:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      projectName: "Wedding",
      projectImg:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      projectName: "Wedding",
      projectImg:
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      projectName: "Wedding",
      projectImg:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      projectName: "Wedding",
      projectImg:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      projectName: "Wedding",
      projectImg:
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      projectName: "Wedding",
      projectImg:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      projectName: "Wedding",
      projectImg:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 px-5">
      {contentLinks.map((item, index) => {
        return (
          <figure className="relative group" key={index}>
            <img
              className="w-full h-full object-cover"
              alt={item.projectName}
              src={item.projectImg}
            />
            {/* <!-- Text --> */}
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-900 hover:bg-black hover:bg-opacity-80">
              <p>{item.projectName}</p>
            </div>
          </figure>
        );
      })}
    </div>
  );
};

export default MainContent;

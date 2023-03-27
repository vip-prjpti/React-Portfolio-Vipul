import React from "react";
import '../../App.css'
import { BsArrowRight } from "react-icons/bs";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card " key={item.id}>
      <img src={item.image} alt="" className="work__image " />
      <h3 className="work__title">{item.title}</h3>

      <div className="flex justify-between">
      <a href={item.github} className="cursor-pointer work_button flex hover:ml-2 duration-500">
      Code <BsArrowRight className="work__button-icon flex ml-2 mt-1 " />
      </a>
      <a href={item.url} className="cursor-pointer group work_button flex ">
      Live <BsArrowRight className="work__button-icon flex ml-2 mt-1 group-hover:mr-[-8px]" />
      </a>
      </div>
    </div>
  );
};

export default WorkItems;

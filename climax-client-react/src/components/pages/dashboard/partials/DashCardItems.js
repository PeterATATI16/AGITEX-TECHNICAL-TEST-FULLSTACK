import React from "react";
import { useNavigate } from "react-router-dom";
import ICON from "../../../ui/ICONS/ICON";
import DashCard from "../../../ui/dashboard/DashCard";
import { getLength } from "../../../../utils/Util";

const DashCardItems = (props) => {
  const { users, isLoading } = props;
  const navigate = useNavigate();


  const items = [
    {
      title: "Client",
      value: getLength(users),
      icon: ICON.user_ico,
      color: "primary",
      onclick: () => navigate("/clients"),
    },
  ];

  return (
    <>
      {items?.map((item, index) => (
        <DashCard
          key={index}
          title={item.title}
          value={item.value}
          icon={item.icon}
          color={item.color}
          isLoading={isLoading}
          onclick={item.onclick}
        />
      ))}
    </>
  );
};

export default DashCardItems;

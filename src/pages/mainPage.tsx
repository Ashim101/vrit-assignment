import { useState } from "react";
import Card from "../components/card";

export type cardDataType = {
  id: number;
  title: string;
  number: string;
  desc: string;
};

export const cardData = [
  {
    id: 1,
    title: "All Courses",
    number: "23",
    desc: "Courses you're powering through right now.",
  },
  {
    id: 2,
    title: "Upcoming Courses",
    number: "05",
    desc: "exciting new courses waiting to boast your skills.",
  },
  {
    id: 3,
    title: "Ongoing Courses",
    number: "10",
    desc: "currently hapenning -don't miss out on the action!",
  },
];

const MainPage = () => {
  const [selectedItem, setSelectedItem] = useState(1);
  const selectHandler = (id: number) => {
    setSelectedItem(id);
  };
  return (
    <div className="flex min-h-screen w-full flex-col container m-auto px-12 py-12 gap-12">
      <div className="flex flex-col gap-5">
        <p className="font-normal text-2xl text-[#414141] leading-[28.8px]">
          Explore Our Classes and master trending skills!
        </p>
        <p className="font-bold text-[32px] leading-[38.4px] text-[#2b2b2b]">
          Dive Into<span className="text-[#1da077]"> What's Hot Right Now!</span>
          {"🔥 "}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-row gap-8">
        {cardData.map((card) => (
          <Card
            key={card.id}
            card={card as cardDataType}
            selectedItem={selectedItem}
            selectHandler={selectHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default MainPage;

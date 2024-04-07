import React from "react";
import Image from "next/image";
import MyImage from "../../public/images/img1.jpg";

const LearnImages = () => {
  return (
    <>
      <Image
        className="h-[200px] w-[200px] rounded-full border-rose-100"
        src={MyImage}
        alt="My Image"
      />
    </>
  );
};

export default LearnImages;

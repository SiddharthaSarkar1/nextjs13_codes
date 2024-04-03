import React from "react";

const MyProfile = ({params}) => {
  return (
    <>
      <h1>My Profile</h1>
      <hr />
      <h2>Id is : {params.id}</h2>
    </>
  );
};

export default MyProfile;
